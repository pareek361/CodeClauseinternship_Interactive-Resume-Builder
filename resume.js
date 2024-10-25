document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resumeForm');
    const preview = document.getElementById('resumePreview');
    const generateButton = document.getElementById('generateResume');

    function updatePreview() {
        const template = document.getElementById('template').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const summary = document.getElementById('summary').value;
        const experience = document.getElementById('experience').value;
        const education = document.getElementById('education').value;
        const skills = document.getElementById('skills').value;

        preview.className = `resume-preview ${template}`;
        preview.innerHTML = `
            <h2>${name}</h2>
            <p>${email} | ${phone}</p>
            <h3>Professional Summary</h3>
            <p>${summary}</p>
            <h3>Work Experience</h3>
            <p>${experience}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
    }

    form.addEventListener('input', updatePreview);
    document.getElementById('template').addEventListener('change', updatePreview);

    generateButton.addEventListener('click', function() {
        if (form.checkValidity()) {
            alert('Resume generated! (This is a simulation of downloading the resume)');
        } else {
            alert('Please fill out all required fields.');
        }
    });
});