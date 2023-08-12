const {map} = require('../mock');

describe('Map function', () => {
    let array
    let fn

    beforeEach(() => {
        array = [1,2,3,5]
        fn = jest.fn(x => x**2) //делаем из фн функцию коллбэк со свойствами джест 
        map(array, fn)   //постоянно используем
    })

    test('Should call callback', () => { //мы хотим убедиться что вызывая метод мэп с массивом работает функция колл-бэк
        expect(fn).toBeCalled() 
    })
    test('Should pow 2 each element', () => { //мы хотим убедиться что значения возводяться в квадрат
        expect(fn.mock.results[0].value).toBe(1) 
        expect(fn.mock.results[1].value).toBe(4) 
        expect(fn.mock.results[2].value).toBe(9) 
        expect(fn.mock.results[3].value).toBe(25) 
    })
})

//1:16;36