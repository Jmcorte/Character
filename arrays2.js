function count(n){
    let myArr=[]
    for(let i=2;i<=n;i++){
        myArr.push(i);
    }
    console.log(myArr)
}

let nums =[1,2,3,4,5,6,7];
let newNums = nums;
newNums[0] = 1;
console.log('nums: '+ nums);
console.log('newNums: '+ newNums);
