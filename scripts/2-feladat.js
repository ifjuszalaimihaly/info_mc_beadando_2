function toDegToRad(angle) {
    return angle * (Math.PI / 180);
}
function parabolaArea(a, b, angle) {
    var angleInRad = toDegToRad(angle);
    return a * b * Math.sin(angleInRad);
}
var button = document.getElementById('btn');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function handleClick(event) {
    var siteaVaule = 0;
    var sitebVaule = 0;
    var angleVaule = 0;
    var siteaElement = document.getElementById('sitea');
    if (!siteaElement != null && siteaElement != undefined) {
        siteaVaule = Number(siteaElement === null || siteaElement === void 0 ? void 0 : siteaElement.value);
    }
    var sitebElement = document.getElementById('siteb');
    if (!sitebElement != null && siteaElement != undefined) {
        sitebVaule = Number(sitebElement === null || sitebElement === void 0 ? void 0 : sitebElement.value);
    }
    var angleElement = document.getElementById('angle');
    if (!angleElement != null && angleElement != undefined) {
        angleVaule = Number(angleElement === null || angleElement === void 0 ? void 0 : angleElement.value);
    }
    var areaValue = parabolaArea(siteaVaule, sitebVaule, angleVaule);
    var areaElement = document.getElementById('area');
    if (areaElement != null) {
        if (areaValue > 0) {
            areaElement.removeAttribute("class");
            areaElement.textContent = "A paralelogramma területe: " + areaValue;
        }
        else {
            areaElement.setAttribute("class", "text-error");
            areaElement.textContent = "A paralelogramma területének számításához töltsd ki mind a három mezőt, egyik érték se legyen nulla, vagy negatív!";
        }
    }
});
