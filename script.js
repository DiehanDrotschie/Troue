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
                 if (user.Date_Name == "null") {
                    document.getElementById("userName").innerText = `${user.Name} ${user.Surname}`;
                } else {
                    document.getElementById("userName").innerText = `${user.Name} and ${user.Date_Name}`;               
                }

                document.getElementById("Number").innerText = `${user.Table_Number} `;
            } else if (user2) {    
                var card = document.querySelector('.flip-card-inner');
                 card.style.transform = 'rotateY(180deg)';
                 /*Check if person has a date*/
                   if (user2.Date_Name == "null") {
                    document.getElementById("userName").innerText = `${user2.Name} ${user2.Surname}`;
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

// Function to dynamically adjust element sizes
function adjustElementSizes() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var isMobile = screenWidth <= 768; 
    
    // Example: Adjusting flip card width
    var flipCardWidth = screenWidth * 0.85; 
    var flipCardHeight = screenHeight * 0.7; 

    //Set the size of the outside border of the card
    var flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(function(card) {
        card.style.width = flipCardWidth + 'px';
        card.style.height = flipCardHeight + 'px';
    });

    //h1
    var responsiveHeadingFontSize1 = Math.max(22, 38 * (isMobile ? 0.75 : (screenWidth/1920)));
    var headings = document.querySelectorAll('h1');
    headings.forEach(function (heading) {
        heading.style.fontSize = responsiveHeadingFontSize1 + 'pt';
        heading.style.marginTop = (screenWidth * 0.01) + '0'; // Adjust vertical margin
    });
    //welcome text
    var element = document.getElementById("welcomeText");
    if (element) {
        var responsiveWelcome = Math.max(22, 38 * (isMobile ? 0.75 : (screenWidth / 1920)));
        element.style.fontSize = responsiveWelcome + 'pt';
        element.style.marginTop = (screenWidth * 0.01) + '0'; // Adjust vertical margin

    }
    //name and surname of someone
    var element2 = document.getElementById("userName");
    if (element2) {
        var responsiveWelcome = Math.max(22, 36 * (isMobile ? 0.75 : (screenWidth / 1920)));
        var responsiveH2TopMargin = Math.max(15, 15 * (isMobile ? 0.75 : (screenWidth / 1920)));
        element2.style.fontSize = responsiveWelcome + 'pt';
        element2.style.marginTop = responsiveH2TopMargin + 'px';
        element2.style.marginBottom = responsiveH2TopMargin + 'px';

    }

    //table number
    var element3 = document.getElementById("Number");
    if (element3) {
        var responsiveWelcome = Math.max(22, 36 * (isMobile ? 0.75 : (screenWidth / 1920)));
        var responsiveH2TopMargin = Math.max(30, 30 * (isMobile ? 0.75 : (screenWidth / 1920)));
        element3.style.fontSize = responsiveWelcome + 'pt';
        element3.style.marginTop = responsiveH2TopMargin + 'px';

    }
    //h2
    var responsiveHeadingFontSize2 = Math.max(22, 28 * (isMobile ? 0.75 : (screenWidth/1920)));
    var responsiveH2TopMargin = Math.max(15, 15 * (isMobile ? 0.75 : (screenWidth / 1920)));
    var headings = document.querySelectorAll('h2');
    headings.forEach(function (heading) {
        heading.style.fontSize = responsiveHeadingFontSize2 + 'pt';
        heading.style.marginTop = responsiveH2TopMargin + 'px';
    });

    //h3
    var responsiveHeadingFontSize2 = Math.max(12, 16 * (isMobile ? 0.75 : (screenWidth/1920)));
    var headings = document.querySelectorAll('h3');
    headings.forEach(function (heading) {
        heading.style.fontSize = responsiveHeadingFontSize2 + 'pt';
    });

        // Adjust labels
    var labels = document.querySelectorAll('label');
    labels.forEach(function(label) {
        label.style.fontSize = (screenWidth * 0.015) + 'px'; // Example: Font size based on screen width
    });

    // Adjust buttons
    var respbuttonmargin = Math.max(16, 20 * (isMobile ? 0.75 : (screenWidth/1920)));
    var respFontSize = Math.max(12, 16 * (isMobile ? 0.75 : (screenWidth/1920)));
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.style.fontSize = respFontSize + 'px'; // Adjust font size
        button.style.marginTop = respbuttonmargin + 'px'; // Adjust vertical margin
    });

    // Adjust textboxes
    var restextmargin = Math.max(16, 20 * (isMobile ? 0.75 : (screenWidth/1920)));
    var respFonttext = Math.max(16, 18*(isMobile ? 0.75 : (screenWidth/1920)))
    var textboxes = document.querySelectorAll('input[type="text"]');
    textboxes.forEach(function(textbox) {
        textbox.style.fontSize = respFonttext+ 'px'; // Adjust font size
        textbox.style.marginTop = restextmargin+ 'px'; // Adjust vertical margin

    });
}

// Add event listener for window resize
window.addEventListener('resize', adjustElementSizes);

// Initial adjustment on page load
window.onload = adjustElementSizes;