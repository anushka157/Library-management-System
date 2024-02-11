function addBook() {
    // Get input values
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;

    // Validate input
    if (title === '' || author === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create new book element
    var bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = '<strong>Title:</strong> ' + title + '<br><strong>Author:</strong> ' + author;

    // Append book element to the book list
    var bookList = document.getElementById('book-list');
    bookList.appendChild(bookElement);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
}
