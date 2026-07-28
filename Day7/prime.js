let is_prime = (num) => {
    if (num <= 1){
        return false
    }
    for(var i = 2; i < num/2;i++){
        if(num%i == 0){
            return false
            break
        }
    }
    return true
}
if(is_prime(1)){
    console.log("Prime")
}else {
    console.log("Not prime")
}