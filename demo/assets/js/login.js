function showLoginForm(e) {
    if (e && e.stopPropagation) {//非IE
        e.stopPropagation();
    }
    else {//IE
        window.event.cancelBubble = true;
    }
    $(".login-form").show();
}

function hideLoginForm(e) {
    $(".login-form").hide();
}

function LoginFormClick(e) {
    if (e && e.stopPropagation) {//非IE
        e.stopPropagation();
    }
    else {//IE
        window.event.cancelBubble = true;
    }
}