// data
const users = [
    { "id": 1, "username": "admin", "password": "1111", "role": 1 },
    { "id": 2, "username": "aaa", "password": "2222", "role": 2 },
    { "id": 3, "username": "bbb", "password": "333", "role": 2 }
];

const myModal = new bootstrap.Modal(document.getElementById('myModal'));


// Function to handle the login process
document.getElementById(".signInForm").onclick = function () {
    const usernameInput = document.getElementById("#username").value;
    const passwordInput = document.getElementById("#password").value;
};

// Check if the provided username and password match any user
const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

if (user) {
    // Successful login, you can redirect to a dashboard or perform other actions here
    alert("Login successful. Redirecting...");
    // Replace the alert with your desired action
} else {
    // Incorrect login, display an error dialog using SweetAlert2
    document.querySelector('#btn_SignIn').onclick = function () {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        });
    }
}