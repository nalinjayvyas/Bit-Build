document.addEventListener('DOMContentLoaded', function() {
    var eventForms = document.querySelectorAll('.event-form');
    var selectedEventInfo = document.getElementById('selected-event-info');
    var registrationForm = document.getElementById('registrationForm');
    var teamsSection = document.getElementById('teams');

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
                        <button id="register-now">Register Now</button>
                    </div>
                </div>
            `;

            // Show the registration form when "Register Now" button is clicked
            document.getElementById('register-now').addEventListener('click', function() {
                registrationForm.style.display = 'block';
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        // Smooth scrolling function
        function scrollToElement(element) {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: element.offsetTop
            });
        }
    
        // Add smooth scrolling to selected event
        var eventForms = document.querySelectorAll('.event-form');
        eventForms.forEach(function(form) {
            form.addEventListener('click', function(event) {
                event.preventDefault();
                var selectedEvent = document.getElementById('selected-event-info');
                scrollToElement(selectedEvent);
            });
        });
    
        // Add smooth scrolling to registration form
        var registerButton = document.getElementById('register-now');
        var registrationForm = document.getElementById('registrationForm');
        registerButton.addEventListener('click', function() {
            scrollToElement(registrationForm);
        });
    
        // Add smooth scrolling to teams section
        var teamsSection = document.getElementById('teams');
        var teamsButton = document.getElementById('openTeamsButton');
        teamsButton.addEventListener('click', function() {
            scrollToElement(teamsSection);
        });
    });

    // Add event listener for the registration form submission
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Logic to handle form submission (e.g., send data to server, validation, etc.)
        // For now, let's just hide the registration form
        registrationForm.style.display = 'none';

        // Optionally, you can display a confirmation message or perform other actions
    });
});


    var menuBars = document.getElementById('menu-bars');
    var navbar = document.querySelector('.navbar');

    menuBars.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Add event listener for the registration form submission
    document.addEventListener('click', function(event) {
        if (event.target.id === 'submitRegistration') {
            event.preventDefault();
            // Add your registration form submission logic here
            alert('Registration submitted!');
        }
    });

document.addEventListener('DOMContentLoaded', function() {
    var eventForms = document.querySelectorAll('.event-form');
    var selectedEventInfo = document.getElementById('selected-event-info');
    var registrationContainer = document.getElementById('registration-form');

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
                        <button id="register-now">Register Now</button>
                    </div>
                </div>
            `;
            
            // Show the registration container when "Register Now" button is clicked
            document.getElementById('register-now').addEventListener('click', function() {
                registrationContainer.style.display = 'block';
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Sample data for teams (you can replace it with actual data from a database)
    var teamsData = [
        {
            name: 'Team A',
            description: 'Description of Team A. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            name: 'Team B',
            description: 'Description of Team B. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        // Add more teams as needed
    ];

    var teamList = document.getElementById('teams');

    // Dynamically create team cards
    teamsData.forEach(function(team) {
        var teamCard = document.createElement('div');
        teamCard.classList.add('team-card');
        teamCard.innerHTML = `
            <h3>${team.name}</h3>
            <p>${team.description}</p>
            <button class="ask-to-join-button">Ask to Join</button>
        `;
        teamList.appendChild(teamCard);
    });

    // Add event listener for "Ask to Join" buttons
    var askToJoinButtons = document.querySelectorAll('.ask-to-join-button');
    askToJoinButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Logic to handle the request to join the team (e.g., open a modal, send a request to the server, etc.)
            alert('Your request to join has been sent!');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the registration form and teams div
    var registrationForm = document.getElementById('registrationForm');
    var teamsSection = document.getElementById('teams');

    // Add event listener for the registration form submission
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Logic to handle form submission (e.g., send data to server, validation, etc.)

        // Hide the registration form
        registrationForm.parentElement.style.display = 'none';

        // Display the teams section
        teamsSection.style.display = 'block';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Add Event Button Click Handler
    document.getElementById('openAddEventModalButton').addEventListener('click', function() {
        document.getElementById('addEventModal').style.display = 'block';
    });

    // Cancel Add Event Button Click Handler
    document.getElementById('cancelAddEventButton').addEventListener('click', function() {
        document.getElementById('addEventModal').style.display = 'none';
    });

    // Add Event Form Submission Handler
    document.getElementById('addEventForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        var eventName = document.getElementById('eventName').value;
        var eventDescription = document.getElementById('eventDescription').value;
        var venue = document.getElementById('venue').value;
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;
        var fees = document.getElementById('fees').value;

        // Create new event form HTML
        var newEventHTML = `
            <div class="event-form" data-venue="${venue}" data-date="${date}" data-time="${time}" data-fees="${fees}">
                <h2>Event: ${eventName}</h2>
                <p>Description: ${eventDescription}</p>
            </div>
        `;

        // Append new event HTML to event slider
        document.querySelector('.event-slider').insertAdjacentHTML('beforeend', newEventHTML);

        // Close the Add Event modal
        document.getElementById('addEventModal').style.display = 'none';

        // Optional: Clear the form fields for the next event
        document.getElementById('addEventForm').reset();
    });

});
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the registration form and teams div
    var registrationForm = document.getElementById('registrationForm');
    var teamsSection = document.getElementById('teams');

    // Add event listener for the registration form submission
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Logic to handle form submission (e.g., send data to server, validation, etc.)

        // Hide the registration form
        registrationForm.parentElement.style.display = 'none';

        // Display the teams section
        teamsSection.style.display = 'block';
    });
});




