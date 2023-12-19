function showRegisterForm() {
    var modal = document.getElementById('registerModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function showLoginForm() {
    var modal = document.getElementById('loginModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function showResetPasswordForm() {
    var modal = document.getElementById('resetPassword');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function showChangePasswordForm() {
    var modal = document.getElementById('changePassword');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeRegisterForm() {
    var modal = document.getElementById('registerModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function closeLoginForm() {
    var modal = document.getElementById('loginModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function closeResetPasswordForm() {
    var modal = document.getElementById('resetPassword');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function closeChangePasswordForm() {
    var modal = document.getElementById('changePassword');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function closeRegisterFormAndShowLoginForm() {
    closeRegisterForm();
    showLoginForm();
}

function closeLoginFormAndShowRegisterForm() {
    closeLoginForm();
    showRegisterForm();
}

function closeLoginFormAndShowResetPasswordForm() {
    closeLoginForm();
    showResetPasswordForm();
}

function closeResetPasswordFormAndShowChangePasswordForm() {
    closeResetPasswordForm();
    showChangePasswordForm();
}