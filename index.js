var penColor = document.getElementById("red")
var pixelClass = document.getElementsByClassName('pixel')
var colorPicker = document.getElementsByClassName('pencolor')

// Loop to generate pixel art canvas
function createPixels (numberofpixels){
    var mainCanvas = document.getElementById('canvas')
    for (var i = 0; i < numberofpixels; i++){
        let newPixel = document.createElement('div')
        newPixel.className = 'pixel'
        mainCanvas.appendChild(newPixel)
    }
}
createPixels(2500)

// loop to select color by clicking on color palete
for (var i = 0; i < colorPicker.length; i++){
    colorPicker[i].addEventListener('click',function(event){
        penColor = event.target.id
    })
}

for (let i = 0; i < pixelClass.length; i ++){
    pixelClass[i].addEventListener('click', function (event){
    event.target.id = penColor
    })
}

