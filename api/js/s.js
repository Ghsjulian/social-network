var socket  = new WebSocket('ws://localhost:8080');

        // Define the 
        var message = document.getElementById('message');

        function transmitMessage() {
            socket.send( message.value );
        }

        socket.onmessage = function(e) {
            alert( 
