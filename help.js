function highlightSection(sectionId) {
    // Remove highlight from all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.backgroundColor = '';
    });

    // Highlight the selected section
    document.getElementById(sectionId).style.backgroundColor = '#e6f9ff';
}
