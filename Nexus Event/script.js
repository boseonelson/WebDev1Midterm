function generateQR() {
    const name = document.getElementById("name").value;
    const event = document.getElementById("event").value;
    const ticket = document.getElementById("ticket").value;

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    const qrData = `
Name: ${name}
Event: ${event}
Ticket: ${ticket}
    `;

    document.getElementById("qr").innerText = qrData;
}