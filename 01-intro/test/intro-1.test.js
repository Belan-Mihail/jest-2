const {summ, nativeNull} = require('../intro-1');


describe('Sum function', () => {
    test('Sum should return sum of two values', () => {
        expect(summ(1,3)).toBe(4)
        expect(summ(1,3)).toEqual(4) 
        //expect в одном тесте может быть больше чем 1 
        //toBe и toEqual практмчески одинаковые
    });
    
    //другие метчеры - toBeGreaterThan
    
    test('Sum should return sum correctly compering to other', () => {
        expect(summ(1,3)).toBeGreaterThan(3)
        //toBeGreaterThan больше чем 3
        expect(summ(1,3)).toBeGreaterThanOrEqual(4)
        //toBeGreaterThanOrEqual больше или равно
        expect(summ(1,3)).toBeLessThan(7)
        //toBeGreaterThan меньше чем 3
        expect(summ(1,3)).toBeLessThanOrEqual(6)
        //toBeGreaterThanOrEqual меньше или равно
    
    });
    
    test('Sum should sum two float values correct', () => {
        // expect(summ(0.1,0.2)).toBe(0.3);
        //fail без округления сумма 0.1 и 0.2 в ДЖС дает 0.30000000000000004
        //для подобных случаев нужно использовать матчер toBeCloseTo
        expect(summ(0.1,0.2)).toBeCloseTo(0.3);
    })
})

describe('NativeNull function', () => {
    test('should return null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        //проверка на ноль. Также можно проверить на НАН
        expect(nativeNull()).toBeFalsy()
        // falsy значения те которые не проходят на if (0, null, undefined)
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        //можно использовать частицу not для отрицания
        expect(nativeNull()).not.toBeUndefined()
        //null !== undefined

    })
})
//28:56