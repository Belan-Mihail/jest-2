class LoDash {
    compact(array) {
        return array.filter(val => !!val)
    }
    //принимает в себя массив и возращает его только без falsy value (0, null ...)
    

    groupBy(array, prop) {  // array - это наш массив,  prop - это наша функция Math.floor
        return array.reduce((acc, i) => {
            const key = typeof prop === "function" ? prop(i) : i[prop]  //получаем ключ делая проверку если тип проп это функция то получаем ключ вот так prop(i) , а если проп это строка то вот так i[prop]
            if (!acc[key]) {  //если в аккууляторе нету такого key
                acc[key] = [] //тогда ключ объекта аккумулятора должен быть массивом
            }
            acc[key].push(i) //добавляем значение в массив
            return acc
        }, {})
    }
}

module.exports = LoDash