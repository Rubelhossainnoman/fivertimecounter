const fiver_timer = document.getElementById('fiver_timer');
const msg = document.getElementById('msg');
const alert_msg = document.getElementById('alert_msg');
const a1 = document.getElementById('a1');
const stop_alerm = document.getElementById('stop_alerm');
const progress_bardiv = document.getElementById('progress_bardiv');
const progress_bar = document.getElementById('progress_bar');
const progress_bar_val = document.getElementById('progress_bar_val');

let count;

fiver_timer.onsubmit = (e) =>{
  e.preventDefault();

  clearInterval(count);

  const form_data = new FormData(e.target);
  const object_data = Object.fromEntries(form_data.entries());
  const {date,times,index} = Object.fromEntries(form_data.entries());


  // Get Times...here..

    let start_time = Date.now();
    let end_time = new Date(date + ' ' + times);
  
  // Get Times....

  count = setInterval(() =>{

    time_counter(date,times,msg,count,a1);

    let per = counter_per(start_time, end_time);
    progress_bardiv.style.height = '15px';
    progress_bar.style.width = `${per}%`;

    // Showing progressbar value...

    if (!date || !times) {
      progress_bar_val.innerHTML = ``;
    }else{
      progress_bar_val.innerHTML = `${per} %`;
    };

    

    if (per <= 50) {
      progress_bar.style.backgroundColor = 'red';
      progress_bar_val.style.color = 'red';
    }else{
      // progress_bar.style.backgroundColor = 'red';
      progress_bar_val.style.color = 'green';
    }
    if (per <= 1) {
      progress_bar.style.opacity = '0';
      progress_bar_val.style.opacity = '0';
      progress_bar_val.style.height = '0';
    }

  },1000);
};
stop_alerm.onclick = (e) =>{
  e.preventDefault();
  a1.pause();
}