function expect(value) {
    return {
        toBe: expectation => {
            if (value === expectation) {
                console.log('Success');
            } else {
                console.log(`Value is ${value}, but expectation is ${expectation}`);
            }
        }
    }
}

const summ = (a, b) => a + b;

const nativeNull = () => null;


expect(summ(1,13)).toBe(14); //Success
/*
1. мы передаем функцию summ с аргументами в качестве аргумента в функцию expect
2. так как мы знаем что функция expect возвращает объект мы используя точку сразу к нему обращаемся
а так как значение первого свойства - функция toBe передаем в нее аргумент
*/

expect(summ(1,13)).toBe(12); //Value is 14, but expectation is 12

//тестирование без джеста