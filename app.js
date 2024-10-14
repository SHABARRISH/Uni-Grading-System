document.getElementById("addSubject").addEventListener("click", function() {
    const subjectList = document.getElementById("subjectList");
    const subjectEntry = document.createElement("div");
    subjectEntry.classList.add("subject-entry");

    subjectEntry.innerHTML = `
        <label for="subjectName">Subject Name:</label>
        <input type="text" name="subjectName" placeholder="Enter subject name" required>

        <label for="marks">Marks:</label>
        <input type="number" name="marks" placeholder="Enter your marks" required>
    `;

    subjectList.appendChild(subjectEntry);
});

function submitForm(event) {
    event.preventDefault();

    const subjectEntries = document.querySelectorAll(".subject-entry");
    const results = [];

    subjectEntries.forEach(entry => {
        const subjectName = entry.querySelector('input[name="subjectName"]').value;
        const marks = parseFloat(entry.querySelector('input[name="marks"]').value);

        let grade;
        if (marks >= 90) {
            grade = 'A+';
        } else if (marks >= 80) {
            grade = 'A';
        } else if (marks >= 70) {
            grade = 'B';
        } else if (marks >= 60) {
            grade = 'C';
        } else if (marks >= 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        const status = (marks >= 50) ? 'Pass' : 'Fail';
        results.push({ subjectName, marks, grade, status });
    });

    // Save results to localStorage to access in result.html
    localStorage.setItem('gradeResults', JSON.stringify(results));

    // Redirect to the result page
    window.location.href = "result.html";
}
