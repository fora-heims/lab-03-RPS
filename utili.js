export function doesUserWin(user, comp) {
    if (user === comp) {
        return 'draw';
    } else if (user === 'rock' && comp === 'scissors') {
        return 'win';
    } else if (user === 'paper' && comp === 'rock') {
        return 'win';
    } else if (user === 'scissors' && comp === 'paper') {
        return 'win';
    } else {
        return 'lose';
    }
}