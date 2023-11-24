
let dueDate = new Date("Dec 7, 2023 15:37:00").getTime();
let countdown = setInterval(function(){
    let now = new Date().getTime();

    let distance = dueDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById("countdown").innerHTML = days + " days " + hours +" h " + minutes + " min " + seconds + " sec"
    if (distance < 0 ){
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Today is the day"
    }
}, 1000)
