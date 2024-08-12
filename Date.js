document.addEventListener("DOMContentLoaded", function() {
  
    function countdown(){
        const date = new Date();
        
        const days = document.querySelector('#daysValue');
        const hr = document.querySelector('#hourValue');
        const min = document.querySelector('#minValue');
        const sec = document.querySelector('#secValue');

        days.innerHTML = date.getDate().toString().padStart(2, '0');
        hr.innerHTML = date.getHours().toString().padStart(2, '0');
        min.innerHTML = date.getMinutes().toString().padStart(2, '0');
        sec.innerHTML = date.getSeconds().toString().padStart(2, '0');
    }

    countdown();

    setInterval(countdown, 1000);
});
