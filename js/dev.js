
/*****
 * devs member app
 */
 const Alldev=document.querySelector("#devs");
 const ariya = document.querySelector(".devs-area");
 
 
 Alldev.addEventListener("submit",function(e){
   e.preventDefault();
 
   
   let name = document.querySelector('input[name="dname"]');
   let skill = document.querySelectorAll('input[name="skill"]:checked');
   let gender = document.querySelector('input[name="gender"]:checked');
   let photo = document.querySelector('input[name="dphoto"]');
   let skill_array=[];
 
   for(let i = 0; i < skill.length; i++){
     skill_array.push(skill[i].value);
    
   } 
 
   
 
   let data_array;
   if (get_data("devs")) {
     data_array = get_data("devs");
   } else {
     data_array=[] ;
   }
   data_array.push({
     name: name.value,
     skills: skill_array,
     gender: gender.value,
     photo: photo.value
   });
  
 
   
   send_data("devs",data_array); 
   name.value="";
   skill.value="";
   gender.value="";
   photo .value=""; 
   alldevs();
 
 });
 
 alldevs();
 function alldevs(){
   let allm= get_data("devs");
   let data ="";
   allm.map(function(d){
    let lists = " ";
    d.skills.map(li =>{
        lists +=`<li class="list-group-item">${li}</li>
        `
    })

       
       data+=`
       
       <div class="col-md-4 my-3">
       <div class="card">
         <img style="width:100%; height:250px; object-fit: cover; " class="card-img" src="${d.photo}" alt="nai">
         <div class="card-body">
           <h2 class="text-center">${ d.name }</h2>
           <p>Gender : ${ d.gender }</p>
           <hr>
           skills 
           <hr>
           <ul class="list-group">
                               
                               ${ lists }

             
           </ul>
           
         </div>
       </div>
     </div>
   
       `;
      

   })
 
   ariya.innerHTML = data;
 
 }
 
function send_data(key, arr) {
    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);
  }
  function get_data(key){
    let data = localStorage.getItem(key);
    return JSON.parse(data);
  }
 