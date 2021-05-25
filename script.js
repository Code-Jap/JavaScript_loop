

//Een loop die checkt of het huidige nummer even of oneven is.

for (let i = 0; i < 20; i++) {

    if ((i % 2) == 0) {
        console.log(i + " is even");
    }

    else if ((i % 2) == 1) {
        console.log(i + " is oneven");
    }

};



//Een loop die de tafel van 9 schrijft.

for (let i = 1; i <= 10; i++) {

    console.log(i + " x 9 = " + (i * 9));

};




//The grade assigner (geeft aan welke grade bij een bepaalde score hoort).

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}


for (let i = 60; i <= 100; i++) {

    console.log("Voor " + i + " punten, krijg je een " + assignGrade(i))
};

console.log(assignGrade(75));




/*


    if (i > 90) {
        console.log("voor " + i + " punten, krijg je een A");
        }
    
        else if (i > 80) {
            console.log("voor " + i + " punten, krijg je een B");
        }
    
        else if (i  > 70) {
            console.log("voor " + i + " punten, krijg je een C");
        }
    
        else if (i > 65) {
            console.log("voor " + i + " punten, krijg je een D");
        }
    
        else  {
            console.log("voor " + i + " punten, krijg je een E");
        }     
    }

*/







