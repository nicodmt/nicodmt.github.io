var c = document.getElementById("backgroundText");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//characters to display
const letters = "abcdefghijklmnopqrstuvwxyz";
const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const operators = "#+-\\/|=";
const katakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲ";
const arabic = "اسشسزرذدخحجثتباصضطظعغفقكلمنهويءىئؤةإأٱآ٢٣٤٥٦٧٨٩١٠";
// const hieroglyphs = "𓂀𓂔𓂱𓂹𓂼𓃕𓃳𓃼𓄎𓄟𓄫𓄾𓅄𓆣𓇻𓉜𓉧𓋏𓍰𓁨"; not supported
const alien = "⏃⏚☊⎅⟒⎎☌⊑⟟⟊☍⌰⋔⋏⍜⌿⍾⍀⌇⏁⎍⎐⍙⌖⊬⋉";
const alphabet = letters + capitalLetters + numbers + operators + katakana + arabic + alien;

var font_size = 30;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y coordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#63a830"; //orange text
    ctx.font = font_size + "px arial";
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
        //a random character to print
        var text = alphabet[Math.floor(Math.random() * alphabet.length)];
        text.fontcolor("#FFF"); //trying to get the printed char to be white while trail is orange. Not going good!
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 33);