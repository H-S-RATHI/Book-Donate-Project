function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";

  var name = document.getElementById("name_row" + no);
  var country = document.getElementById("country_row" + no);
  var age = document.getElementById("age_row" + no);

  var name_data = name.innerHTML;
  var country_data = country.innerHTML;
  var age_data = age.innerHTML;

  name.innerHTML =
    "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
  country.innerHTML =
    "<input type='text' id='country_text" +
    no +
    "' value='" +
    country_data +
    "'>";
  age.innerHTML =
    "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";

  document
    .querySelector(`#edit_button${no}`)
    .setAttribute("aria-hidden", "true");
  document
    .querySelector(`#save_button${no}`)
    .setAttribute("aria-hidden", "false");
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
    "<td><input type='text' id='new_name" +
    table_len +
    "'></td>" +
    "<td><input type='text' id='new_country" +
    table_len +
    "'></td>" +
    "<td><input type='text' id='new_age" +
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
  var name_val = document.getElementById("new_name" + no).value;
  var country_val = document.getElementById("new_country" + no).value;
  var age_val = document.getElementById("new_age" + no).value;

  document.getElementById("row" + no).innerHTML =
    "<td id='serial_no_row" +
    no +
    "'>" +
    no +
    "</td>" +
    "<td id='name_row" +
    no +
    "'>" +
    name_val +
    "</td>" +
    "<td id='country_row" +
    no +
    "'>" +
    country_val +
    "</td>" +
    "<td id='age_row" +
    no +
    "'>" +
    age_val +
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
