var names = [];
var formTag = document.getElementById('form');
for (var i = 0; i < 7; i++) {
    var rowIndex = i + 1;
    var formRow = document.createElement('div');
    formRow.innerHTML =
        "<input type=\"text\" id=\"name-".concat(i, "\" placeholder=\"").concat(rowIndex, ". string\">");
    formTag === null || formTag === void 0 ? void 0 : formTag.appendChild(formRow);
}
var buttonTag = document.createElement('button');
buttonTag.innerText = "Randomizál";
buttonTag.setAttribute("type", "button");
formTag === null || formTag === void 0 ? void 0 : formTag.appendChild(buttonTag);
buttonTag.setAttribute("type", "button");
buttonTag.onclick = function (e) {
    e.preventDefault();
    for (var i = 0; i < 7; i++) {
        var nameValue = "";
        var nameSelecor = "name-" + i;
        var nameTag = document.getElementById(nameSelecor);
        if (!nameTag != null && nameTag != undefined) {
            nameValue = nameTag === null || nameTag === void 0 ? void 0 : nameTag.value;
        }
        if (nameValue != "") {
            names.push(nameValue);
        }
    }
    var resultTag = document.getElementById('result');
    if (names.length < 5) {
        if (resultTag != null) {
            resultTag.innerText = "";
            resultTag.innerHTML += "Kérlek adj meg legalább 5 terméket a számításhoz</br>";
        }
    }
    else {
        var randomIndexes = [];
        while (randomIndexes.length < 3) {
            var randomNumber = Math.floor(Math.random() * names.length);
            if (!containsValue(randomIndexes, randomNumber)) {
                randomIndexes.push(randomNumber);
            }
        }
        if (resultTag != null) {
            resultTag.innerText = "";
            randomIndexes.forEach(function (index) {
                resultTag.innerHTML += names[index] + "</br>";
            });
        }
    }
    names = [];
};
function containsValue(values, value) {
    var contains = false;
    values.forEach(function (element) {
        if (element == value) {
            contains = true;
        }
    });
    return contains;
}
