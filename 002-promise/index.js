// Demo

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise1')
    }, 500)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('error')
    }, 100)
})
p1.then(value => {
    console.log(value)
})
p2.then(()=> {}, reason => {
    console.log(reason)
})

console.log('start')

const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MYPromise(excutor) {
    // 涉及异步
    let that = this;
    that.status = PENDING
    that.value = null
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []

    // resolve reject
    // excutor 执行
    function resolve(value) {
        if(that.status === PENDING) {
            that.status = RESOLVED
            that.value = value
            that.resolvedCallbacks.map(cb => cb(that.value))
        }
    }
    function reject(value) {
        if(that.status === PENDING) {
            that.status = REJECTED
            that.value = value
            that.rejectedCallbacks.map(cb => cb(that.value))
        }
    }

    try {
        excutor(resolve, reject)
    } catch (err) {
        reject(err)
    }
}

MYPromise.prototype.then = function (onFullfilled, onRejected) {
    let that = this

    if(that.status === PENDING) {
        that.resolvedCallbacks.push(onFullfilled)
        that.rejectedCallbacks.push(onRejected)
    }

    if(that.status === REJECTED) {
        onFullfilled(this.value)
    }

    // if(that.status === )

}
