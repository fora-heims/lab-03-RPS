export function doesUserWin(user, comp) {
    if (user === comp) {
        return 'It\'s a draw'
    } else if (user === 'rock' && comp === 'scissors') {
        return 'You win';
    } else if (user === 'paper' && comp === 'rock') {
        return 'You win';
    } else if (user === 'scissors' && comp === 'paper') {
        return 'You win';
    } else {
        return 'You lose.';
    }
}