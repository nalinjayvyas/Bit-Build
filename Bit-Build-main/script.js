document.addEventListener('DOMContentLoaded', function() {
    var eventForms = document.querySelectorAll('.event-form');
    var selectedEventInfo = document.getElementById('selected-event-info');


    eventForms.forEach(function(form) {
        form.addEventListener('click', function(event) {
            event.preventDefault();
            var eventName = form.querySelector('h2').innerText;
            var eventDescription = form.querySelector('p').innerText;
            var venue = form.dataset.venue;
            var date = form.dataset.date;
            var time = form.dataset.time;
            var fees = form.dataset.fees;
            selectedEventInfo.innerHTML = `
                <div class="event-card">
                    <h3>${eventName}</h3>
                    <p>${eventDescription}</p>
                    <p>Venue: ${venue}</p>
                    <p>Date: ${date}</p>
                    <p>Time: ${time}</p>
                    <p>Fees: ${fees}</p>
                <div class="register-button">
                    <a href="./registration.html"><button>Register Now</button></a>
    </div>
                </div>
            `;
        });
    });

    var menuBars = document.getElementById('menu-bars');
    var navbar = document.querySelector('.navbar');

    menuBars.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
