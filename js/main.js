const button = document.getElementById("button");

button.addEventListener("click", function () {


    // Richiamo la funzione che mi crea ogni singolo quadrato
    createSinglesquare();
    const arrayBomb = createBomb();
    verificaBomb(arrayBomb);

    


})

// Creao array di 16 bombe
function createBomb() {

    let arrayBomb = [];

    //   Creo 16 numeri random

    for (let i = 0; i < 16; i++) {
        const numRandomBomb = Math.round(Math.random() * 99) + 1;
        // console.log(numRandomBomb);
        // arrayBomb.push(numRandomBomb)


        if ((arrayBomb.indexOf(numRandomBomb)) === -1) {

            arrayBomb.push(numRandomBomb);

        } else (i--);
    }

    console.log(arrayBomb);
    
    return arrayBomb;
}

// creo una funzione per verificare 
function verificaBomb(bombRandomArray) {
    const listaSquare = document.querySelectorAll(".square")
    console.log(listaSquare);
    for (let i = 0; i < listaSquare.length; i++) {

        console.log(i);

        //  Al click 
        listaSquare[i].addEventListener("click", function () {


            listaSquare[i].classList.toggle("bg-success");

            for (let j = 0; j < bombRandomArray.length; j++) {
                const randomBomb = bombRandomArray[j];
                console.log(randomBomb);

                if (randomBomb === (i + 1)) {
                    listaSquare[i].classList.toggle("bg-warning");
                    listaSquare[i].innerHTML = `<i class="fa-solid fa-bomb"></i>`;

                    console.log("hai preso una bomba", + randomBomb);
                    break;
                }
            }

        })
    }

}



//  Porto fuori dal button click la funzione

function createSinglesquare() {
    const containerGrid = document.getElementById("container-grid");
    const squareChoseInput = document.getElementById("square-chose");
    // select
    const squareChose = parseInt(squareChoseInput.value);

    if (squareChose === 49) {
        containerGrid.style.width = "630px";
    } else if (squareChose === 81) {
        containerGrid.style.width = "810px";
    } else if (squareChose === 100) {
        containerGrid.style.width = "900px";
    }

    for (let i = 1; i <= squareChose; i++) {

        const squareSingolo = `<div class="square"></div>`
        // const squareSingolo = document.createElement("div");
        // squareSingolo.classList.add("square");

        containerGrid.innerHTML += squareSingolo;
        // console.log(containerGrid);

    }

    
// containerGrid.append(listaSquare);

// return square
}


