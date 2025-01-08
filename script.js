document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.createElement('dialog');
    dialog.id = 'contact';
    dialog.innerHTML = `
        <div class="card">
            <a class="socialContainer containerTwo deactivate" onclick="document.getElementById('contact').close()" target="_blank"> <!--TODO: Anpassen-->
                <img src="images/WhatsApp.svg" alt="WhatsApp" class="socialSvg">
            </a>
            <a class="socialContainer containerThree" href="https://matrix.to/#/@Nic:alpaka.social" target="_blank">
                <img src="images/element-desktop-logo.svg" alt="Matrix" class="socialSvg">
            </a>
            <a class="socialContainer containerFour deactivate" onclick="document.getElementById('contact').close()" target="_blank">
                <img src="images/mail-open-alt-svgrepo-com.svg" alt="Mail" class="socialSvg">
            </a>
        </div>
    `;
    document.body.appendChild(dialog);

    const buttons = document.getElementsByClassName('button');
    const body = document.querySelector('body');
    
    Array.from(buttons).forEach(button => {
        button.addEventListener('click', () => {
            dialog.showModal();
            body.style.filter = 'blur(15px)';
        });
    });
        

    dialog.addEventListener('close', () => {
        body.style.filter = 'none';
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && dialog.open) {
            dialog.close();
        }
    });
    dialog.addEventListener('click', () => {
        dialog.close();
        body.style.filter = 'none';
    });
});
