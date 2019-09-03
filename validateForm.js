function validateForm() {
    var name = document.forms["myForm"]["fullName"].value;
    var title = document.forms["myForm"]["title"].value;
    var message = document.forms["myForm"]["message"].value;
    var email = document.forms["myForm"]["email"].value;
    if (name == "" || name.length < 4) {
        alert("Name must be filled out also must be at least 4 letters");
        return false;
    }

    else if (title == "" ) {
        alert("Titld must be filled out ");
        return false;
    }

    else if (message == "" || name.length < 20) {
        alert("Message must be at least 20 letters");
        return false;
    }

    else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }
}