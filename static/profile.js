// JavaScript Execution (Browser Side):

// The submitProfile function executes. It prevents the default form submission 
// behavior using evt.preventDefault(). 

// By default, when a form is submitted, the browser sends 
// a request to the server, and the entire page may be refreshed or 
// redirected based on the server's response. 
// This is the default behavior of HTML forms.

// By calling evt.preventDefault();, you are telling the browser 
// not to proceed with the default form submission behavior. 
// Instead, you can use JavaScript (in this case, the fetch API) 
// to handle the form submission asynchronously, typically 
// with Ajax. This allows you to send data to the server, receive 
// a response, and update the page dynamically without a full page reload.

// The line evt.preventDefault(); prevents the form 
// from being submitted in the traditional synchronous way, giving 
// you control over how the form data is processed and how the 
// page is updated.

function submitProfile(evt) {
  evt.preventDefault();

  // It constructs an object (data) containing the values from the form fields. 

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value
  };

  // It makes a POST request using the fetch API to the /api/profile 
  // endpoint with the data in the request body. Go to my_profile.py

  fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // Ajax Response (JavaScript):
  // Flask responds to the Ajax request with a JSON object containing the processed 
  // data (name, age, occupation).
  // The then method in the fetch API callback processes the JSON response.

  .then(response => response.json())
  .then(jsonData => {
    // DOM Manipulation (JavaScript):
    // The processed data is used to dynamically update the HTML. In this case, it inserts a 
    // new list item (<li>) with the received data into the div with the ID "profiles."
    document.querySelector('#profiles').insertAdjacentHTML('beforeend', 
    ` <li>${jsonData.fullname} the ${jsonData.occupation} is ${jsonData.age}</li>`
    );
  });
  
}

// Final User Experience (Browser Side):
// The user sees the updated content on the webpage without a full page reload.

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
