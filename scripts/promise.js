let fs = require('fs');
let promisify = require('util').promisify;

// fs.readFile('1.txt', function(err, data) {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log(String(data))
// });

function readFile(file) {
    new Promise(function (resolve, reject) {
        fs.readFile(file, function (err, data) {
            if (err) {
                reject(err)
                return;
            }
            resolve(data);
        });
    });
}

let promisify1 = function (cb) {
    return function () {
        let args = arguments;
        return new Promise(function (resolve, reject) {
            args.push(function (err, ...aaa) {
                if (err) {
                    reject(err);
                    return
                }
                resolve.apply(resolve, aaa);
            });
            cb.apply(cb, arg)
        });
    }
};


readFile = promisify(fs.readFile);

readFile('1.txt').then(function (data) {
    console.log("successfully read file");
    console.log(String(data));
    return readFile('2.txt');
})
    .catch(function (err) {
        console.log('inside err');
        console.log(err);
    })
    .then((data) => {
        console.log("successfully read file");
        console.log(String(data));
        return readFile('3.txt');
    })
    .then((data) => {
        console.log("successfully read file");
        console.log(String(data));
        return readFile('4.txt');
    })
    .then((data) => {
        console.log("successfully read file");
        console.log(String(data));
        return readFile('5.txt');

    })
    .then((data) => {
        console.log("successfully read file");
        console.log(String(data));
    })
    .catch(function (err) {
        console.log('inside err');
        console.log(err);
    }).then(() => {
        console.log('finally end');
    });