let tally = 0;

const score = document.getElementById("clicky");
const showy = document.getElementById("output");

function count() {
    const x = document.getElementById("clicky");
    
    if (tally < 9){
        tally++;
        show();
    }
    else{
        tally++;
        show();
        score.disabled = true;
        score.classList.add("disabled-no-animation");

    }
}

function reset(){
    tally = 0;
    score.disabled = false;
    score.classList.remove("disabled-no-animation");
    show()
}

function show(){
    showy.textContent = 
            `You have pressed the button ${tally} time${tally !== 1 ? 's' : ''}`;
}