//用then
var p = new Promise((resolve, reject) => {
    //...
    reject('success')
});

p.then(result => {
    console.log(result);//success
}, result => {
    console.log(result);//success
});

//用catch
var p = new Promise((resolve, reject) => {
    //...
    reject('success')
});

p.then(result => {
    console.log(result);//success
}).catch(result => {
    console.log(result);//success
});


//只含有一个resolve
let p = new Promise((resolve, reject) => {
    //...
    resolve('success')
});
p.then(result => {
    console.log(result);//success
});

//另外一情况
let p = new Promise((resolve,reject) => {
    //...
    resolve('success');
    console.log('after resolve');
    reject('error');
});
p.then(result => {
    console.log(result);
});
p.catch(result => {
    console.log(result);
})
//上面输出：
// after resolve
// success

//Promise.all方法：
let p1 = Promise.resolve(123);
let p2 = Promise.resolve('hello');
let p3 = Promise.resolve('success');

Promise.all([p1,p2,p3]).then(result => {
    console.log(result);
})
//结果：
// [ 123, 'hello', 'success' ]


//含有setTimeout
//用sleep来模仿浏览器的AJAX请求
function sleep(wait) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(wait);
        },wait);
    });
}

let p1 = sleep(500);
let p2 = sleep(500);
let p3 = sleep(1000);

Promise.all([p1,p2,p3]).then(result => {
    console.log(result);
    //.....
    //loading
});
//(3) [500, 500, 1000]


//Promise.race方法
function sleep(wait) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(wait);
        },wait);
    });
}

let p1 = sleep(500);
let p0 = sleep(2000);

Promise.race([p1,p0]).then(result => {
    console.log(result);
});

let p2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        reject('error');
    },1000);
});

Promise.race([p0,p2]).then(result => {
    console.log(result);
}).catch(result => {
    console.log(result);
});


