function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";

  var title = document.getElementById("title_row" + no);
  var author = document.getElementById("author_row" + no);
  var genre = document.getElementById("genre_row" + no);
  var year = document.getElementById("year_row" + no);
  var isbn = document.getElementById("isbn_row" + no);

  var title_data = title.innerHTML;
  var author_data = author.innerHTML;
  var genre_data = genre.innerHTML;
  var year_data = year.innerHTML;
  var isbn_data = isbn.innerHTML;

  title.innerHTML =
    "<input type='text' id='title_text" + no + "' value='" + title_data + "'>";
  author.innerHTML =
    "<input type='text' id='author_text" +
    no +
    "' value='" +
    author_data +
    "'>";
  genre.innerHTML =
    "<input type='text' id='genre_text" + no + "' value='" + genre_data + "'>";
  year.innerHTML =
    "<input type='text' id='year_text" + no + "' value='" + year_data + "'>";
  isbn.innerHTML =
    "<input type='text' id='isbn_text" + no + "' value='" + isbn_data + "'>";
}

function add_row() {
  var table = document.getElementById("data_table");
  var table_len = table.rows.length;

  var row = (table.insertRow(table_len).outerHTML =
    "<tr id='row" +
    table_len +
    "'>" +
    "<td id='serial_no_row" +
    table_len +
    "'>" +
    table_len +
    "</td>" +
    "<td><input type='text' id='new_title" +
    table_len +
    "'></td>" +
    "<td><input type='text' id='new_author" +
    table_len +
    "'></td>" +
    "<td><input type='text' id='new_genre" +
    table_len +
    "'></td>" +
    "<td><input type='text' id='new_year" +
    table_len +
    "'></td>" +
    "<td><input type='text' id='new_isbn" +
    table_len +
    "'></td>" +
    "<td><button id='save_button" +
    table_len +
    "' class='save' onclick='save_row(" +
    table_len +
    ")'>Save</button><button id='delete_button" +
    table_len +
    "' class='delete' onclick='delete_row(" +
    table_len +
    ")'>Delete</button></td></tr>");
}

function save_row(no) {
  var title_val = document.getElementById("new_title" + no).value;
  var author_val = document.getElementById("new_author" + no).value;
  var genre_val = document.getElementById("new_genre" + no).value;
  var year_val = document.getElementById("new_year" + no).value;
  var isbn_val = document.getElementById("new_isbn" + no).value;

  document.getElementById("row" + no).innerHTML =
    "<td id='serial_no_row" +
    no +
    "'>" +
    no +
    "</td>" +
    "<td id='title_row" +
    no +
    "'>" +
    title_val +
    "</td>" +
    "<td id='author_row" +
    no +
    "'>" +
    author_val +
    "</td>" +
    "<td id='genre_row" +
    no +
    "'>" +
    genre_val +
    "</td>" +
    "<td id='year_row" +
    no +
    "'>" +
    year_val +
    "</td>" +
    "<td id='isbn_row" +
    no +
    "'>" +
    isbn_val +
    "</td>" +
    "<td><button id='edit_button" +
    no +
    "' class='edit' onclick='edit_row(" +
    no +
    ")'>Edit</button>" +
    "<button id='save_button" +
    no +
    "' class='save' onclick='save_row(" +
    no +
    ")' style='display:none'>Save</button>" +
    "<button id='delete_button" +
    no +
    "' class='delete' onclick='delete_row(" +
    no +
    ")'>Delete</button></td>";
}

function delete_row(no) {
  document.getElementById("row" + no).outerHTML = "";
}
