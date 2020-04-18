// JavaScript File
let arearesult=document.getElementById("arearesult");
let circumferenceresult=document.getElementById("circumferenceresult");
function Click(){
  let diameter=document.getElementById("diameter");
  let diameterValue;
  diameterValue=Number(diameter.value); // This turns the diameter you input earlier from a string to a number
  let radiusValue;
  radiusValue=diameterValue / 2; // This finds out the radius by dividing the diameter by two for the calculations
  if (diameterValue<=0 || isNaN(diameterValue)) { // This if statement checks to see if the diameter is less than 0, or had a letter in it when the button was clicked
    arearesult.innerHTML="Invalid diameter, please input new diameter"; // These two lines of code return that the diameter was invalid, and asks for a new diameter value
    circumferenceresult.innerHTML="Invalid diameter, please input new diameter";
  }
  else{
    let area;
    area=(radiusValue ** 2) * Math.PI; // This piece of code calculates the area of the circle using: radius squared multiplied by pi
    let circumference;
    circumference=(radiusValue * 2) * Math.PI; // This line of code calculates the circumference of the circle using: two multiplied by radius multiplied by pi
    arearesult.innerHTML=area; // This line of code sends the value it found for the area of the circle to the area divresult
    circumferenceresult.innerHTML=circumference; // This line of code sends the value it found for the circumference to the circumference divresult
}
}
