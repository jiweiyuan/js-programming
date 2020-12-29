// 需求分析 请求并发限制

function fetchImg(url) {
    return new Promise((resolve, reject) => {
        let delayTime = 2000 * Math.random()
        setTimeout(() => {
            resolve(`Image ${url} is download`)
        }, delayTime)
    })
}

let imgUrls = ['yuanjiwei.com/1.png',
    'yuanjiwei.com/1.png',
    'yuanjiwei.com/2.png',
    'yuanjiwei.com/3.png',
    'yuanjiwei.com/4.png',
    'yuanjiwei.com/5.png',
    'yuanjiwei.com/6.png',
    'yuanjiwei.com/7.png',
    'yuanjiwei.com/8.png',
    'yuanjiwei.com/9.png',
    'yuanjiwei.com/10.png'
]

const fetchImgFuncList = imgUrls.map(url => (() => {
    return fetchImg(url)
}))

Promise.all(fetchImgFuncList.map(fn => fn())).then(result => {
    console.log(result)
})


Promise.all(fetchImgFuncList.map(fn => fn())).then(result => {
    console.log(result)
})

// 限制请求链接小于 4

const MAX_CONNECT_NUMBER = 4

function limitPromise(fns, limit) {
    let allFns = [...fns]
    let result = []
    let pool = []
    function  run() {
        
    }

}

// 调用方式
limitPromise(fetchImgFuncList.map(fn => fn()), MAX_CONNECT_NUMBER).then(result => {
    console.log(result)
})
