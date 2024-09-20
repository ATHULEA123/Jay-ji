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
        description: "Become a super designer with Frame",
        date: "Jan 10, 2024",
        label: ""
    },
    {
        image:"Images/zmFoXJs0ldkq6CXQDSTAmQJWpGs.avif",
        title: "Fantast",
        description: "Become a super designer with Frame",
        date: "Jan 10, 2024",
        label: ""
    },{
        image: "Images/spring.jpeg",
        title: "Fantast",
        description: "Become a super designer with Frame",
        date: "Jan 10, 2024",
        label: ""
    },{
        image: "Images/aitool.webp",
        title: "Fantast",
        description: "Become a super designer with Frame",
        date: "Jan 10, 2024",
        label: ""
    },{
        image: "Images/llyAb5sPQWhUbn6wcmJ29C3ktmk.avif",
        title: "Fantast",
        description: "Become a super designer with Frame",
        date: "Jan 10, 2024",
        label: ""
    },{
        image:"Images/book.jpg" ,
        title: "Fantast",
        description: "Become a super designer with Frame",
        date: "Jan 10, 2024",
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
