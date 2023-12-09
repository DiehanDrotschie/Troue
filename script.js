function flipCard() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;

    if (name && surname) {
       /* document.getElementById("tableNumber").innerText = `Welcome, ${name} ${surname} and (Date)`;*/
        var card = document.querySelector('.flip-card-inner');
        card.style.transform = 'rotateY(180deg)';



fetch('/search-guest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, surname })
    })
    .then(response => response.json())
    .then(data => {
        if (data.found) {
            // Display the name and surname
            console.log("Guest Found: ", data.guest.Name, data.guest.Surname);
            // Update this line to display on your webpage
            document.getElementById("tableNumber").textContent = `Guest Found: ${data.guest.Name} ${data.guest.Surname}`;
        } else {
            console.log("Guest Not Found");
            // Update this line to display on your webpage
            document.getElementById("tableNumber").textContent = "Guest Not Found";
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });



    } else {
        alert("Please enter both name and surname");
    }
}

function flipback() {
    var card = document.querySelector('.flip-card-inner');
    card.style.transform = 'rotateY(0deg)';

    document.getElementById("name").value = '';
    document.getElementById("surname").value = '';

}
