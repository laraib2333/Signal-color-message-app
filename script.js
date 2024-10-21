
function checkTrafficSignal() {
    var color = document.getElementById("colorInput").value;
    var message = "";

    if (color.toLowerCase() === "red") {
        message = "Must stop";
    } else if (color.toLowerCase() === "yellow") {
        message = "Ready to move";
    } else if (color.toLowerCase() === "green") {
        message = "Move now";
    } else {
        message = "Please enter a valid color of the road traffic signal.";
    }

    document.getElementById("message").textContent = message;
}