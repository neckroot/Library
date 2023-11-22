# Library

This is my first test task with Angular.
The idea of SPA is to create service for adding authors and books to the tables.

## Authors page

There are 2 routes in the application. Main route, /authors, with redirect from non-existent routes.

<img src="src/assets/images/readme/01_start_page.png" alt="Start page" width="400">

The authors in the table immediately sorting by last name.

<img src="src/assets/images/readme/02_sort_by_lastname.png" alt="Sort by lastname" width="400">

## Books page

The second route is /books.

<img src="src/assets/images/readme/03_book_page.png" alt="Book page" width="400">

You can choose author from the select field.

<img src="src/assets/images/readme/04_choose_author.png" alt="Choose author" width="400">

The table with books is not sorted by default, but you can change row order by clicking on the headers.

<img src="src/assets/images/readme/05_add_books.png" alt="Adding book" width="400">

Ascending by full name.

<img src="src/assets/images/readme/06_sort_by_fullname_asc.png" alt="Sort by full name ascending" width="400">

Descending by book title

<img src="src/assets/images/readme/07_sort_by_title_desc.png" alt="Sort by title descending" width="400">

## Some features

- There are OnPush change detection strategy in the application.
- The /books route with lazy loading.
- The data is saved to the local storage.
- The application navbar always at the top of screen.
- The tables have sticky headers.
