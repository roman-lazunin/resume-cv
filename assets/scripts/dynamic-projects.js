document.addEventListener('DOMContentLoaded', function() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            projectsContainer.innerHTML = '';
            data.forEach(item => {

                const cardLink = document.createElement('a');
                cardLink.href = item.link;
                cardLink.target = '_blank';
                cardLink.className = 'card-link';

                const card = document.createElement('article');
                card.className = 'card';
                card.innerHTML = `
                    <img src="assets/images/${item.image}" alt="${item.title}">
                    <section class="project-info">
                        <h2>${item.title}</h2>
                        <p>${item.description}</p>
                    </section>
                `;
                cardLink.appendChild(card);
                projectsContainer.appendChild(cardLink);
            });
        })
});