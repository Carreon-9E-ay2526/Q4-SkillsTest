function checkLogin() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("paswo").value;

    let result;

    if (user === "" || pass === "") {
        result = "empty";
    } 
    else if (user === "Carreon" && pass === "76052") {
        result = "success";
    } 
    else {
        result = "wrong";
    }

    switch (result) {
        case "success":
            window.alert("Welcome Golden!");
            break;

        case "wrong":
            window.alert("Wrong Username or Password");
            break;

        case "empty":
            window.alert("Please fill in");
            break;

        default:
            window.alert("Unknown error");
    }
}