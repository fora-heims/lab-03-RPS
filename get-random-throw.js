export const choices = ['rock', 'paper', 'scissors'];

export function compThrow() {
    return choices[Math.floor(Math.random() * choices.length)];
}