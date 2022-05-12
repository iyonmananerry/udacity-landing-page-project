/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//fetching the ul node from the dom .
const ul = document.getElementById("navbar__list");
const sections = document.querySelectorAll('section');

//creating a list tag //
const li = document.createElement("li");
// creating an anchor tag //
const anchorTag = document.createElement('a');
for (let i = 0; i < sections.length; i++) {
    //appending list elements to the ul node //
    let activeLi = ul.appendChild(li.cloneNode());
    //set the attribute of list //
    activeLi.setAttribute('class', 'navbar_list')

}
//selecting all values that have the class .navnar_list //
let selectedli = document.querySelectorAll('.navbar_list')
//looping through every list //
selectedli.forEach((anLi) => {
    //appending an anchor tag to each list //
    let activeAnchor = anLi.appendChild(anchorTag.cloneNode())

})
// selecting all anchor tags //
let allAnchor = document.querySelectorAll("a");
for (i = 1; i <= sections.length; i++) {

    //setting attribute for each anchor element in the allAnchor array
    //by their index.
    allAnchor[i - 1].setAttribute("href", `#section${i}`);
    //appending a text node to each anchor element 
    allAnchor[i - 1].appendChild(document.createTextNode(`section${i}`))
    //appending a class to each anchor element . 
    allAnchor[i - 1].classList.add("menu__link");
}

//an event that fires when the window of the browser is been scrolled . 
window.addEventListener("scroll", (event) => {
    event.preventDefault();
    sections.forEach(section => {
        let sectionMeasurements = section.getBoundingClientRect();
        //setting the active class when the top of the section border is 
        // greater than or equal to 0 and the section bottom is greater 
        // than zero .
        //the else statement will remove the preset class if the condition is 
        // false 
        if (sectionMeasurements.top >= 0 && sectionMeasurements.bottom > 0) {
            //give the current section in view the class of your-active-class 
            section.classList.add("your-active-class");
            section.classList.add('active')
        }
        else {
            //if the section is not in view remove the active class from it 
            section.classList.remove("your-active-class");
            section.classList.add('active')
        }
    })

})


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/






/**
 * End Main Functions
 * Begin Events *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


