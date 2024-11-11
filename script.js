document.addEventListener('DOMContentLoaded', function () {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';

        textarea.addEventListener('input', function () {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        });
    });
});

function contact_me(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name && mail && message){
        fetch('http://localhost:13000/api/captcha', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body:{
                'name': name,
                'email': mail,
                'message': message
            }
        }).then((response) => {
            if (response.status === 200|| response.status === 201) {
                alert("Erfolgreich Kontakt aufgenommen")
            } else {
                throw new Error("Captcha failed");
            }
        }).catch((error) => {
            console.error('Error:', error);
            alert("Es ist ein Fehler aufgetreten, bitte versuchen sie es später nochmal");
        });
    } else {
        alert("Bitte alle Felder ausfüllen")
    }  
}