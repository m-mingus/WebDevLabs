// step 4
// var x = 5, y = 7, z = x + y;

// console.log(z);

// let A = "Hello ";
// let B = "world!";
// let C = A + B;
// console.log(C);


// // step 5
// function SumNPrint(x1, x2){
//     let x3 = x1 + x2;
//     console.log(x3);
// }

// SumNPrint(x, y);
// SumNPrint(A, B);


// // step 6
// if (C.length > z) {
//     console.log(C);
// } else if (C.length < z) {
//     console.log(z);
// } else {
//     console.log("good job!");
// }


// // step 7
// let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(L) {
//     for (let i = 0; i < L.length; i++) {
//         if (L[i] === "Banana") {
//             alert("found the Banana in " + i);
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);



// step 8
// function findTheBananaForEach(L) {
//     const positions = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth', 'twentieth'];    
//     L.forEach(function(item, index) {
//         if (item === "Banana") {
//             alert("We found a banana in the " + positions[index] + " position");
//         }
//     });
// }

// findTheBananaForEach(L1);
// findTheBananaForEach(L2);


// step 9
function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting;

    if (h < 12) {
        greeting = "Good morning";
    } else if (h < 18) {
        greeting = "Good afternoon";
    } else if (h < 20) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }

    // set the greeting message
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = greeting + ", my name is Matthew";
    }
}

// lab 4 step 2
function addYear() {
    const currYear = new Date().getFullYear();
    const yearElem = document.getElementById("copyYear");
    if (yearElem) {
        yearElem.textContent = currYear;
    }
}


// lab 4 step 3
// function showList() {
//     document.getElementById("fun-list").style.display = "block";
//     document.getElementById("show-list-btn").style.display = "none";
// }

// lab 4 step 4
if (typeof jQuery !== 'undefined') {
    $(document).ready(function() {
        $("#read-more-btn").click(function() {
            $("#short-bio, #read-more-btn").hide();
            $("#full-bio").show();
        });
        
        $("#read-less-btn").click(function() {
            $("#short-bio, #read-more-btn").show();
            $("#full-bio").hide();
        });
    });
}



// lab 4 step 5
function validateForm() {
    var user = document.getElementById("username");
    var email = document.getElementById("email");
    var text = document.getElementById("text");
    var error = document.getElementById("validation-message");
    if (!user.checkValidity() || email.checkValidity() || text.checkValidity()) {
        error.innerHTML = "Please fill out all fields correctly";
    }
}


// lab 5 step 5
function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    // convert the response to json
    .then(response => response.json())
    .then(data => document.getElementById("adviceText").innerText = data.slip.advice)
    // handle errors with .catch() to show error message if something goes wrong
    .catch(error => console.log('error', error));
}


//// lab 6 hamburger menu
document.addEventListener('DOMContentLoaded', function() {

    greetingFunc();

    // hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
    highlightCurrentPage();
});

// highlight active page in nav
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // check if the current path ends with the link's href
        if (currentPath.endsWith(linkPath)) {
            link.classList.add('active');
        } 
        // check with home page for special case
        else if ((currentPath.endsWith('/') || currentPath.endsWith('/index.html')) && 
                    linkPath === 'index.html') {
            link.classList.add('active');
        }
    });
}
