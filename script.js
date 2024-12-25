const sBtn = document.getElementById("sBtn");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
function addUser(){
  
const User=["Debnath Hati","Somnath Hati"];
  if(fName!==0&&lName!==0){
const givenVal = `fName +lName`;
    User.push()=givenVal;
    prompt(`MARRY CHRISTMAS givenVal`);
  }
  elseif(fName!==0&&lName===0){
givenVal = `fName`;
    User.push()=givenVal;
    prompt(`MARRY CHRISTMAS givenVal`);
  }
  elseif(fName===0&&lName!==0){
givenVal = `lName`;
    User.push() = givenVal;
    prompt(`MARRY CHRISTMAS givenVal`);
  }

  
}
prompt();
function submitLoginForm(event){
        event.preventDefault();

        console.log(event.target['fName'].value);
     alart(`event.target['fName'].Value Marry Christmas`)
  console.log(event.target['lName'].value);
}
