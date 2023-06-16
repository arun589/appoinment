function savetolocalStorage(event){
    event.preventDefault();
    const exp=event.target.expense.value;
    const des=event.target.description.value;
    const cat=event.target.category.value;
    const obj={
        exp,
        des,
        cat
    }
    //localStorage.setItem(obj.exp,JSON.stringify(obj));
    axios.post("https://crudcrud.com/api/7803122e55284c98b66cf0acafd49a33/appointmentData",obj)
    .then((res=>{
        screen(obj);
    }))
    .catch((err)=>{
        console.log(err);
    })
  }
function screen(obj){
    var parentele=document.getElementById("list");
    var child=document.createElement("li");
    child.textContent=obj.exp +" - "+obj.des +" - "+obj.cat;
    const delbtn=document.createElement("input");
    delbtn.type="button";
    delbtn.value="Delete";
    delbtn.onclick=()=>{
        //localStorage.removeItem(obj.exp);
        parentele.removeChild(child);
    }
    const editbtn=document.createElement("input");
    editbtn.type="button"
    editbtn.value="Edit";
    editbtn.onclick=()=>{
        //localStorage.removeItem(obj.exp);
        parentele.removeChild(child);
        document.getElementById("expense").value=obj.exp;
        document.getElementById("description").value=obj.des;
        document.getElementById("category").value=obj.cat;

    }
    child.appendChild(delbtn);
    child.appendChild(editbtn);
    parentele.appendChild(child);
}
//window.addEventListener("DOMContentLoaded",load);
function load(e)
{
    const par=document.getElementById("list")
    for (const key in localStorage) {
        if(key!==null){
        const chi=document.createElement("li");
        const item=JSON.parse(localStorage.getItem(key));
        chi.textContent=item.exp+" - "+item.des+" - "+item.cat;
        const delbtn=document.createElement("input");
    delbtn.type="button";
    delbtn.value="Delete";
    delbtn.onclick=()=>{
        localStorage.removeItem(item.exp);
        par.removeChild(chi);
    }
    const editbtn=document.createElement("input");
    editbtn.type="button"
    editbtn.value="Edit";
    editbtn.onclick=()=>{
        localStorage.removeItem(item.exp);
        par.removeChild(chi);
        document.getElementById("expense").value=item.exp;
        document.getElementById("description").value=item.des;
        document.getElementById("category").value=item.cat;

    }
    chi.appendChild(delbtn);
    chi.appendChild(editbtn);
        
        par.appendChild(chi);
        }
    }
}