const carsData = [
    {
        name: "BMW M4 Competition",
        price: "$84,999",
        year: "2024",
        hp: "503 HP",
        engine: "3.0L I6",
        drive: "RWD",
        image: "/optimages/FastTravel.webp"
        
    },
    {
        name: "Mercedes-AMG GT",
        price: "$118,000",
        year: "2024",
        hp: "577 HP",
        engine: "4.0L V8",
        drive: "AWD",
        image: "/optimages/pexels-aaronmcurtis-119435.jpg"
    },
    {
        name: "Porsche 911 GT3",
        price: "$169,700",
        year: "2024",
        hp: "502 HP",
        engine: "4.0L H6",
        drive: "RWD",
        image: "/optimages/pexels-alex-amorales-321095-909907.jpg"
    },
    {
        name: "Audi RS e-tron GT",
        price: "$147,100",
        year: "2024",
        hp: "637 HP",
        engine: "Electric",
        drive: "AWD",
        image: "/optimages//pexels-lynxexotics-3802508.jpg"
    },
    {
        name: "Tesla Model S Plaid",
        price: "$108,490",
        year: "2024",
        hp: "1,020 HP",
        engine: "Electric",
        drive: "AWD",
        image:"/optimages/pexels-mikebirdy-112460.jpg"
    },
    {
        name: "Lamborghini Huracán",
        price: "$248,295",
        year: "2024",
        hp: "631 HP",
        engine: "5.2L V10",
        drive: "AWD",
        image:"/optimages/pexels-mikebirdy-977003.jpg"
    },
    {
        name: "McLaren 720S",
        price: "$299,000",
        year: "2024",
        hp: "710 HP",
        engine: "4.0L V8",
        drive: "RWD",
        image: "/optimages/pexels-lynxexotics-3802508.jpg"
    },
    {
        name: "Ferrari F8 Tributo",
        price: "$276,550",
        year: "2024",
        hp: "710 HP",
        engine: "3.9L V8",
        drive: "RWD",
        image: "/optimages/pexels-mikebirdy-112460.jpg"
    },
    {
        name: "Aston Martin DBS",
        price: "$316,300",
        year: "2024",
        hp: "715 HP",
        engine: "5.2L V12",
        drive: "RWD",
        image: "/optimages/pexels-mikebirdy-120049.jpg"
    },
    {
        name: "Porsche Taycan Turbo S",
        price: "$187,400",
        year: "2024",
        hp: "750 HP",
        engine: "Electric",
        drive: "AWD",
        image: "/optimages/pexels-mikebirdy-120049.jpg"
    },
    {
        name: "Maserati MC20",
        price: "$212,000",
        year: "2024",
        hp: "621 HP",
        engine: "3.0L V6",
        drive: "RWD",
        image: "/optimages/pexels-mikebirdy-244206.jpg"
    },
    {
        name: "Pagani Huayra",
        price: "$2,800,000",
        year: "2024",
        hp: "850 HP",
        engine: "6.0L V12",
        drive: "RWD",
        image: "/optimages/pexels-mikebirdy-244206.jpg"
    }
];

// Create a cached fragment to store the original cards
let cachedCardsFragment = null;

function renderCars(cars, useCache = false) {
    const carsGrid = document.querySelector('.cars-grid');
    
    // If it's the initial render, create and cache the fragment
    if (!cachedCardsFragment && useCache) {
        cachedCardsFragment = document.createDocumentFragment();
        cars.forEach(car => {
            const carCard = createCarCard(car);
            cachedCardsFragment.appendChild(carCard);
        });
    }

    // Clear existing content
    carsGrid.innerHTML = '';

    // If using cache and we have cached content, clone and use it
    if (useCache && cachedCardsFragment) {
        carsGrid.appendChild(cachedCardsFragment.cloneNode(true));
    } else {
        // Otherwise create new cards
        const fragment = document.createDocumentFragment();
        cars.forEach(car => {
            const carCard = createCarCard(car);
            fragment.appendChild(carCard);
        });
        carsGrid.appendChild(fragment);
    }
    
    updateCarCards();
}

function createCarCard(car) {
    const carCard = document.createElement('div');
    carCard.className = 'car-card';
    carCard.innerHTML = `
        <img src="${car.image}" alt="${car.name}" class="car-image" loading="lazy">
        <div class="car-details">
            <h3 class="car-name">${car.name}</h3>
            <div class="car-price">${car.price}</div>
            <div class="car-specs">
                <span>${car.year}</span>
                <span>${car.hp}</span>
                <span>${car.engine}</span>
                <span>${car.drive}</span>
            </div>
            <button class="car-button">View Details</button>
        </div>
    `;
    return carCard;
}

// Export for other modules
window.renderCars = renderCars;
window.carsData = carsData;