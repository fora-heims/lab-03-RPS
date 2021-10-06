// IMPORT MODULES under test here:
import { doesUserWin } from '../utili.js';

const test = QUnit.test;

test('Draw - user === comp', (expect) => {
    const expected = 'draw';
    const actual = doesUserWin('rock', 'rock');
    expect.equal(actual, expected);
});

test('Win - user-paper v comp-rock', (expect) => {
    const expected = 'win';
    const actual = doesUserWin('paper', 'rock');
    expect.equal(actual, expected);
});

test('Win - user-scissors v comp-paper', (expect) => {
    const expected = 'win';
    const actual = doesUserWin('scissors', 'paper');
    expect.equal(actual, expected);
});

test('Win - user-rock v comp-scissors', (expect) => {
    const expected = 'win';
    const actual = doesUserWin('rock', 'scissors');
    expect.equal(actual, expected);
});

test('Lose', (expect) => {
    const expected = 'lose';
    const actual = doesUserWin('rock', 'paper');
    expect.equal(actual, expected);
});