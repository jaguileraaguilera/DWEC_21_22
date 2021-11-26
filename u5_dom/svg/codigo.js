var svgNS = "http://www.w3.org/2000/svg";

window.onload = () => {
    document.getElementById("btn").addEventListener("click", cambiarColor);
    this.tagCircle = document.createElementNS(svgNS, "circle");
    this.tagCircle.setAttribute("x", "60");
    this.tagCircle.setAttribute("y", "70");
    this.tagCircle.setAttribute("fill", "red");
    this.tagCircle.setAttribute("id", "bolita");
    document.getElementById("panelPpal").appendChild(this.tagCircle);
}

function cambiarColor() {
    document.getElementById("bolita").setAttributeNS(null, "fill", "green");
}
