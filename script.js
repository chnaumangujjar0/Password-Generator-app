function randomPassword(){
    let chars="qwertyuiopasdfghjklmnbvcxz1234567890QWERTYUIOP!@#$%^&*()_+-={}[]|\:<;'>,.?/~`ASDFGHJKLZXCVBNM";
    
    let p="";
    for(let i=0;i<13;i++){
        // console.log(chars[i])
      p += chars[Math.round(Math.random() * chars.length)];
    }
    return p;
}

let password=document.querySelector("#password")
let copyText=document.querySelector(".copytext")
let generatePass=document.querySelector(".generate-password");
let a=1234;

generatePass.addEventListener("click",()=>{
    password.value=randomPassword();
})
copyText.addEventListener("click",()=>{
    if(password.value ==""){
        alert("Please generate a password")
    }else{
       navigator.clipboard.writeText(password.value);
    alert("Password copied ✅");
    }
})

