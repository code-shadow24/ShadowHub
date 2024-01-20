const accountId = 234; //cannot change the value later
let accountName = "Aastha Mishra"; //can be changed
var accountPassword = "Ash23"; //can be changed

accountCity = "Mumbai"; //will automatically make it a variable, but not a best practice //can be changed

// accountId = 23; cannot assign a new value to a const keyword

accountName ="Sonal";
accountPassword = "Pass@23";
accountCity = "Banglore";
let accountState; //value here is undefined
/*
 It is advisable not to use var to declare variables 
 Reason: Issue i block scope and functioal scope
 BTW this a multi-line comment and one with double slash is single line comment
*/

console.table([accountId, accountName, accountPassword, accountCity, accountState]);


/*
  Thank you Chai aur Code channel for teaching Javascript so well.
*/