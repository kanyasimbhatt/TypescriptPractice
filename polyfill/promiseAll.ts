const promise1: Promise<string> = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve promise1");
    }, 1000);
});

const promise2: Promise<string> = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve promise2");
    }, 3000);
});

const promise3: Promise<string> = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve promise3");
    }, 2000);
});


const promise4: Promise<string> = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve promise3");
    }, 3000);
});


Promise.all = function<T>(arrOfPromise: Promise<T>[]){
    let arr: T[] = [];
    let resolvePromiseCount:number = 0;

    
    return new Promise<T[]>((resolve, reject) => {
        try{
        arrOfPromise.forEach(async (element:Promise<T>) => {
        
            let promiseOutput: T = await element;
            arr.push(promiseOutput);
            resolvePromiseCount++;
            if(resolvePromiseCount === arrOfPromise.length) resolve(arr);
      
    });
    }
    catch(err:any){
        reject(err);
    }
    
    })



}
Promise.all([promise1, promise2, promise3, promise4]).then((arr) => {
    console.log(arr);
  });