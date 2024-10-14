document.addEventListener("DOMContentLoaded", function() {
    const results = JSON.parse(localStorage.getItem('gradeResults'));
    const resultContainer = document.getElementById("result");

    results.forEach(result => {
        const div = document.createElement("div");
        div.classList.add("result");
        div.innerHTML = `
            <p>Subject: ${result.subjectName}</p>
            <p>Marks: ${result.marks}</p>
            <p>Grade: ${result.grade}</p>
            <p class="${result.status === 'Pass' ? 'pass' : 'fail'}">${result.status}</p>
        `;
        resultContainer.appendChild(div);
    });

    // Handle PDF download
    document.getElementById("downloadPdf").addEventListener("click", function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.text("Velammal College of Engineering and Technology", 20, 20);
        doc.text("CSE Department - Grade Results", 20, 30);

        let yPos = 50; // Y-position in the PDF for each result
        
        results.forEach(result => {
            doc.text(`Subject: ${result.subjectName}`, 20, yPos);
            doc.text(`Marks: ${result.marks}`, 20, yPos + 10);
            doc.text(`Grade: ${result.grade}`, 20, yPos + 20);
            doc.text(`Status: ${result.status}`, 20, yPos + 30);
            yPos += 40; // Move the Y-position down for each subject
        });

        doc.save("grade_results.pdf");
    });

    // Handle Exit button
    document.getElementById("exitBtn").addEventListener("click", function() {
        localStorage.removeItem('gradeResults'); // Clear results
        window.location.href = "index.html"; // Redirect to the grade calculator page
    });
});
