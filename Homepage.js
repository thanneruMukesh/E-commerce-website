document.addEventListener("DOMContentLoaded", function () {
    // Set the date we're counting down to
    const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

    // Update the countdown every 1 second
    const x = setInterval(function () {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the time remaining
        const distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById("days").innerHTML = days + "d";
        document.getElementById("hours").innerHTML = hours + "h";
        document.getElementById("minutes").innerHTML = minutes + "m";
        document.getElementById("seconds").innerHTML = seconds + "s";

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
});




/* -----slider js------- */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4.6,
    spaceBetween: 10,
    // loop: true,
    // cssMode: true,
    freeMode: true,
    // direction: "horizontal",
    mousewheel: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });