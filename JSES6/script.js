let ebutton=()=>{
let n= document.getElementById("name").value
document.getElementById("msg").innerHTML="Happy Easter " + n
document.getElementById("heimg").src="https://bielyshoaf.com/cdn/shop/files/LME001_1200x1200.jpg?v=1703806316"
document.getElementById("cssedit").style.backgroundColor="#fff7f0"
document.getElementById("heimg").style.visibility="visible"
}

document.getElementById("easterb").addEventListener("click",ebutton)




let bbutton=()=>{
    let n= document.getElementById("name").value
    document.getElementById("msg").innerHTML="Happy Birthday " + n
    document.getElementById("heimg").src="https://ecards.hopespring.org.uk/wp-content/uploads/2021/05/classy-happy-birthday-eCard.jpg"

    document.getElementById("cssedit").style.backgroundColor="red"
    document.getElementById("heimg").style.visibility="visible"
    
    }


    document.getElementById("birthdayb").addEventListener("click",bbutton)