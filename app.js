const game = ()=>{
    const options = document.querySelectorAll('.option');
    const types = ['rock','paper','scissors'];
    let player = '';
    let ai ='';
    let winner = '';
    let playerScore = 0;
    let aiScore = 0;
    options.forEach(opt => opt.addEventListener('click',playerChoose));

    function playerChoose(){
        player = this.dataset.type;
        ai = AImove()
        winner = check(player,ai);
        endGame(winner);
    }

    function AImove(){
        const index = Math.floor(Math.random()*3);
        const choice = types[index];
        return choice;
    }

    function check(player,ai){
        if(player == ai)  return 'draw';
        if(player=='scissors' && ai == 'paper') return 'player';
        if(ai=='scissors' && player == 'paper') return 'ai';
        if(player=='rock' && ai == 'scissors') return 'player';
        if(ai=='rock' && player == 'scissors') return 'ai';
        if(player=='paper' && ai == 'rock') return 'player';
        if(ai=='paper' && player == 'rock') return 'ai';
    }

    function endGame(winner){
        let text = '';
        if(winner == 'player'){
            text = 'You win !';
            playerScore++;
        }else if(winner == 'ai'){
            text ='You lose !'
            aiScore++;
        }else{
            text = 'Draw !'
        }
        const header = document.querySelector('h1');
        const score = document.querySelector('.score');
        header.innerHTML = text;
        score.innerHTML = `${playerScore} : ${aiScore}`;
    }

}

game();