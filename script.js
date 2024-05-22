document.addEventListener('DOMContentLoaded', function() {
    // Initially load the news and schedule content
    loadNews();
    loadSchedule();
});

function loadNews() {
    const newsContent = document.getElementById('news-content');
    newsContent.innerHTML = ''; // Clear previous content

    // Example API URL, replace with actual endpoint
    const apiURL = 'https://api.example.com/chicago-bears-news';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            data.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('col-md-4', 'mb-4');
                newsItem.innerHTML = `
                    <div class="card">
                        <img src="${article.image}" class="card-img-top" alt="${article.title}">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.description}</p>
                            <a href="${article.url}" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                `;
                newsContent.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
}

function loadSchedule() {
    const scheduleContent = document.getElementById('schedule-content');
    scheduleContent.innerHTML = ''; // Clear previous content

    // Example API URL, replace with actual endpoint
    const apiURL = 'https://fbschedules.com/2025-chicago-bears-schedule/';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            data.forEach(game => {
                const gameItem = document.createElement('div');
                gameItem.classList.add('col-md-4', 'mb-4');
                gameItem.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${game.opponent}</h5>
                            <p class="card-text">${game.date}</p>
                            <p class="card-text">${game.location}</p>
                        </div>
                    </div>
                `;
                scheduleContent.appendChild(gameItem);
            });
        })
        .catch(error => console.error('Error fetching schedule:', error));
}
