function BMI ( weight , height){
    let result = weight  / (height * height) 
    return result 
}
console.log(BMI (70,1.70))
function status (bmi){
    if(bmi <18.5 ){return ("لديك نقص في الوزن")}
    else if( bmi >= 18.5 && bmi< 25){
        return(" وزنك صحي") }
        else{ 
            return("لديك زيادة في الوزن")
        }
}
function calculate (params) {let  weight= document.getElementById( "weight").value
  let height=document.getElementById(height).value
  let bmi = BMI(weight,height)
  let disc = Status(bmi)
  let div = document.getElementById("result")
  div.innerText = bmi + " == " + desc
}