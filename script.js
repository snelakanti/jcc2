var years = [1963,1964,1988,1990,1994,2017];
var ages = [];

for(i = 0; i < years.length; i++ ){

    ages[i] = 2018- years[i];

    
}

console.log(ages);

for (i = 0; i < ages.length; i++){

    if(ages[i] > 18){

        console.log("Adult!");
    }
    else{
        console.log("Underage");
    }
} 