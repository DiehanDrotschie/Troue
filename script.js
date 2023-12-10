function flipCard() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;

    if (name && surname) {
       /* document.getElementById("tableNumber").innerText = `Welcome, ${name} ${surname} and (Date)`;*/


        /*TODO: Change so that upper and lowercase will work
                Change so that works on mobile
        */
        fetch('https://raw.githubusercontent.com/DiehanDrotschie/Troue/main/Guests.json')
        .then(response => response.json())
         .then(data => {
            const user = data.find(user => user.Name === name && user.Surname === surname);
            const user2 = data.find(user => user.Date_Name === name && user.Date_Surname === surname);
             if (user) {
                var card = document.querySelector('.flip-card-inner');
                card.style.transform = 'rotateY(180deg)';
                document.getElementById("tableNumber").innerText = `Welcome: ${user.Name} and ${user.Date_Name}`;
                document.getElementById("Number").innerText = `${user.Table_Number} `;
            } else if (user2) {    
                var card = document.querySelector('.flip-card-inner');
                card.style.transform = 'rotateY(180deg)';
                document.getElementById("tableNumber").innerText = `Welcome: ${user2.Name} and ${user2.Date_Name}`;
                document.getElementById("Number").innerText = `${user2.Table_Number} `;
            } else {
                alert("Incorrect Name or Surname");
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
