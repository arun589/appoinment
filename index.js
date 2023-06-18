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
    axios.post("https://crudcrud.com/api/531e8afa57fc4418a6b537449a801719/appoinmentData",obj)
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
        const data=obj._id;
        axios.delete(`https://crudcrud.com/api/531e8afa57fc4418a6b537449a801719/appoinmentData/${data}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        //localStorage.removeItem(obj.exp);
        parentele.removeChild(child);
    }
    const editbtn=document.createElement("input");
    editbtn.type="button"
    editbtn.value="Edit";
    editbtn.onclick=()=>{
        //localStorage.removeItem(obj.exp);
        
       const dat=obj._id;
        axios.delete(`https://crudcrud.com/api/531e8afa57fc4418a6b537449a801719/appoinmentData/${dat}`)
        .then(res=>console.log(res))
        .catch(err=>alert(1));
    
        parentele.removeChild(child);
        document.getElementById("expense").value=obj.exp;
        document.getElementById("description").value=obj.des;
        document.getElementById("category").value=obj.cat;
    }
    child.appendChild(delbtn);
    child.appendChild(editbtn);
    parentele.appendChild(child);
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/531e8afa57fc4418a6b537449a801719/appoinmentData")
        .then((res)=>{
            for(let i=0;i<res.data.length;i++)
            {
                screen(res.data[i]);
            }
        })
        .catch((err)=>console.log(err));
})