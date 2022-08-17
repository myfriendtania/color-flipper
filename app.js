const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// const randRGB = () => {
//     const rand0to255 = () => Math.floor(Math.random() * 255)
//     return `rgb(${rand0to255()}, ${rand0to255()}, ${rand0to255()})`
// }

btn.addEventListener('click', function () {
 //get random number between 0-3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    // saving for laters
    // document.body.style.backgroundColor = randRGB();
    // color.textContent = randRGB();
});
function getRandomNumber (){
    return Math.floor(Math.random() * colors.length);
}