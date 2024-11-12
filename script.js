document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('recommendationButton').addEventListener('click', () => {
    const recommendationList = document.getElementById('recommendationList');
    if (recommendationList.style.display === 'none') {
        recommendationList.style.display = 'block';
    } else {
        recommendationList.style.display = 'none';
    }
});

document.getElementById('albumRecommendationButton').addEventListener('click', () => {
    const albumRecommendationList = document.getElementById('albumRecommendationList');
    if (albumRecommendationList.style.display === 'none') {
        albumRecommendationList.style.display = 'block';
    } else {
        albumRecommendationList.style.display = 'none';
    }
});
