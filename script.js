// Get the modal
const modal = document.getElementById('modal');

// Get the button that opens the modal
const btn = document.getElementById('get-started-btn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Function to handle form submission
const handleSubmit = (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  // Save user data to the database (backend implementation needed)

  // After saving data, close the modal
  modal.style.display = 'none';
}

// Add event listener to form submission
document.getElementById('user-form').addEventListener('submit', handleSubmit);

// Function to generate random events
const generateRandomEvents = () => {
  const events = [
    { name: 'Club Meeting', date: 'February 15, 2024', time: '3:00 PM - 5:00 PM', location: 'Room 101' },
    { name: 'Workshop on Web Development', date: 'February 20, 2024', time: '10:00 AM - 12:00 PM', location: 'Auditorium' },
    { name: 'Sports Tournament', date: 'February 25, 2024', time: '2:00 PM - 6:00 PM', location: 'Sports Complex' },
    { name: 'Guest Lecture on Science and Technology', date: 'March 5, 2024', time: '1:00 PM - 3:00 PM', location: 'Lecture Hall' },
    { name: 'Music Concert', date: 'March 10, 2024', time: '7:00 PM - 9:00 PM', location: 'Amphitheater' }
  ];

  const eventList = document.getElementById('event-list');
  events.forEach(event => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Time: ${event.time}</p>
      <p>Location: ${event.location}</p>
    `;
    eventList.appendChild(listItem);
  });
}

// Call the function to generate random events when the page loads
generateRandomEvents();
