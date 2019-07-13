var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate() {
  var genders = document.getElementsByName("gender");
  if( document.myForm.century.value == "" || isNaN( document.myForm.century.value ) ||
  document.myForm.century.value.length > 2) {
     alert( "Please provide a valid Century of birth! eg 20 for the year 2019" );
     document.myForm.century.focus() ;
     return false;
  }
  else if( document.myForm.year.value == "" || isNaN( document.myForm.year.value ) ||
  document.myForm.year.value.length > 2 || document.myForm.month.value > 99  || document.myForm.month.value <=0) {
     alert( "Please provide a valid year of birth! eg 19 for 2019" );
     document.myForm.year.focus() ;
     return false;
  }
  else if( document.myForm.month.value == "" || isNaN( document.myForm.month.value ) || 
  document.myForm.month.value.length > 2 || document.myForm.month.value > 12  || document.myForm.month.value <=0){
     alert( "Please provide your month of birth! between 1 and 12" );
     document.myForm.month.focus() ;
     return false;
  }
  else if( document.myForm.date.value == "" || isNaN( document.myForm.date.value ) || document.myForm.date.value>31 || document.myForm.date.value <=0) {
     alert( "Please provide a valid date that you were born in!" );
     document.myForm.day.focus() ;
     return false;
  }
  else if(genders[0].checked==false && genders[1].checked==false ) {
      alert("You must select male or female");
      return false;
  }   
  else{
    return( true );
  }
  
}

function calculateDayValue(){
  CC = parseInt(document.getElementById("century").value);
  YY = parseInt(document.getElementById("year").value);
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  return (Math.floor(d));
}

function getGender(){
  var genders = document.getElementsByName("gender");
  if(genders[0].checked == true){
    var gender = "male";
  }
  else if(genders[1].checked == true){
    var gender = "female";
  }
  else{
    alert("gender not selected");
  }
  switch(gender){
      case "male":
          if (dayValue == 1){
            alert("The day is on " +dayNames[0] + " Your akan name is " +maleNames[0]+"!");
          }
          else if(dayValue == 2){
            alert("The day is on "+dayNames[1] + " Your akan name is" +maleNames[1]+"!");
          }
          else if(dayValue == 3){
            alert("The day is on " +dayNames[2]+ " Your akan name is " +maleNames[2]+"!");
          }
          else if(dayValue == 4){
            alert("The day is on "+dayNames[3] +  " Your akan name is " +maleNames[3]+"!");
          }
          else if(dayValue == 5){
            alert("The day is on "+dayNames[4] +  " Your akan name is " +maleNames[4]+"!");
          }
          else if(dayValue == 6){
            alert("The day is on "+dayNames[5] +  " Your akan name is " +maleNames[5]+"!");
          }
          else if(dayValue == 7){
            alert("The day is on "+dayNames[6] + " Your akan name is " +maleNames[6]+"!");
          }
      break;
      case "female":
          if (dayValue == 1){
            alert("The day is on "+dayNames[0] + " Your akan name is  " +femaleNames[0]+"!");
          }
          else if(dayValue == 2){
            alert("The day is on " +dayNames[1] + " Your akan name is " +femaleNames[1]+"!");
          }
          else if(dayValue == 3){
            alert("The day is on " +dayNames[2] + " Your akan name is " +femaleNames[2]+"!");
          }
          else if(dayValue == 4){
            alert("The day is on " +dayNames[3] + " Your akan name is " +femaleNames[3]+"!");
          }
          else if(dayValue == 5){
            alert("The day is on " +dayNames[4] + " Your akan name is " +femaleNames[4]+"!");
          }
          else if(dayValue == 6){
            alert("The day is on " +dayNames[5] + " Your akan name is " + femaleNames[5]+"!");
          }else if(dayValue == 7){
            alert("The day is on " +dayNames[6] + " Your akan name is" +femaleNames[6]+"!");
          }
      break
      default:
          
  }
}
function findName(){
  dayValue = calculateDayValue();
  getGender();
}