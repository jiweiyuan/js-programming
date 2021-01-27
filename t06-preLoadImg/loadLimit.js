// limit load  控制并发数为3 最多一起发出三个请求

const loadLimit = (urls,limit) => {
    let urlsCopy = [...urls]

    if(urlsCopy.length <= limit) {
        return Promise.all(urlsCopy.map(url => {
            return loadImg(url)
        }))
    }

    let result = []
    let concurrency = 0

    const run = () => {
        let max = Math.min(limit - concurrency, urlsCopy.length)
        for(let i=0; i<max; i++) {
            concurrency++
            let promise = loadImg(urlsCopy.shift())
            promise.finally(() => {
                result.splice(result.indexOf(promise), 1)
                concurrency--
                run()
            })
            result.push(promise)
        }
    }
    run()
}

loadLimit(urls, 3)
