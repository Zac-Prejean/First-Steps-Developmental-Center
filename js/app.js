

function sendEmail(params) {
    var tempParams = {
        first_name: document.getElementById("firstName").value,
        last_name : document.getElementById("lastName").value,
        email_id: document.getElementById("email").value,
        phone_id : document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };
    emailjs.send('service_66fgn0k', 'template_bym3vrr', tempParams)
    .then(function(res){
        console.log("success", res.status);
        document.querySelectorAll('input').forEach(input => input.value = '');
        alert("Your Request Sent Successfully! Thank You!");
        // OPEN POPUP
        // document.getElementById("popup").classList.add("opend-popup");
        
    })
};
// function closePopup() {
//     document.getElementById("popup").classList.remove("opend-popup");
// }