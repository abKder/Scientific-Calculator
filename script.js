function appendToDisplay(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function deleteLastChar() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        expression = expression.replace(/pi/g, "Math.PI").replace(/e/g, "Math.E").replace(/sqrt\(/g, "Math.sqrt(").replace(/log\(/g, "Math.log(").replace(/sin\(/g, "Math.sin(").replace(/cos\(/g, "Math.cos(").replace(/tan\(/g, "Math.tan(").replace(/\^/g, "**");
        document.getElementById("display").value = eval(expression);
    } catch {
        document.getElementById("display").value = "Error";
    }
}