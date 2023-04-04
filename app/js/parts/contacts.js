document.addEventListener('DOMContentLoaded', () => {
   
    $('.contacts__social-copylink').click(function() {
        var inputfake = document.createElement('input'),
        text = window.location.href;

        document.body.appendChild(inputfake);
        inputfake.value = text;
        inputfake.select();
        document.execCommand('copy');
        document.body.removeChild(inputfake);
    });

    
});