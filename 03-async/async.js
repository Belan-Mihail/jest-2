class Ajax {
    static echo(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {   //если дата передана тогда ресолв, если нет тогда реджект
                if (data) {   
                    resolve(data);
                } else {
                    reject(new Error('error'))
                }
            }, 150)
        })
    }
}

module.exports = Ajax;