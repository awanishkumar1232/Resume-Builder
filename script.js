document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate-button");
    const resumeForm = document.getElementById("resume-form");
    const resumeOutput = document.getElementById("resume-output");

    generateButton.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const objective = document.getElementById("objective").value;
        const experience = document.getElementById("experience").value;
        const education = document.getElementById("education").value;

        const outputName = document.getElementById("output-name");
        const outputContact = document.getElementById("output-contact");
        const outputObjective = document.getElementById("output-objective");
        const outputExperience = document.getElementById("output-experience");
        const outputEducation = document.getElementById("output-education");

        outputName.textContent = `Name: ${name}`;
        outputContact.textContent = `Email: ${email} | Phone: ${phone}`;
        outputObjective.textContent = `Objective: ${objective}`;
        outputExperience.textContent = `Experience: ${experience}`;
        outputEducation.textContent = `Education: ${education}`;

        // Hide the form and show the generated resume
        resumeForm.style.display = "none";
        resumeOutput.classList.remove("hidden");
    });
});
