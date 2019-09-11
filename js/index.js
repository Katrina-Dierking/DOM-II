//Event #1 //

const button = document.querySelectorAll('.btn');
button.forEach(btn => {
    btn.addEventListener('mouseover', () => {
    btn.style.background = 'purple';
    })
})



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

const mainNav = document.querySelectorAll('a');
mainNav.forEach(a => {
    a.addEventListener('mouseover', () => {
         a.style.color="orange"
    })
 })

// Event #7 //

const dblP = document.querySelectorAll('p');
dblP.forEach(p => {
    p.addEventListener('mouseout', () => {
        p.style.fontWeight = 'bold'
    })
})

// Event #8 //

window.addEventListener('resize', event => {
    console.log(window.innerWidth, window.innerHeight)
  })

  //Event #9 //

const subTitles = document.querySelectorAll('h4');
subTitles.forEach(h4 => {
    h4.addEventListener('dblclick', () => {
        h4.style.color = 'green'
    })
})


// Event #10 //

const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseout', () => {
    logo.style.border = '.5px dotted red'; 
});





// console log 
console.log(button)
console.log(busImg)
console.log(home)
console.log(destination)
console.log(mainNav)
console.log(logo)
console.log(subTitles)


