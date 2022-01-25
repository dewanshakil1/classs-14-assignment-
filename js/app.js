const button = document.querySelector("input[type='submit']");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const mins = document.querySelector(".min");
const Sec = document.querySelector(".sec");
button.addEventListener("click", function () {
  
  setInterval(() => {
    let date_input = document.querySelector("input[type='date']").value;
    let time_input = document.querySelector("input[type='time']").value;
    let start_time = new Date();
    let end_time = new Date(date_input + " " + time_input);
    let time_difference = Math.floor(Math.abs(end_time.getTime() - start_time.getTime())
    );

    let total_sec = Math.floor(time_difference / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hour = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hour / 24);

    let hours = total_hour - total_day * 24;
    let min = total_min - total_day * 24 * 60 - hours * 60;
    let sec = total_sec - total_day * 24 * 60 * 60 - hours * 60 * 60 - min * 60;
    day.innerHTML = total_day;
    hour.innerHTML = hours;
    mins.innerHTML = min;
    Sec.innerHTML = sec;
  }, 1000);
});
/***
 * age caltutator
 */
const button2 = document.getElementById("age");
const air = document.getElementById("year");
const MONTH = document.getElementById("month");
const WEAK = document.getElementById("week");
const DAY = document.getElementById("day");
const MIN = document.getElementById("min");
const SEC = document.getElementById("sec");

button2.addEventListener("click", function () {
  let date_in = document.getElementById("dateAge").value;
  let time_in = document.getElementById("timeAge").value;
  let start_tim = new Date();
  let end_tim = new Date(date_in + " " + time_in);
  let time_difference = start_tim.getTime() - end_tim.getTime();

  let total_sec = Math.floor(time_difference / 1000);
  let total_min = Math.floor(total_sec / 60);
  let total_hour = Math.floor(total_min / 60);
  let total_day = Math.floor(total_hour / 24);
  let total_week = Math.floor(total_day / 7);
  let total_month = Math.floor(total_day / 30.427);
  let total_year = Math.floor(total_month / 12.25);

  air.innerHTML = total_year;
  MONTH.innerHTML = total_week;
  WEAK.innerHTML = total_week;
  DAY.innerHTML = total_day;
  MIN.innerHTML = total_min;
  SEC.innerHTML = total_sec;
});
/***
 * add product app
 */

const add_button = document.getElementById("add");
const hideIn = document.querySelector(".add_pro");
const Close = document.querySelector("#end");
const formIn = document.querySelector("#formIn");
const plist = document.getElementById("plist");
add_button.addEventListener("click", function () {
  hideIn.style.display = "block";
});
Close.addEventListener("click", function () {
  hideIn.style.display = "none";
});

formIn.addEventListener("submit", function (e) {
  e.preventDefault();
  let product_array;
  let name = this.querySelector('input[name="name"]').value;
  let price = this.querySelector('input[name="price"]').value;
  let sale = this.querySelector('input[name="sel"]').value;
  let photo = this.querySelector('input[name="photo"]').value;
  if (get_data("products")) {
    product_array = get_data("products");
  } else {
    product_array = [];
  }
  product_array.push({
    name: name,
    price: price,
    sale: sale,
    photo: photo,
  });
  send_data("products", product_array);
  console.log(product_array);
  allproduct();
});
/****
 * product add function
 */
allproduct();
function allproduct(){
 
   let all_data = get_data("products");
  let data = "";
  all_data.map(ddata=>{
    data += `
    <div class="card col-md-3 ">
    <img class="card-image" src="${ddata.photo}" alt="">
    <div class="card-body">
        <h3>${ddata.name}</h3>
        <p> <span class="regular-price">${
          "$" + ddata.price
        }</span>  <span class="sale-price">${"$" + ddata.sale}</span> </p>

        <br>
        <button class="btn btn-success">Add to cart</button>
    </div>
</div>  
    `;
  });
  plist.innerHTML = data;
}

function send_data(key, arr) {
  let data = JSON.stringify(arr);
  localStorage.setItem(key, data);
}
function get_data(key){
  let data = localStorage.getItem(key);
  return JSON.parse(data);
}


 

