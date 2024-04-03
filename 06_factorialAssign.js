/*function fact(n) {
    for(i=n;i<=n;i--){
        var factoria=;
        console.log(`${factoria}`);
    }   
}
 fact(5);*/
 
 function factorial(n){
    let answer =1;
    if (n==0||n==1){
        return answer;
    }else if(n>1){
        for(var i=n ;i>=1;i--)
        answer=answer*i;
    }
    else{
        return"number has to be possitive"
    }
 }
 let n=4;
 answer=factorial(n);
 console.log(`factorial of ${n}:${answer}`);
 