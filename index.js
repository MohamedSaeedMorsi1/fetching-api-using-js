const x=document.getElementById('btn-cl');
const xc=document.getElementById('heae');


x.addEventListener("click",getall);



function getall(){
    fetch('https://api.publicapis.org/entries') // هنا بحط عنوان ال url للحاجة اللى انا عايزة اعملها call 
    .then(response=>response.json())
    .then(data =>{
        let html='';
        if(data.entries){
            data.entries.forEach(entry => {

                        html +=`
                        <p> "${entry.API}" </p>
                        <p style='color:red'> "${entry.Description}" </p>

                        `;


                
            });
            xc.innerHTML=html;

        } 
   
    })
}