var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var products = [];
var formElement = document.getElementById('form');
for (var i = 0; i < 7; i++) {
    var rowIndex = i + 1;
    var formRow = document.createElement('div');
    formRow.innerHTML =
        "".concat(rowIndex, ". term\u00E9k\n    <input type=\"text\" id=\"name-").concat(i, "\" placeholder=\"n\u00E9v\">\n    <input type=\"number\" id=\"price-").concat(i, "\" placeholder=\"\u00E1r\">\n    ");
    formElement === null || formElement === void 0 ? void 0 : formElement.appendChild(formRow);
}
var buttonElement = document.createElement('button');
buttonElement.innerText = "Számol";
buttonElement.setAttribute("type", "button");
buttonElement.onclick = function (e) {
    e.preventDefault();
    for (var i = 0; i < 7; i++) {
        var nameValue = "";
        var pricevalue = 0;
        var nameSelecor = "name-" + i;
        var priceSelecor = "price-" + i;
        var nameElement = document.getElementById(nameSelecor);
        if (!nameElement != null && nameElement != undefined) {
            nameValue = nameElement === null || nameElement === void 0 ? void 0 : nameElement.value;
        }
        var priceElement = document.getElementById(priceSelecor);
        if (!priceElement != null && priceElement != undefined) {
            pricevalue = Number(priceElement === null || priceElement === void 0 ? void 0 : priceElement.value);
        }
        if (nameValue != "" && pricevalue > 0) {
            var product = new Product(nameValue, pricevalue);
            products.push(product);
        }
    }
    console.log(products.length);
    var resultElement = document.getElementById('result');
    if (products.length < 5) {
        if (resultElement != null) {
            resultElement.innerText = "";
            resultElement.innerHTML += "Kérlek adj meg legalább 5 terméket a számításhoz</br>";
        }
    }
    else {
        var pricevalues = getPriceValues(products);
        var cheapestProduct = getMinPriceProduct(products);
        var mean = avg(pricevalues);
        var stdDeviaton = deviaton(pricevalues);
        if (resultElement != null) {
            resultElement.innerText = "";
            resultElement.innerHTML += "A legyolcsóbb termék: " + cheapestProduct.name + " ára: " + cheapestProduct.price + "</br>";
            resultElement.innerHTML += "Az árak átlaga: " + mean + "</br>";
            resultElement.innerHTML += "Az árak szórása: " + stdDeviaton;
        }
    }
    products = [];
};
formElement === null || formElement === void 0 ? void 0 : formElement.appendChild(buttonElement);
function getPriceValues(products) {
    var values = [];
    products.forEach(function (p) {
        values.push(p.price);
    });
    return values;
}
function avg(values) {
    var sum = 0;
    values.forEach(function (value) {
        sum += value;
    });
    return sum / values.length;
}
function deviaton(values) {
    var mean = avg(values);
    var stdDeviaton = 0;
    values.forEach(function (value) {
        stdDeviaton += Math.pow(value - mean, 2);
    });
    return Math.sqrt(stdDeviaton / (values.length - 1));
}
function getMinPriceProduct(products) {
    var cheapestProduct = products[0];
    products.forEach(function (p) {
        if (p.price < cheapestProduct.price) {
            cheapestProduct = p;
        }
    });
    return cheapestProduct;
}
