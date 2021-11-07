var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["manufacturer"] = document.getElementById("manufacturer").value;
    formData["model"] = document.getElementById("model").value;
    formData["year"] = document.getElementById("year").value;
    formData["value"] = document.getElementById("value").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("CarList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.manufacturer;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.model;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.year;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.value;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
    window.alert("Successfully added")
}

function resetForm() {
    document.getElementById("manufacturer").value = "";
    document.getElementById("model").value = "";
    document.getElementById("year").value = "";
    document.getElementById("value").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("manufacturer").value = selectedRow.cells[0].innerHTML;
    document.getElementById("model").value = selectedRow.cells[1].innerHTML;
    document.getElementById("year").value = selectedRow.cells[2].innerHTML;
    document.getElementById("value").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.manufacturer;
    selectedRow.cells[1].innerHTML = formData.model;
    selectedRow.cells[2].innerHTML = formData.year;
    selectedRow.cells[3].innerHTML = formData.value;
    window.alert("Successfully updated")
}

function onDelete(td) {
    if (confirm('Are you sure to delete this item?')) {
        row = td.parentElement.parentElement;
        document.getElementById("CarList").deleteRow(row.rowIndex);
        resetForm();
        window.alert("Successfully deleted")
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("manufacturer").value == "") {
        isValid = false;
        document.getElementById("CarInventoryLog").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("CarInventoryLog").classList.contains("hide"))
            document.getElementById("CarInventoryLog").classList.add("hide");
    }
    return isValid;
}