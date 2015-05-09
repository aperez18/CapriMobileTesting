
function validate() {
    function login(username, passward) {
        if(username == "" || password == "") {
            $("#empty_field_error").show();
            $("#validation_error").hide();
        } else if(username != "admin" && password != "admin") {
            $("#validation_error").show();
            $("#empty_field_error").hide();
            $("#username").val("");
            $("#password").val("");
        } else if(username == "admin" && password == "admin") {
            window.location = "main.html";
            $("#validation_error").hide();
            $("#empty_field_error").hide();
        }
    }

    var username = $("#username").val();
    var password = $("#password").val();

    login(username, password);
}

validate();
