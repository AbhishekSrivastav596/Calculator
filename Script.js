let string = "";
let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {

  button.addEventListener("click",(e)=>{
    if(e.target.innerHTML=== '='){
      try{
        string = string.replace("÷","/").replace("X","*");
        string = eval(string);
        document.querySelector(".display").value = string;
        string = "";
      }
      catch(error){
        string = "error";
        document.querySelector(".display").value = string;
      }
    }
    else if(e.target.innerHTML==='AC'){
      string = "";
      document.querySelector(".display").value = string;
        
    }
    else if(string==='error'){
      string = "";
      string = string + e.target.innerHTML;
      document.querySelector(".display").value = string;
    }
    else if(e.target.innerHTML==='DEL'){
      string = string.slice(0,-1);
      document.querySelector(".display").value = string;
    }
    else{
      string = string + e.target.innerHTML;
      document.querySelector(".display").value = string;
    }
  })

})