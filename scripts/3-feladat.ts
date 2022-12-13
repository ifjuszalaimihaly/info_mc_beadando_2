let names: string[] = [];  

const formTag = document.getElementById('form');
for (let i = 0; i < 7; i++) {
    let rowIndex = i+1
    const formRow = document.createElement('div');
    formRow.innerHTML = 
    `<input type="text" id="name-${i}" placeholder="${rowIndex}. string">`   
    formTag?.appendChild(formRow);
    
  }
const buttonTag = document.createElement('button');
buttonTag.innerText = "Randomizál"
buttonTag.setAttribute("type","button");
formTag?.appendChild(buttonTag);
buttonTag.setAttribute("type","button");
buttonTag.onclick = function(e: Event){
    e.preventDefault();
   
    for (let i = 0; i < 7; i++) {
        let nameValue = ""
        let nameSelecor = "name-" + i;
        const nameTag = document.getElementById(nameSelecor) as HTMLInputElement | null
        if(!nameTag != null && nameTag != undefined){
            nameValue =  nameTag?.value;
        }
        if(nameValue != "") {
            names.push(nameValue);
        }
    }
    const resultTag = document.getElementById('result') as HTMLSpanElement| null
    if(names.length < 5){
      if(resultTag != null){
        resultTag.innerText = "";
        resultTag.innerHTML += "Kérlek adj meg legalább 5 terméket a számításhoz</br>"
      }
    } else {
        let randomIndexes: number[] = [];
        while (randomIndexes.length < 3){
            let randomNumber = Math.floor(Math.random() * names.length)
            if(!containsValue(randomIndexes,randomNumber)){
                randomIndexes.push(randomNumber)
            } 
        }
        if(resultTag != null){
            resultTag.innerText = "";
            randomIndexes.forEach(index => {
                resultTag.innerHTML += names[index] +  "</br>"
            });
          }
    }
    names = [];
  }
   

  function containsValue(values: number[], value: number): boolean {
    let contains = false;
    values.forEach(element => {
        if(element == value) {
            contains = true;
        }
    });
    return contains;
  }