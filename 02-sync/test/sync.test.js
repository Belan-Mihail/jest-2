const LoDash = require('../sync');


describe('Lodash compact', () => {

    let _ = new LoDash();
    // теперь вместо LoDash можно указывать _
    let array

    beforeEach( () => {
        array = [false, 42, 0, '', true, null, 'hello'] //передкаждым тестом в array добавляются значения
    })

    afterAll( () => {
        _ = new LoDash(); //заново очищает переменную которая изменялась в тестах
    })


    test('Should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })

    test('Should remove falsy values from array', () => {
        // const array = [false, 42, 0, '', true, null, 'hello']
        const result = [42, true, 'hello']
        expect(_.compact(array)).toEqual(result);
        //.toBe характере для сравнения примитивов - числа, строки
        // для сравнения сложных элементов лучше использовать .toEqual
    })

    //25 и 40 строка кода дублируется что не есть хорошо, чтобы этого  избежать 
    //можно использовать beforeEach или beforeAll*
    //beforeEach - запускается перед каждым тестом
    //beforeAll - запускается один раз перед первым тестом
    //afterEach - после каждого теста запускается
    //afterAll - после всех тестов разово

    test('Should NOT contain falsy values', () => {
        // const array = [false, 42, 0, '', true, null, 'hello']
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(null)
    })
})

//для чего вообще испольщовать beforeEach если можно просто в глобальном скопе определить этот массив. Но если бы был бы кей который его поменял - все следубщие кейсы бы упали. А так функция
//beforeEach каждый раз дает маиссив который нужен. Пример кейса который если бы аррей был определен в общем скопе а beforeEach не использовался а тест находился бы посредине вызвал бы сбой работы 

// test('Array should be editable', () => {
//     array.push(...["one", 'two'])
//     expect(array).toContain("one")
//     expect(array).toContain("two")
    
// })

//в таком случае в результате теста был бы изминен и следующий тест не прошел бы

//при наличие beforeEach определяющего массив перед каждым тестом вышеуказанный тест не повлиял бы на другие тесты и тесты бы стали изолированными быть

describe('LoDash: GroupBy', () => {
    let _ = new LoDash();
    // теперь вместо LoDash можно указывать _

    test('Should be defined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()
    })

    test('Should group array items by Math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1]
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('Should group array items by length', () => {
        const array = ['one', 'two', 'three']
        const result = {
            5: ["three"], //5 - length of word three
            3: ['one', 'two'] //3 - length of word one and two
        }
        expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('Should NOT return array', () => {
        expect(_.groupBy([], Math.trunc).not.toBeInstanceOf(Array))
        //not.toBeInstanceOf - не должен быть массивом по своей природе
    })

})

//62 минуты