const textField = document.querySelector("#textField")
const news = document.querySelector("#news")
const container = document.querySelector("#para")

function neww(){
  if(textField.value!==""){
    let para = document.createElement("p")
   
    para.setAttribute("id","par")
    let del = document.createElement('button');
    del.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>';
    let edit = document.createElement('button');
    edit.innerHTML='<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
    edit.setAttribute("id","editable");
    let check = document.createElement('button');
    check.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i>';
    para.innerHTML=textField.value;
    textField.value="";
    container.appendChild(para)
    para.appendChild(del)
    para.appendChild(edit)
    para.appendChild(check)
    del.addEventListener("click",function(){
      container.removeChild(para);
    })
    document.getElementById("para").addEventListener('keypress',function(event){
      if(event.key === "Enter"){
        event.preventDefault();
      }
    })
 
    edit.addEventListener("click",function(){
      
      para.contentEditable = true;
      para.style.backgroundColor = "#dddbdb";
      del.style.backgroundColor="#dddbdb"
      edit.style.backgroundColor="#dddbdb"
      check.style.backgroundColor="#dddbdb"
    })
   
    check.addEventListener("click",function(){
     
      para.contentEditable = false;
      para.style.backgroundColor="#c56f6f";
      del.style.backgroundColor="#c56f6f"
      edit.style.backgroundColor="#c56f6f"
      check.style.backgroundColor="#c56f6f"
     
    })
    
  }else{
    alert("plz enter something")
  }
}
    news.addEventListener('click',neww);

function enterkey(a){  
    if (a.key === "Enter") {
      // Cancel the default action, if needed
      a.preventDefault();
      // Trigger the button element with a click
      document.getElementById("news").click();
      
    }
    
  };
  textField.addEventListener("keypress",enterkey)





