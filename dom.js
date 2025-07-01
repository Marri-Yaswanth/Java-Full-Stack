const myDiv = document.getElementById('main-title').innerHTML="Yaswanth";
console.log(myDiv);

const main1 = document.createElementByClassName('paragraph');
console.log(main1);

const main2 = document.createElementByTagName('li');
console.log(main2);

const myButton = document.getElementById('my-button');

function HandleClick(){
    console.log("Button was Clicked!");
    myButton.textContent = "Clicked!";
}

myButton.addEventListener('click', HandleClick);