function getQR(){
    var userInput = document.getElementById("input").value;
    var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput}`;
    var img = document.getElementById("img");

    img.src = url;
}