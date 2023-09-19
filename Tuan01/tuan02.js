// Jquery Ajax
const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";
(function() {
    $.ajax({ method: "GET", url: urlBacon, dataType: "json" })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            alert("no good");
        })

    $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos/1",
            beforeSend: function(xhr) {
                xhr.overrideMimeType("text/plain;charset=x-user-defined");
            }
        })
        .done(function(data) {
            if (console && console.log) {
                console.log("Sample of data:", data.slice(0, 100));
            }
        });

    function getAllUser() {
        var url = "https://jsonplaceholder.typicode.com/todos";
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onload = function() {
            var users = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(users);
            } else {
                console.error(users);
            }
        }
        xhr.send(null)
    }

    function getaUser() {
        var url = "https://jsonplaceholder.typicode.com/todos";
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url + '/1', true)
        xhr.onload = function() {
            var users = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(users);
            } else {
                console.error(users);
            }
        }
        xhr.send(null)
    }

    function postAUser() {
        var url = "https://jsonplaceholder.typicode.com/todos";
        var data = {};
        data.firstname = "John";
        data.lastname = "Snow";
        var json = JSON.stringify(data)

        var xhr = new XMLHttpRequest()
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');
        xhr.onload = function() {
            var users = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "201") {
                console.table(users);
            } else {
                console.error(users);
            }
        }
        xhr.send(json)
    }

    function putAUser() {
        var url = "https://jsonplaceholder.typicode.com/todos";
        var data = {};
        data.firstname = "John2";
        data.lastname = "Snow2";
        var json = JSON.stringify(data)

        var xhr = new XMLHttpRequest()
        xhr.open('PUT', url + '/12', true);
        xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');
        xhr.onload = function() {
            var users = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(users);
            } else {
                console.error(users);
            }
        }
        xhr.send(json)
    }

    function deleteAUser() {
        var url = "https://jsonplaceholder.typicode.com/todos";
        var xhr = new XMLHttpRequest()
        xhr.open('DELETE', url + '/12', true);
        xhr.onload = function() {
            var users = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(users);
            } else {
                console.error(users);
            }
        }
        xhr.send(null)
    }
    // getaUser()
    // getAllUser()
    // postAUser()
    // putAUser()
    // deleteAUser()
    // getAllUser()

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(
            (data) => {
                var htmls = data.map(
                    function(posts) {
                        return `<li>
                        <h3>${posts.id}</h3>
                        <h3>${posts.title}</h3>
                    </li>`
                    }
                )
                var html = htmls.join();
                var text = document.getElementById('info').innerHTML = html;
            }
        )
        .catch(() => console.log("Error"))
        // Get a user
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => console.log(json))
        // Create
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                userid: 1,
                title: "title",
                complete: true
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
        //update
    fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                complete: false,
                id: 100,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    // delete
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'DELETE',
    });
})()