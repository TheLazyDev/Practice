function fibonacci(position){
    if(position < 3) return 1;
    else {
        // console.log(position - 1,position - 2)
        return fibonacci(position - 1) + fibonacci(position - 2)
    } 
}




console.log(fibonacci(40))