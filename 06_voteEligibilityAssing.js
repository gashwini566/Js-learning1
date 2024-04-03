function voteEligibility(age) {
    if (age==null||age<=0||isNaN(+age)||age>130) {
        console.log(`invalid input:${age}`);
    }
    else if(age<18){
        console.log(`Not Eligible for vote :${age}`);
    }
    else{
        console.log(`Eligible for vote:${age}`);
    }

}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(150);
voteEligibility(0);
voteEligibility(-12);
voteEligibility(null);







