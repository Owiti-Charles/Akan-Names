var CC, YY, MM, DD, day, dayValue;
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