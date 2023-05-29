let playerscore = 0;
let computerscore = 0;
const player = document.querySelector(".player1");
const opponent = document.querySelector(".opponent1");
const result1 = document.querySelector(".div1");
const result2 = document.querySelector(".div2");
const finalresult = document.querySelector(".result");
const next = document.querySelector(".nxt");
if (next != null){
    next.addEventListener("click", () => {
        let input = document.querySelector(".input").value;
        let inpu = input.charAt(0).toUpperCase() + input.slice(1);
        localStorage.setItem('inp', inpu);
    });
}
function iscomputer(){
    let a = Math.floor(Math.random() * 3);
    if (a == 0){
        return ("scissor");
    }
    if (a == 1){
        return ("stone");
    }
    if (a == 2){
        return ("paper");
    }
}
function playRound(player_choice, computerchoice){
    const input1 = localStorage.getItem('inp');
    if (player_choice == computerchoice)
    {
        if (player_choice == "scissor"){
            player.innerHTML = `You choose Scissor`;
            opponent.innerHTML = `Computer choose Scissor`;
            var x = document.querySelector(".img");
            x.setAttribute("src", "images/scissor.png");
            var y = document.querySelector(".img1");
            y.setAttribute("src", "images/scissor.png");
        }
        else if (player_choice == "stone"){
            player.innerHTML = `You choose Stone`;
            opponent.innerHTML = `Computer choose Stone`;
            var x = document.querySelector(".img");
            x.setAttribute("src", "images/stone.png");
            var y = document.querySelector(".img1");
            y.setAttribute("src", "images/stone.png");
        }
        else if (player_choice == "paper"){
            player.innerHTML = `You choose Paper`;
            opponent.innerHTML = `Computer choose Paper`;
            var x = document.querySelector(".img");
            x.setAttribute("src", "images/paper.png");
            var y = document.querySelector(".img1");
            y.setAttribute("src", "images/paper.png");
        }
        result1.innerHTML = `TIE!`
        result2.innerHTML =`${input1} : ${playerscore}&emsp;&emsp;Computer : ${computerscore}`;
    }
    else if (player_choice == "scissor"){
        if (computerchoice == "stone"){
            computerscore++;
            player.innerHTML = `You choose Scissor`;
            opponent.innerHTML = `Computer choose Stone`;
            result1.innerHTML = `Stone beats Scissor`;
            result2.innerHTML =`${input1} : ${playerscore}&emsp;&emsp;Computer : ${computerscore}`;
            var x = document.querySelector(".img");
            x.setAttribute("src", "images/scissor.png");
            var y = document.querySelector(".img1");
            y.setAttribute("src", "images/stone.png");
        }
        else{
            playerscore++;
            player.innerHTML = `You choose Scissor`;
            opponent.innerHTML = `Computer choose Paper`;
            var x = document.querySelector(".img");
            x.setAttribute("src", "images/scissor.png");
            var y = document.querySelector(".img1");
            y.setAttribute("src", "images/paper.png");
            result1.innerHTML = `Scissor beats paper`;
            result2.innerHTML =`${input1} : ${playerscore}&emsp;&emsp;Computer : ${computerscore}`;
        }
    }
    else if (player_choice == "stone"){
        if (computerchoice == "paper"){
            computerscore++;
            player.innerHTML = `You choose Stone`;
            opponent.innerHTML = `Computer choose Paper`;
            var x = document.querySelector(".img");
            x.setAttribute("src", "images/stone.png");
            var y = document.querySelector(".img1");
            y.setAttribute("src", "images/paper.png");
            result1.innerHTML = `Paper beats Stone`;
            result2.innerHTML =`${input1} : ${playerscore}&emsp;&emsp;Computer : ${computerscore}`;
        }
        else{
            playerscore++;
            player.innerHTML = `You choose Stone`;
            opponent.innerHTML = `Computer choose Scissor`;
            var x = document.querySelector(".img");
            x.setAttribute("src", "images/stone.png");
            var y = document.querySelector(".img1");
            y.setAttribute("src", "images/scissor.png");
            result1.innerHTML = `Scissor beats Paper`;
            result2.innerHTML =`${input1} : ${playerscore}&emsp;&emsp;Computer : ${computerscore}`;
        }
    }
    else if (player_choice == "paper"){
        if (computerchoice == "scissor"){
            computerscore++;
            player.innerHTML = `You choose Paper`;
            opponent.innerHTML = `Computer choose Scissor`;
            var x = document.querySelector(".img");
            x.setAttribute("src", "images/paper.png");
            var y = document.querySelector(".img1");
            y.setAttribute("src", "images/scissor.png");
            result1.innerHTML = `Scissor beats Paper`;
            result2.innerHTML =`${input1} : ${playerscore}&emsp;&emsp;Computer : ${computerscore}`;
        }
        else{
            playerscore++;
            player.innerHTML = `You choose Paper`;
            opponent.innerHTML = `Computer choose Stone`;
            var x = document.querySelector(".img");
            x.setAttribute("src", "images/paper.png");
            var y = document.querySelector(".img1");
            y.setAttribute("src", "images/stone.png");
            result1.innerHTML = `Paper beats Stone`;
            result2.innerHTML =`${input1} : ${playerscore}&emsp;&emsp;Computer : ${computerscore}`;
        }
    }


    if(playerscore == 5 && computerscore == 5){
        finalresult.innerHTML =`!!!!!!!!! TIE !!!!!!!!!`;
        result2.innerHTML =`${input1} : ${playerscore}&emsp;&emsp;Computer : ${computerscore}`;
        return 3;
    }
    if (playerscore == 5){
        finalresult.innerHTML =`VICTORY, ${input1} won against the computer`;
        result2.innerHTML =`${input1} : ${playerscore}&emsp;&emsp;Computer : ${computerscore}`;
        return 3;
    }
    else if(computerscore == 5){
        finalresult.innerHTML =`DEFEAT, ${input1} lost against the computer`;
        result2.innerHTML =`${input1} : ${playerscore}&emsp;&emsp;Computer : ${computerscore}`;
        return 3;
    }
    return 3;
}

const stone = document.querySelector(".stone");
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

if (stone != null){
    stone.addEventListener("click", () => {
        if(playerscore < 5 && computerscore < 5){
            playRound("stone", iscomputer());
        }
    });
}

if (paper != null){
    paper.addEventListener("click", () => {
        if(playerscore < 5 && computerscore < 5){
            playRound("paper", iscomputer());
        }
    });
}

if (scissor != null){
    scissor.addEventListener("click", () => {
        if(playerscore < 5 && computerscore < 5){
            playRound("scissor", iscomputer());
        }
    });
}

const again = document.querySelector(".button2 > button");
if (again != null){
    again.addEventListener('click', () => {
        result1.innerHTML =``;
        result2.innerHTML =``;
        player.innerHTML = ``;
        opponent.innerHTML = ``;
        finalresult.innerHTML =``;
        var x = document.querySelector(".img");
        var y = document.querySelector(".img1");
        x.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
        y.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
        computerscore = 0;
        playerscore = 0;
    });
}
