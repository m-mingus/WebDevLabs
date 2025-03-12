// step 4
var x = 5, y = 7, z = x + y;

console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);


// step 5
function SumNPrint(x1, x2){
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);


// step 6
if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}


// step 7
let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(L) {
    for (let i = 0; i < L.length; i++) {
        if (L[i] === "Banana") {
            alert("found the Banana in " + i);
        }
    }
}

findTheBanana(L1);
findTheBanana(L2);



// step 8
function findTheBananaForEach(L) {
    const positions = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth', 'twentieth'];    
    L.forEach(function(item, index) {
        if (item === "Banana") {
            alert("We found a banana in the " + positions[index] + " position");
        }
    });
}

findTheBananaForEach(L1);
findTheBananaForEach(L2);


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

    // step 10
    if (window.location.href.includes("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/")) {
        const E = document.getElementById("greeting");
        if (E) {
            E.innerHTML = greeting + ", my name is Matthew";
        }
    }
}


greetingFunc();