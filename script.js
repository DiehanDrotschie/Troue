function flipCard() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;

    if (name && surname) {
        fetch('https://raw.githubusercontent.com/DiehanDrotschie/Troue/main/Guests.json')
        .then(response => response.json())
            .then(data => {
             /*search for eaither the date or the person */
            const user = data.find(user => (user.Name).toUpperCase() === name.toUpperCase() && (user.Surname).toUpperCase() === surname.toUpperCase());
            const user2 = data.find(user => (user.Date_Name).toUpperCase() === name.toUpperCase() && (user.Date_Surname).toUpperCase() === surname.toUpperCase());
             /*Check if person has a date*/
             if (user) {
                var card = document.querySelector('.flip-card-inner');
                card.style.transform = 'rotateY(180deg)';
                 if (user.Date_Name == null) {
                    document.getElementById("userName").innerText = `${user.Name} and ${user.Surname}`;
                } else {
                    document.getElementById("userName").innerText = `${user.Name} and ${user.Date_Name}`;               
                }

                document.getElementById("Number").innerText = `${user.Table_Number} `;
            } else if (user2) {    
                var card = document.querySelector('.flip-card-inner');
                 card.style.transform = 'rotateY(180deg)';
                 /*Check if person has a date*/
                   if (user2.Date_Name == null) {
                    document.getElementById("userName").innerText = `${user2.Name} and ${user2.Surname}`;
                } else {
                    document.getElementById("userName").innerText = `${user2.Name} and ${user2.Date_Name}`;               
                }
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
