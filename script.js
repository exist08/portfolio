
const hamburger = document.getElementById('bmenu')
const list = document.getElementById('menu-list')
hamburger.onclick = () => {
    hamburger.classList.toggle('active')
    list.classList.toggle('active')
}

const links = document.querySelectorAll('#menu-list li')
links.forEach(link => {
    link.onclick = () => {
        // alert('jaihoo')
        hamburger.classList.toggle('active')
        list.classList.toggle('active')
        if (!list.classList.contains('active')) {
            if (bmenue.style.cssText)
                bmenue.style.cssText = ``;
            else
                bmenue.style.cssText = `
                    transform: rotate(330deg);
                    transition: transform 1.5s;`;
            if (l1.style.cssText)
                l1.style.cssText = ``;
            else
                l1.style.cssText = `
                    background:yellow;
                    transition:background transform 0.5s ease;`;
            if (l2.style.cssText)
                l2.style.cssText = ``;
            else
                l2.style.cssText = `
                    transform: translateX(-9px) translateY(5px) rotate(60deg);
                    background:red;
                    transition: background transform 0.5s ease;`;
            if (l3.style.cssText)
                l3.style.cssText = ``;
            else
                l3.style.cssText = `
                    transform: translateX(9px) translateY(-5px) rotate(-60deg);
                    background:blue;
                    transition: background transform 0.5s ease;`;
        }
    }
});

const l1 = document.getElementById('line1');
const l2 = document.getElementById('line2');
const l3 = document.getElementById('line3');
const ul = document.getElementsByTagName('ul');
const bmenue = document.getElementById('bmenu');
bmenue.addEventListener('click', () => {
    if (bmenue.style.cssText)
        bmenue.style.cssText = ``;
    else
        bmenue.style.cssText = `
    transform: rotate(330deg);
    transition: transform 1.5s;`;
    if (l1.style.cssText)
        l1.style.cssText = ``;
    else
        l1.style.cssText = `
    background:yellow;
    transition:background transform 0.5s ease;`;
    if (l2.style.cssText)
        l2.style.cssText = ``;
    else
        l2.style.cssText = `
    transform: translateX(-9px) translateY(5px) rotate(60deg);
    background:red;
    transition: background transform 0.5s ease;`;
    if (l3.style.cssText)
        l3.style.cssText = ``;
    else
        l3.style.cssText = `
    transform: translateX(9px) translateY(-5px) rotate(-60deg);
    background:blue;
    transition: background transform 0.5s ease;`;
});





// Onscroll function - use it to add animations
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("menu-list").className = "slideUp";
//   }else {
//     document.getElementById("menu-list").className = "";
//   }
// }