'use strict';

function splittedPokerString(inputA) {
    const splittedElements = inputA.split('-');

    return splittedElements.map(elements => {
        if (elements === ('J' || 'K' || 'Q')) {
            elements = '10';
        }
        return elements;
    });

}

function countA(pokerCards) {
    const poker = {countA: 0, totalWithoutA: 0, pokerCount: pokerCards.length};

    for (let pokerCard of pokerCards) {
        if (pokerCard === 'A') {
            poker.countA += 1;
        } else {
            poker.totalWithoutA += parseInt(pokerCard);
        }
    }
    
    return poker;
}

function calculateTotal(pokers) {

    let result = {total: pokers.totalWithoutA, pokerCount: pokers.pokerCount};

    for (let i = 0; i < pokers.pokerCount; i++) {
        result.total += 11;

        if (result.total >= 21) {
            result.total -= 10;
        }
    }

    return result;
}

function compare(resultA, resultB) {
    if (resultA.total <= 21 && resultB.total <= 21) {
        if (resultA.total === resultB.total) {
            if (resultA.pokerCount < resultB.pokerCount) {
                console.log('A赢');
            } else if (resultA.pokerCount > resultB.pokerCount) {
                console.log('B赢');
            } else {
                console.log('平局');
            }
        } else if (resultA.total > resultB.total) {
            console.log('A赢');
        } else {
            console.log('B赢');
        }
    }else if(resultA.total > 21 && resultB.total <= 21){
        console.log('B赢');
    }else if(resultA.total <= 21 && resultB.total > 21){
        console.log('A赢');
    }else {
        console.log('平局');
    }
}

function match(inputA, inputB) {
    const pokerStringA = splittedPokerString(inputA);
    const pokerA = countA(pokerStringA);
    const resultA = calculateTotal(pokerA);

    const pokerStringB = splittedPokerString(inputB);
    const pokerB = countA(pokerStringB);
    const resultB = calculateTotal(pokerB);

    compare(resultA, resultB);
}