var years = [1963,1964,1988,1990,1994,2017];
function printFullAge(years){
  
    var ages = [];
    var fullAges = [];
    for(i = 0; i < years.length; i++ ){
    
        ages[i] = 2018- years[i];
    
        
    }

    
    for (i = 0; i < ages.length; i++){
    
        if(ages[i] > 18){
    
            console.log(ages[i] + " is Adult!");
            fullAges.push(true);
        }
        else{
            console.log(ages[i] + " is Underage");
            fullAges.push(false);
        }
    };
    
return fullAges;
};

var full_1 = printFullAge(years);
var full_2 = printFullAge([2011,2013,1987]);