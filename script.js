function flipCard() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;

    if(name && surname) {
        document.getElementById("tableNumber").innerText = `Hello, ${name} ${surname}`;
        var card = document.querySelector('.flip-card-inner');
        card.style.transform = 'rotateY(180deg)';
    } else {
        alert("Please enter both name and surname");
    }
}

function flipback() {
    var card = document.querySelector('.flip-card-inner');
    card.style.transform = 'rotateY(0deg)';

}
