function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "your name");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = text;
    }