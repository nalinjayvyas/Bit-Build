// let url = 'https://api.sheety.co/a97eaa95c239a092f276399d30a916e2/loginDetails/sheet1';
// let body = {
//   sheet1: {
//     username:"",
//     password:"",
//   }
// }
// fetch(url, {
//   method: 'POST',
//   body: JSON.stringify(body)
// })
// .then((response) => response.json())
// .then(json => {
//   // Do something with object
//   console.log(json.sheet1);
// });

// Replace 'YOUR_SHEETY_API_ENDPOINT' with the actual Sheety API endpoint
const sheetyApiEndpoint = 'https://api.sheety.co/a97eaa95c239a092f276399d30a916e2/loginDetails/sheet1';

// Replace 'YOUR_SHEET_ID' with the actual ID of your Google Sheet
const sheetId = 'YOUR_SHEET_ID';

// Sample data to update the Google Sheet
const newData = {
  username: 'John Doe',
  password: 'john.doe@example.com'
};

// Create a new row in the Google Sheet
fetch(`${sheetyApiEndpoint}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    sheet1: newData,  // Use the actual sheet name instead of 'sheet1'
  }),
})
.then(response => response.json())
.then(data => {
  console.log('Data updated successfully:', data);
})
.catch(error => {
  console.error('Error updating data:', error);
});