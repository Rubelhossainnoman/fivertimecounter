/**
 * Alear Founction....
*/

const setaleart = (msg,type = 'danger') =>{
    return `<p class=" d-flex justify-content-between align-content-center alert alert-${type}">${msg}<button class="btn-close" data-bs-dismiss="alert"></button></p>`
};

/**
 * Time Counter....
*/
const time_counter = (date,times,msg,interval = false,a1 = 0) =>{


    let start_time = Date.now();
    let end_time = new Date(date + ' ' + times);
    let order_time = Math.floor(Math.abs((end_time.getTime() - start_time)));
  
    // Get Vlue from times....
  
    let t_secound = Math.floor(order_time / 1000);
    let t_minute = Math.floor(t_secound / 60);
    let t_hour = Math.floor(t_minute / 60);
    let day = Math.floor(t_hour / 24);
  
    let hour = t_hour - (day * 24);
    let minute = t_minute - (day * 24 * 60) - (hour * 60);
    let second = t_secound - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
  
    // Showing...
    if (!date || !times) {
      msg.innerHTML = '';
      alert_msg.innerHTML = setaleart('All Field Are Required','danger');
    }else{
      msg.innerHTML = ` ${day} Days : ${hour} Hours : ${minute} Minute : ${second} Secound`;
      alert_msg.innerHTML = '';
    };

    if (t_secound <= 0) {
      a1.play();
      clearInterval(interval);
    };
};


/**
 * For Progress bar....
*/

const counter_per = (start_time,end_time) =>{
   let total_dif = end_time - start_time;
   let change_time = end_time - Date.now();

   return Math.floor((100 * change_time) / total_dif );
};