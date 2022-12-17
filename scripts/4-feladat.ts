class Product {
    name: string;
    price: number
   
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price
    }

  }
   
let products: Product[] = [];  

const formElement = document.getElementById('form');
for (let i = 0; i < 7; i++) {
    let rowIndex = i+1
    const formRow = document.createElement('div');
    formRow.innerHTML = 
    `${rowIndex}. termék
    <input type="text" id="name-${i}" placeholder="név">
    <input type="number" id="price-${i}" min="0" placeholder="ár">
    `   
    formElement?.appendChild(formRow);
  }
  const buttonElement = document.createElement('button');
  buttonElement.innerText = "Számol"
  buttonElement.setAttribute("type","button");
  buttonElement.onclick = function(e: Event){
    e.preventDefault();
   
    for (let i = 0; i < 7; i++) {
        let nameValue = ""
        let pricevalue = 0;
        let nameSelecor = "name-" + i;
        let priceSelecor = "price-" + i;
        const nameElement = document.getElementById(nameSelecor) as HTMLInputElement | null
        if(!nameElement != null && nameElement != undefined){
            nameValue =  nameElement?.value;
        }
        const priceElement = document.getElementById(priceSelecor) as HTMLInputElement | null
        if(!priceElement != null && priceElement != undefined){
            pricevalue =  Number(priceElement?.value);
        }
        if(nameValue != "" && pricevalue > 0) {
            let product = new Product(nameValue,pricevalue);
            products.push(product);
        }
    }
    console.log(products.length)
    const resultElement = document.getElementById('result') as HTMLSpanElement | null
    if(products.length < 5){
      if(resultElement != null){
        resultElement.setAttribute("class","text-error");
        resultElement.innerHTML = "";
        resultElement.innerHTML += "Kérlek adj meg legalább 5 terméket a számításhoz!</br>"
      }
    } else {
    let pricevalues = getPriceValues(products);
    let cheapestProduct = getMinPriceProduct(products);
    let mean = avg(pricevalues);
    let stdDeviaton = deviaton(pricevalues);
    if(resultElement != null){
        resultElement.removeAttribute("class");
        resultElement.innerHTML = "";
        resultElement.innerHTML += "<ul>"
        resultElement.innerHTML += "<li>A legyolcsóbb termék: " + cheapestProduct.name + " ára: " + cheapestProduct.price+ "</li>"
        resultElement.innerHTML += "<li>Az árak átlaga: " + mean + "</li>"
        resultElement.innerHTML += "<li>Az árak szórása: " + stdDeviaton + "</li>"
        resultElement.innerHTML += "</ul>"
    }
  }
    products = [];
  }
    

    
  formElement?.appendChild(buttonElement);


  function getPriceValues(products: Product[]): number[]{
    let values: number[] = [];
    products.forEach(p => {
        values.push(p.price);
    })
    return values;
  }

  function avg(values: number[]): number {
    let sum = 0
    values.forEach(value => {
        sum += value;
    });
    return sum / values.length;
  }

  function deviaton(values: number[]): number{
    let mean = avg(values);
    let stdDeviaton = 0;
    values.forEach(value => {
        stdDeviaton += Math.pow(value - mean, 2)
    });
    return Math.sqrt(stdDeviaton / (values.length -1));
  }

  function getMinPriceProduct(products: Product[]): Product {
    let cheapestProduct = products[0];
    products.forEach(p =>{
        if(p.price<cheapestProduct.price){
            cheapestProduct = p;
        }
    })
    return cheapestProduct;
  }

