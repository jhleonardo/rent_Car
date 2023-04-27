function printResponse(items) {
  console.log("entre en response");
  let table = "<table>";
  table += "<thead>";
  table += "<tr>";
  table += "<th> Id </th>";
  table += "<th> Mensaje </th>";
  table += "<th> Eliminar </th>";
  table += "</tr>";
  table += "<thead>";
  for (i = 0; i < items.length; i++) {
    console.log("entre en for");

    table += "<tbody>";
    table += "<tr>";
    table += "<td>" + items[i].id + "</td>";
    table += "<td>" + items[i].messagetext + "</td>";
    table +=
      "<td> <button onclick='deleteMessage(" +
      items[i].id +
      ")' class='enviar' >Eliminar </button> </td>";
    table += "</tr>";
    table += "</tbody>";
  }
  table += "</table>";
  $("#result").append(table);
}

function getMessage() {
  $.ajax({
    url: "https://g91a31a9fabffde-udmv89hf91cssk00.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
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

function saveMessage() {
  let data = {
    id: $("#id").val(),
    messagetext: $("#messagetext").val(),
  };

  data = JSON.stringify(data);
  console.log(data);

  $.ajax({
    url: "https://g91a31a9fabffde-udmv89hf91cssk00.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
    type: "POST",
    contentType: "application/json",
    data: data,
    success: function (response) {
      console.log("Mensaje guardado correctamente en el ID:" + response.id);
      alert("Mensaje guardado correctamente en el ID:" + response.id);
      $("#result").empty();
      $("#id").val("");
      $("#messagetext").val("Hola care papata");
      getMessage();
    },
    error: function (response, xhr) {
      alert(
        " hay un error en el programa, por favor intente nuevamente... carita POST"
      );
    },
  });
}

function updateMessage() {
  let data = {
    id: $("#id").val(),
    messagetext: $("#messagetext").val(),
  };
  console.log(data + "esta es la data");
  data = JSON.stringify(data);
  $.ajax({
    url: "https://g91a31a9fabffde-udmv89hf91cssk00.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
    type: "PUT",
    data: data,
    contentType: "application/JSON",
    datatype: "JSON",

    success: function (response) {
      alert("El vehiculo se ha actualizado correctamente");
      $("#result").empty();
      $("#id").val("");
      $("#messagetext").val("");

      getMessage();
    },
    error: function () {
      alert(
        " hay un error al actualizar en el programa, por favor intente nuevamente... carita POST"
      );
    },
  });
}

function deleteMessage(id) {
  alert("eliminando dato");
  $.ajax({
    url:
      "https://g91a31a9fabffde-udmv89hf91cssk00.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message?id=" +
      id,
    type: "DELETE",
    datatype: "JSON",

    success: function (response) {
      alert("El mensaje se ha eliminado correctamente");
      $("#result").empty();

      getMessage();
    },
    error: function () {
      alert(
        " hay un error al eliminar, por favor intente nuevamente... carita POST"
      );
    },
  });
}
