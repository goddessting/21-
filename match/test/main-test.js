/*global describe,beforeEach,expect,it,spyOn*/

'use strict';

describe('match', () => {

    it('when inputs is A-J-2, it should be [A,10,2]', () => {
        const inputA = 'A-J-2';
        const exceptResult = splittedPokerString(inputA);
        const result = ['A', '10', '2'];

        expect(exceptResult).toEqual(result);
    });

    it('when inputs is [A,10,2],it should be {countA: 1, totalNumber: 12, pokerCount: 1} ', () =>{
        const pokerCards = ['A', '10', '2'];
        const exceptResult = countA(pokerCards);
        const result = {countA: 1, totalWithoutA: 12, pokerCount: 3};

        expect(exceptResult).toEqual(result);
    });

    it('when input is {countA: 1, totalWithoutA: 12, pokerCount: 1},it should be {total: 13, pokerCount: 1}', () =>{
        const pokerCards = {countA: 1, totalWithoutA: 12, pokerCount: 1};
        const exceptResult = calculateTotal(pokerCards);
        const result = {total: 13, pokerCount: 1};

        expect(exceptResult).toEqual(result);
    });

    describe('there cases', () => {
        it('when result is {total: 13, pokerCount: 1} and {total: 13, pokerCount: 2},it should print A赢', () => {
            const resultA = {total: 13, pokerCount: 1};
            const resultB = {total: 13, pokerCount: 2};

            spyOn(console, 'log');

            compare(resultA, resultB);

            const result = 'A赢';
            expect(console.log).toHaveBeenCalledWith(result);
        });

        it('when result is {total: 13, pokerCount: 2} and {total: 13, pokerCount: 2},it should print 平局', () => {
            const resultA = {total: 13, pokerCount: 2};
            const resultB = {total: 13, pokerCount: 2};

            spyOn(console, 'log');

            compare(resultA, resultB);

            const result = '平局';
            expect(console.log).toHaveBeenCalledWith(result);
        });

        it('when result is {total: 23, pokerCount: 2} and {total: 13, pokerCount: 2},it should print B赢', () => {
            const resultA = {total: 23, pokerCount: 2};
            const resultB = {total: 13, pokerCount: 2};

            spyOn(console, 'log');

            compare(resultA, resultB);

            const result = 'B赢';
            expect(console.log).toHaveBeenCalledWith(result);
        });
    });

    describe('three cases', () => {
        it('when input is A-J-2 and A-J-3, it should print B赢', () => {
            const inputA = 'A-J-2';
            const inputB = 'A-J-3';

            spyOn(console, 'log');

            match(inputA, inputB);

            const expectText = `B赢`;

            expect(console.log).toHaveBeenCalledWith(expectText);
        });

        it('when input is A-J-2 and A-J-2, it should print 平局', () => {
            const inputA = 'A-J-2';
            const inputB = 'A-J-2';

            spyOn(console, 'log');

            match(inputA, inputB);

            const expectText = `平局`;

            expect(console.log).toHaveBeenCalledWith(expectText);
        });

        it('when input is J-J-2 and 5-J-2, it should print B赢', () => {
            const inputA = 'J-J-2';
            const inputB = '5-J-2';

            spyOn(console, 'log');

            match(inputA, inputB);

            const expectText = `B赢`;

            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });

});
