function check() {
    var input = document.getElementById('user_confirm');
    if (input.value != document.getElementById('user_password').value) {
        input.setCustomValidity('Passwords do not match');
    } else {
        input.setCustomValidity('');
    }
}
