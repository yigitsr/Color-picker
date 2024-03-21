const dropArea = document.getElementById('drop-area')
const inputFile = document.getElementById('input-file')
const imageView = document.getElementById('img-view')

inputFile.addEventListener('change', uploadImage)

function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0])
    imageView.style.backgroundImage =  `url(${imgLink})`
    imageView.textContent = ""
    imageView.style.border = 0
}

dropArea.addEventListener("dragover", function(e){
    e.preventDefault()
})

dropArea.addEventListener("drop", function(e){
    e.preventDefault()
    inputFile.files = e.dataTransfer.files
    uploadImage()
})    

const button = document.querySelector('button');
const colorCode = document.getElementById('color-code')

const pickColor = async () => {
    const eyeDropper = new EyeDropper();
    const {sRGBHex} = await eyeDropper.open();
    colorCode.innerHTML = 'Color code is = ' + sRGBHex
    // alert(sRGBHex);
    // console.log(sRGBHex)
}

button.addEventListener('click', pickColor);
