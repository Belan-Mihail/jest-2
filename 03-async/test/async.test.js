const Ajax = require('../async');

describe("Ajax. echo", () => {
    test("Should return value async", async () => {
        const result = await Ajax.echo('some data') //передаем любую дату, функцию делаем асинхронной
        expect(result).toBe('some data') //поскольку функция асинхронная при получении результата будет понятно что значение асинхронное
    })

    test("Should return promise", async () => {
        return Ajax.echo('some data').then(data => {
            expect(data).toBe('some data')
        }) //возвращаем промис к нему прибавляем метод зен в который передаем дату
    })

    test("Should catch error with promise", () => {
        return Ajax.echo().catch(err => {
            expect(err).toBeInstanceOf(Error)
        }) //возвращаем промис к нему прибавляем метод зен в который передаем дату
    })

    test("Should catch error with promise", async () => {
        try {
            await Ajax.echo();
        } catch (e) {
            expect(e.message).toBe('error') //like in reject function
        }
    })
})