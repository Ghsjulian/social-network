
        // Create a WebSocket connection
        const socket = new WebSocket("ws://localhost:8080");

        // Connection opened
        socket.addEventListener("open", function (event) {
            console.log("Connected to the server");
        });

        // Listen for messages
        socket.addEventListener("message", function (event) {
            console.log("Message from server: ", event.data);
            document.getElementById("output").innerHTML += `<p>${event.data}</p>`;
        });

        // Connection closed
        socket.addEventListener("close", function (event) {
            console.log("Server connection closed: ", event);
        });

        // Connection error
        socket.addEventListener("error", function (event) {
            console.log("Error: ", event);
        });

        // Send a message to the server
        function sendMessage() {
            const messageInput = document.getElementById("message");
            const message = messageInput.value;
            if (message.length > 0) {
                socket.send(message);
                messageInput.value = "";
            }
        }
