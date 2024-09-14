const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d');

const pixelSize = 10; // Размер пикселя
canvas.addEventListener('click', function(event) {
    const x = Math.floor(event.offsetX / pixelSize) * pixelSize;
    const y = Math.floor(event.offsetY / pixelSize) * pixelSize;
    
    // Рисуем пиксель
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, pixelSize, pixelSize);




const colorPicker = document.getElementById('colorPicker');
canvas.addEventListener('click', function(event) {
    ctx.fillStyle = colorPicker.value;
    ctx.fillRect(x, y, pixelSize, pixelSize);
    });
});
