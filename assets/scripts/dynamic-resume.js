document.addEventListener('DOMContentLoaded', function() {
    const resumeContainer = document.getElementById('resume-section');
    
    // Using a relative path that should work better with different page locations
    fetch('./assets/data/resume.json')
        .then(response => response.json())
        .then(data => {
            const experienceSection = document.createElement('section');
            experienceSection.className = 'resume-section';
            
            const experienceTitle = document.createElement('h1');
            experienceTitle.className = 'title-section';
            experienceTitle.textContent = 'Erfarenhet';
            experienceSection.appendChild(experienceTitle);
            
            data.experiences.forEach(exp => {
                const card = document.createElement('article');
                card.className = 'card';
                
                card.innerHTML = `
                    <h2>${exp.company}</h2>
                    <h3>${exp.position}</h3>
                    <time datetime="${exp.dates}">${exp.dates}</time>
                    <div class="description">
                        <p>${exp.description}</p>
                    </div>
                `;
                
                experienceSection.appendChild(card);
            });
            
            resumeContainer.appendChild(experienceSection);
            
            const educationSection = document.createElement('section');
            educationSection.className = 'resume-section';

            const educationTitle = document.createElement('h1');
            educationTitle.className = 'title-section';
            educationTitle.textContent = 'Utbildning';
            educationSection.appendChild(educationTitle);
            
            data.education.forEach(edu => {
                const card = document.createElement('article');
                card.className = 'card';
                
                card.innerHTML = `
                    <h2>${edu.institution}</h2>
                    <h3>${edu.degree}</h3>
                    <time datetime="${edu.dates}">${edu.dates}</time>
                    <div class="description">
                        <p>${edu.description}</p>
                    </div>
                `;
                
                educationSection.appendChild(card);
            });
            
            resumeContainer.appendChild(educationSection);
        });
});