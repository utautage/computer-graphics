document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    let startX = document.getElementById("startX");
    let startY = document.getElementById("startY");
    let endX = document.getElementById("endX");
    let endY = document.getElementById("endY");
    let interval = -1;
    context.lineWidth = 1;
    function drawLine() {
        clearInterval(interval);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.moveTo(startX.value, startY.value);
        context.lineTo(endX.value, endY.value);
        context.stroke();
    }
    drawLine();
    document.getElementById("reset").addEventListener("click", drawLine);
    document.getElementById("ex1").addEventListener("click", () => {
        startX.value = parseInt(startX.value) + 10;
        startY.value = parseInt(startY.value) - 20;
        endX.value = parseInt(endX.value) + 10;
        endY.value = parseInt(endY.value) - 20;
        drawLine();
    });
    document.getElementById("ex2").addEventListener("click", () => {
        let x = parseInt(startX.value);
        let y = parseInt(startY.value);
        startX.value = Math.SQRT1_2 * (x - y);
        startY.value = Math.SQRT1_2 * (x + y);
        x = parseInt(endX.value);
        y = parseInt(endY.value);
        endX.value = Math.SQRT1_2 * (x - y);
        endY.value = Math.SQRT1_2 * (x + y);
    });
    document.getElementById("ex3").addEventListener("click", () => {
        let scale = parseInt(document.getElementById("sx").value);
        startX.value = scale * parseInt(startX.value);
        endX.value = scale * parseInt(endX.value);
        scale = parseInt(document.getElementById("sy").value);
        startY.value = scale * parseInt(startY.value);
        endY.value = scale * parseInt(endY.value);
        drawLine();
    });
    document.getElementById("ex4-x").addEventListener("click", () => {
        startX.value = -parseInt(startX.value);
        endX.value = -parseInt(endX.value);
        drawLine();
    });
    document.getElementById("ex4-y").addEventListener("click", () => {
        startY.value = -parseInt(startY.value);
        endY.value = -parseInt(endY.value);
        drawLine();
    });
    document.getElementById("ex4-xy").addEventListener("click", () => {
        startX.value = -parseInt(startX.value);
        startY.value = -parseInt(startY.value);
        endX.value = -parseInt(endX.value);
        endY.value = -parseInt(endY.value);
        drawLine();
    });
    document.getElementById("asg").addEventListener("click", () => {
        clearInterval(interval);
        let y = 200;
        interval = setInterval(() => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.moveTo(100, y);
            context.lineTo(300, y);
            context.stroke();
            y += 1;
        }, 10);
    });
    document.getElementById("app").addEventListener("click", () => {
        clearInterval(interval);
        let angle = 0;
        interval = setInterval(() => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.moveTo(200 + 100 * Math.cos(angle), 200 + 100 * Math.sin(angle));
            for (let i = 1; i < 10; i++) {
                context.lineTo(200 + 100 * Math.cos(0.2*Math.PI * i+angle), 200 + 100 * Math.sin(0.2*Math.PI * i+angle));
            }
            context.closePath();
            context.stroke();
            angle += 0.01;
        }, 10);
    });
});
