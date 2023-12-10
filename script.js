function flipCard() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;

    if (name && surname) {
       /* document.getElementById("tableNumber").innerText = `Welcome, ${name} ${surname} and (Date)`;*/
        var card = document.querySelector('.flip-card-inner');
        card.style.transform = 'rotateY(180deg)';


        fetch('/searchGuest', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({ name: name, surname: surname }),
        })
            .then(res => res.json())
            .then(data => {
                  if (data.length > 0) {
                // Assuming data returns an array and the table number is in the first result
                    var tableNumber = data[0].TableNumber; // Replace 'TableNumber' with the actual field name from your database
                    document.getElementById("tableNumber").innerText = `Table Number: ${Table_Number}`;
                } else {
                    document.getElementById("tableNumber").innerText = "Guest Not Found";
                }
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
