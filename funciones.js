function printResponse(items) {
  console.log("entre en response");
  let table = "<table>";
  table += "<thead>";
  table += "<tr>";
  table += "<th> Id </th>";
  table += "<th> Marca </th>";
  table += "<th> Año </th>";
  table += "<th> Referencia </th>";
  table += "<th> Eliminar </th>";
  table += "</tr>";
  table += "<thead>";
  for (i = 0; i < items.length; i++) {
    console.log("entre en for");

    table += "<tbody>";
    table += "<tr>";
    table += "<td>" + items[i].id + "</td>";
    table += "<td>" + items[i].brand + "</td>";
    table += "<td>" + items[i].model + "</td>";
    table += "<td>" + items[i].category_id + "</td>";
    table +=
      "<td> <button onclick='deleteCar(" +
      items[i].id +
      ")' class='enviar' >Eliminar </button> </td>";
    table += "</tr>";
    table += "</tbody>";
  }
  table += "</table>";
  $("#result").append(table);
}

function getCostumes() {
  $.ajax({
    url: "https://g91a31a9fabffde-udmv89hf91cssk00.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/car/car",
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

function saveCar() {
  console.log("entrando papi...=>" + $("#brand").val());
  let data = {
    id: $("#id").val(),
    brand: $("#brand").val(),
    model: $("#model").val(),
    category_id: $("#category_id").val(),
  };

  data = JSON.stringify(data);
  console.log(data);

  $.ajax({
    url: "https://g91a31a9fabffde-udmv89hf91cssk00.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/car/car",
    type: "POST",
    data: data,
    contentType: "application/JSON",
    datatype: "JSON",

    success: function (response) {
      alert("entrando al success");
      alert("El vehiculo se ha guardado correctamente");
      $("#result").empty();
      $("#id").val("");
      $("#brand").val("");
      $("#model").val("");
      $("#category_id").val("");
      getCostumes();
    },
    error: function () {
      alert(
        " hay un error en el programa, por favor intente nuevamente... carita POST"
      );
    },
  });
}

function updateCar() {
  let data = {
    id: $("#id").val(),
    brand: $("#brand").val(),
    model: $("#model").val(),
    category_id: $("#category_id").val(),
  };
  console.log(data + "esta es la data");
  data = JSON.stringify(data);
  $.ajax({
    url: "https://g91a31a9fabffde-udmv89hf91cssk00.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/car/car",
    type: "PUT",
    data: data,
    contentType: "application/JSON",
    datatype: "JSON",

    success: function (response) {
      alert("El vehiculo se ha actualizado correctamente");
      $("#result").empty();
      $("#id").val("");
      $("#brand").val("");
      $("#model").val("");
      $("#category_id").val("");
      getCostumes();
    },
    error: function () {
      alert(
        " hay un error al actualizar en el programa, por favor intente nuevamente... carita POST"
      );
    },
  });
}

function deleteCar(id) {
  alert("eliminando dato");
  $.ajax({
    url:
      "https://g91a31a9fabffde-udmv89hf91cssk00.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/car/car?id=" +
      id,
    type: "DELETE",
    datatype: "JSON",

    success: function (response) {
      alert("El vehiculo se ha Eliminado correctamente");
      $("#result").empty();

      getCostumes();
    },
    error: function () {
      alert(
        " hay un error al eliminar, por favor intente nuevamente... carita POST"
      );
    },
  });
}
