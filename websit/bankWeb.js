
////////////////////////////
const btnScroll = document.querySelector('.second--main--link');
const section1 = document.querySelector('#section-1');
const headerNav = document.querySelector('.header__nav');
const featuresBtn = document.querySelector('.second--main--link');
const h1 = document.querySelector('.main--header');
const allTabs = document.querySelector('.all__btn');
const tabs = document.querySelectorAll('.btn--in');
const operations = document.querySelectorAll('.operations__tab');
const contentNavLogo = document.querySelector(`.header`);
const sectionPartnership = document.querySelector('.section--partnership');
const firstSection = document.querySelector('.for__stiky');
const section2345 = document.querySelectorAll('.section--hidden')
const imgsInZ = document.querySelectorAll('img[data-src]');
///  start work ///

// // header
headerNav.addEventListener('mouseover', function (e) {
    //  if i click in mouse for how have ⬇
    if(e.target.classList.contains('link--nav')) {
        // stor what we click 
        const link = e.target;
        // we need all link--nav to stor it go to ⬇ parent then go to all link ⬇
        const allLinks = link.closest('.header__nav__ul').querySelectorAll('.link--nav');
        // console.log(allLinks) return all links ✔
        
        allLinks.forEach((el) =>  {
            if (el !== link) el.style.opacity = 0.5;
        });
    };
})

headerNav.addEventListener('mouseout', function(e) {
    const link = e.target;
    const allLinks = link.closest('.header__nav__ul').querySelectorAll('.link--nav');
    allLinks.forEach ((e)=> e.style.opacity = 1);
});

// to not be dry use this ⬇
// const allInOne = function(e,opacity) {
//     //  if i click in mouse for how have ⬇
//     if(e.target.classList.contains('link--nav')) {
//         // stor what we click 
//         const link = e.target;
//         // we need all link--nav to stor it go to ⬇ parent then go to all link ⬇
//         const allLinks = link.closest('.header__nav__ul').querySelectorAll('.link--nav');
//         // console.log(allLinks) return all links ✔
//         allLinks.forEach((el) =>  {
//             if (el !== link) el.style.opacity = opacity;
//         });
//     };
// }

// headerNav.addEventListener('mouseover', function (e) {
//     allInOne(e, .5);
// });
// headerNav.addEventListener('mouseout', function(e) {
//     allInOne(e, 1);
// });


// switch operations
allTabs.addEventListener('click', function(e) {
    // if you have child for this class ⬇
    // we use it because we have span in it so mybe i
    // will accidentally click them ✔ 
    const clicked = e.target.closest('.btn--in');

    // to not face errer
    if (!clicked) return;
    // console.log(clicked.getAttribute('data-tab'));

    // remove all first 1
    tabs.forEach((el)=> el.classList.remove('active'));
    // add class for only how click 2
    clicked.classList.add('active');

    // remove all first 1
    operations.forEach((el) => el.classList.remove('text--active'));
    // add class for only how click 2
    document.querySelector(`.transfer--${(clicked.getAttribute('data-tab'))}`).classList.add('text--active');
});

// Sticky navigation  old way not the best 
// window.addEventListener ('scroll', function () {
// if ( 1022 <= window.pageYOffset ) {
//     contentNavLogo.classList.add('stkiy');
// } else contentNavLogo.classList.remove('stkiy');
// });

// the best way to add sticky nav to use 
// =>     Intersection Observer API

// entery.nav.classList.toggle('.stkiy', entery.isIntersecting);

// Done
// const stickyNav = function(enteries, observer) {
//     enteries.forEach((enter) => {
        
//         if (!enter.isIntersecting) {
//             contentNavLogo.classList.add('stkiy');
//         } else contentNavLogo.classList.remove('stkiy');
//     });
// };

// // how to no height and width any element ⬇
// const heightOfNav = contentNavLogo.getBoundingClientRect();
// // console.log(heightOfNav.height)
// // it is 114px
// const obsOptions = {
//     root: null,
//     // it will true if > 0
//     threshold: 0,
//     rootMargin: `-${heightOfNav.height}px` // sit the hiehgt of nav to became great
// };


// first we need to creating a new intersection observer
// const observer = new IntersectionObserver(stickyNav, obsOptions);

// we have to do like this then pass the target elemetn in()
// observer.observe(firstSection);


// section--hidden 

// give all section class hidden who want to be


const revealSection = function (entery, boserver) {
    // save first value
    const [enter] = entery;
    // console.log(enter);

    if (!enter.isIntersecting) return;
    // for test
    // console.log(`now ${enter.target.id}`);
    enter.target.classList.remove('hiddn--section');
    // switch off
    boserver.unobserve(enter.target);
}

const rooot = {
    root: null,
    threshold: .15,
}

const sectionObserver = new IntersectionObserver(revealSection , rooot )

section2345.forEach( function(section) {
    section.classList.add('hiddn--section');
    sectionObserver.observe(section);
});

const clearImg = function (entery,boserver) {
    const [enter] = entery;
    console.log(enter);
    if(!enter.isIntersecting) return;
    // data-src stor in dataset ⬇
    enter.target.src = enter.target.dataset.src;
    enter.target.classList.remove('blur')
    boserver.unobserve(enter.target)
}

const setImg = new IntersectionObserver(clearImg, {
    root: null,
    threshold: .7,
});

imgsInZ.forEach((img) => setImg.observe(img));
