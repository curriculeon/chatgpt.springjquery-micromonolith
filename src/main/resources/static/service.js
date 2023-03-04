function createPerson() {
    var person = {
        id: parseInt(document.getElementById("id").value),
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value
    };

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/api/person/create",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(person),
        success: function(data) {
            console.log(data);
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
}

function readPersonById() {
    var id = parseInt(document.getElementById("id").value);

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/api/person/read/" + id,
        type: "GET",
        success: function(data) {
            console.log(data);
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
}

function readAllPersons() {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/api/person/readAll",
        type: "GET",
        success: function(data) {
            console.log(data);
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
}

function updatePersonById() {
    var id = parseInt(document.getElementById("id").value);

    var person = {
        id: id,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value
    };

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/api/person/update/" + id,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(person),
        success: function(data) {
            console.log(data);
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
}

function deletePersonById() {
    var id = parseInt(document.getElementById("id").value);

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/api/person/delete/" + id,
        type: "DELETE",
        success: function(data) {
            console.log(data);
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
}
