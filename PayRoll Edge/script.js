let totalHours = 0;
const hourlyRate = 100; // sample rate
const taxRate = 0.1; // 10%

function addHours() {
    const input = document.getElementById("inputHours");
    const hours = parseFloat(input.value);

    if (isNaN(hours) || hours <= 0) {
        alert("Enter valid hours");
        return;
    }

    totalHours += hours;

    const gross = totalHours * hourlyRate;
    const tax = gross * taxRate;
    const net = gross - tax;

    document.getElementById("hours").innerText = totalHours + " hrs";
    document.getElementById("tax").innerText = "₱" + tax.toFixed(2);

    document.getElementById("payslip").innerHTML = `
        Total Hours: ${totalHours} hrs <br>
        Gross Pay: ₱${gross.toFixed(2)} <br>
        Tax: ₱${tax.toFixed(2)} <br>
        Net Pay: ₱${net.toFixed(2)}
    `;

    input.value = "";
}

function exportData() {
    const data = document.getElementById("payslip").innerText;

    const blob = new Blob([data], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "payslip.txt";
    link.click();
}