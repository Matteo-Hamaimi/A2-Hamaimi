
const pingApi = (req)=>{
    fetch('/api/task?' + new URLSearchParams({value: req}))

    .then(res => res.json())
    .then(data=>{
        document.getElementById('Task').innerHTML =''
       for(let i=0;i<3;i++){
        
        document.getElementById('Task').innerHTML +="<div>"+data[i].Nom+"</div>"
       }
    })
}
