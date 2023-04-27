function printResponse(items) {
  console.log("entre en response");
  let table = "<table>";
  table += "<thead>";
  table += "<tr>";
  table += "<th> Id </th>";
  table += "<th> Nombre </th>";
  table += "<th> Email </th>";
  table += "<th> Edad </th>";
  table += "<th> Eliminar </th>";
  table += "</tr>";
  table += "<thead>";
  for (i = 0; i < items.length; i++) {
    console.log("entre en for");

    table += "<tbody>";
    table += "<tr>";
    table += "<td>" + items[i].id + "</td>";
    table += "<td>" + items[i].name + "</td>";
    table += "<td>" + items[i].email + "</td>";
    table += "<td>" + items[i].age + "</td>";
    table +=
      "<td> <button onclick='deleteClient(" +
      items[i].id +
      ")' class='enviar' >Eliminar </button> </td>";
    table += "</tr>";
    table += "</tbody>";
  }
  table += "</table>";
  $("#result").append(table);
}

function getClient() {
  $.ajax({
    url: "https://g91a31a9fabffde-udmv89hf91cssk00.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      $("#result").empty();
      console.log(response);
      printResponse(response.items);
    },
    error: function () {
      alert(
        " hay un error en el programa, por favor intente nuevamente... 1carita"
      );
    },
  });
}

function saveClient() {
  console.log("entrando papi...=>" + $("#name").val());
  let data = {
    id: $("#id").val(),
    name: $("#name").val(),
    email: $("#email").val(),
    age: $("#age").val(),
  };

  data = JSON.stringify(data);
  console.log(data);
  $.ajax({
    url: "https://g91a31a9fabffde-udmv89hf91cssk00.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
    type: "POST",
    data: data,
    contentType: "application/JSON",
    datatype: "JSON",

    success: function (response) {
      alert("El cliente se ha guardado correctamente");
      $("#result").empty();
      $("#id").val("");
      $("#name").val("");
      $("#email").val("");
      $("#age").val("");
      getClient();
    },
    error: function () {
      alert(
        " hay un error en el programa, por favor intente nuevamente... carita POST"
      );
    },
  });
}

function updateClient() {
  let data = {
    id: $("#id").val(),
    name: $("#name").val(),
    email: $("#email").val(),
    age: $("#age").val(),
  };
  alert("entrando al update");
  console.log(data + "esta es la data");
  data = JSON.stringify(data);
  $.ajax({
    url: "https://g91a31a9fabffde-udmv89hf91cssk00.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
    type: "PUT",
    data: data,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (response) {
      alert("El cliente se ha actualizado correctamente");
      $("#result").empty();
      $("#id").val("");
      $("#name").val("");
      $("#email").val("");
      $("#age").val("");

      getClient();
    },
    error: function () {
      alert(
        " hay un error al actualizar en el programa, por favor intente nuevamente... carita POST"
      );
    },
  });
}

function deleteClient(id) {
  alert("eliminando dato");
  $.ajax({
    url:
      "https://g91a31a9fabffde-udmv89hf91cssk00.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client?id=" +
      id,
    type: "DELETE",
    datatype: "JSON",

    success: function (response) {
      alert("El cliente se ha eliminado correctamente");
      $("#result").empty();

      getClient();
    },
    error: function () {
      alert(
        " hay un error al eliminar, por favor intente nuevamente... carita POST"
      );
    },
  });
}
