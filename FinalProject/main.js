window.onload = function () {
    var fullName = document.getElementById('Fullname');
    var message = document.getElementById('message');
    var email = document.getElementById('email');
    var form = document.getElementById('contactform');
    var checkBox = document.getElementById('consent');
    var errors = document.getElementById('errors');

    fullName.addEventListener('focus', function () {
        if (this.value == '') {
           this.value = 'Please type your full name...';
        }
    });
    message.addEventListener('focus', function() {
        if (fullName.value != ''){
            this.value = 'Hello ' + fullName.value + '! How can I help you today?'
        } else {
            this.value = 'please tell me who you are first. Enter your full name in the name field.'
        }

    });

    form.addEventListener('submit', function(e) {
        var stopSubmit = false;
	
		errors.innerHTML = '';

        if (!checkBox.checked) {
            errors.innerHTML += '<p>You must consent to receiving emails!</p>';
            stopSubmit = true;
        }

        if (fullName.value == '')   {
            errors.innerHTML += '<p>You must enter your name!</p>';
            stopSubmit = true;
        }

        if (stopSubmit) {
            e.preventDefault();
        }
    });
}
