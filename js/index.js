//Event #1 //

const button = document.querySelector('.btn');

button.addEventListener('mouseover', function (clickHandler) {
    clickHandler.target.style.background = 'purple';
})

// button.addEventListener('mouseover', function (event) {
//     event[0].target.style.background = 'purple';
// })

//Event #2 //

const content = document.querySelector('.content-section');

content.addEventListener('click', function (clickHandler) {
    clickHandler.target.style.background = 'lightblue';
})

//Event #3 //


const busImg = document.querySelector('.home img');
busImg.addEventListener('click', () => {
    busImg.style.display = 'none';
});

//Event #4 //
const home = document.querySelector('.intro h2');
home.addEventListener('mouseout', () => {
    if(home.textContent === "Welcome to Fun Bus!") {
        home.textContent = "Get the heck OFF my bus!"
    } else {
        home.textContent = "Welcome to Fun Bus!"
    }
});

//Event #5 //

const destination = document.querySelector('.destination');
destination.addEventListener('click', () => {
    destination.style.border = '.3px solid black'; 
});

// Event #6 //

// const destImg = document.querySelector('.content-destination img');

// destImg.addEventListener('focus', (event) => {
//   event.target.style.background = 'pink';    
// });

// destImg.addEventListener('blur', (event) => {
//   event.target.style.background = '';    
// });

// Event #7 //
const mainNav = document.querySelector('.main-navigation a');
mainNav.addEventListener('mouseover', () => {
    mainNav.style.color = 'orange';
});



// console log 
console.log(button)
console.log(busImg)
console.log(home)
console.log(destination)
// console.log(destImg)
console.log(mainNav)



