let arr=[1,2,"janvi",5,6]
console.log(arr.length);

console.log(typeof arr);
console.log(typeof arr)
console.log(arr instanceof Array)
console.log(arr instanceof String)
console.log(arr[3])
console.log(arr[6])
console.log(arr[-1])
console.log(arr)

for (let i=0;i<arr.length;i++){
    console.log(arr[i])
}

for (let val of arr){
    console.log(val)
}

arr.push(102,56)
console.log(arr)
arr.unshift(8,7,6)


