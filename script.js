const cardData = [
    {
        image: "Images/zmFoXJs0ldkq6CXQDSTAmQJWpGs.avif",
        title: "Fantast",
        description: "Become a super designer with Frame",
        date: "Jan 10, 2024",
        label: "Images/PROGRESS.png"
    },
    {
        image: "Images/660035dfa8de7906484df4d0-cinema-adult-3d-glasses-3d-stereoscopic.jpg",
        title: "Acrobat",
        description: "Acrobat is a concept fashion glasses",
        date: "Jan 10, 2024",
        label:"Images/label.png"
    },
    {
        image: "Images/llyAb5sPQWhUbn6wcmJ29C3ktmk.avif",
        title: "Orall-1",
        description: "orall is the virtual human for oppo",
        date: "Jan 10, 2024",
        label:"Images/label.png"
    },
    {
        image: "Images/sunny-rainy-cloudy-day-weather-forecast-icon-illustration_47987-10695.avif",
        title: "Reall data in Framer:weather",
        description: "imprting the open weather APi in override to use real weather data",
        date: "Jan 10, 2024",
        label: ""
    },
    {
        image:"Images/zmFoXJs0ldkq6CXQDSTAmQJWpGs.avif",
        title: "Reall data in Framer:Clock",
        description: "UseDate() in override to get The real time data",
        date: "Jan 10, 2024",
        label: ""
    },{
        image: "Images/spring.jpeg",
        title: "About spring Animation",
        description: "Take a deeper look at spring animation in frame motion",
        date: "Jan 10, 2024",
        label: ""
    },{
        image: "Images/aitool.webp",
        title: "Framees",
        description: "A tool is help you retouch images and frames",
        date: "Jun 1, 2022",
        label: ""
    },{
        image: "Images/llyAb5sPQWhUbn6wcmJ29C3ktmk.avif",
        title: "Wowpad OS",
        description: "Prototype iPados running on the web",
        date: "Jan 12, 2022",
        label: ""
    },{
        image:"Images/book.jpg" ,
        title: "Dadeo AR",
        description: "Discover how we are bringing your favorite books to AR world",
        date: "Aug 1, 2020",
        label: ""
    }
    
    
];

const cardContainer = document.getElementById('card-container');

cardData.map(card => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
        <div class="card_image">
            <img src="${card.image}" alt="${card.title}">
        </div>
        <div class="card_content">
            <h4>${card.title}</h4>
            <p>${card.description}</p>
        </div>
        <div class="date">
            <p>${card.date}</p>
        </div>
        ${card.label ? 
            `<div class="label">
                <img src="${card.label}" alt="Label">
            </div>` 
        : ''} <!-- Only add label div if label exists -->
    `;
    cardContainer.appendChild(cardDiv);
});
