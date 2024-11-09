document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value; // User's email
  const contactNumber = document.getElementById("contactNumber").value;
  const message = document.getElementById("message").value;

  // Validate fields (basic validation)
  if (!firstName || !lastName || !email || !contactNumber || !message) {
    alert("Please fill out all the fields.");
    return;
  }

  // Use SMTP.js to send the email
  Email.send({
    SecureToken: "d1b55ad1-a6f6-4655-bcba-0705d94a78e9", // Your generated secure token
    To: "Umarfarooq6153@gmail.com", // The email where you want to receive the form submissions
    From: "Umarfarooq6153@gmail.com", // Your Gmail address (as Gmail requires the "From" to be yours)
    ReplyTo: email, // Set the user's email as the Reply-To
    Subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    Body: `
      <h2>Contact Form Submission</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact Number:</strong> ${contactNumber}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  }).then(
    function (message) {
      alert("Your message has been sent successfully!");
      document.getElementById("contactForm").reset(); // Clear the form
    },
    function (error) {
      alert("There was an error sending your message. Please try again later.");
      console.error(error);
    }
  );
});
