function showNotification(message) {
    // Check if the browser supports notifications
    if ('Notification' in window) {
        // Request permission to show notifications
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                // Create a notification
                const notification = new Notification('Email Notification', {
                    body: message,
                });
            }
        });
    }
}

function submitForm(event) {
    event.preventDefault();
    // Handle the success or error response from the server
    fetch('http://127.0.0.1:3000/send-email', {
        method: 'POST',
        body: new FormData(document.getElementById('contactForm')),
    })
    .then(response => response.text())
    .then(data => {
        console.log('Response from server:', data);
        if (data === 'Email sent successfully') {
            // Show a notification or update the DOM with the success message
            alert('Email sent successfully');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle the error as needed
    });
}





