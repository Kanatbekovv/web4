// JavaScript for displaying the current date and time
document.addEventListener("DOMContentLoaded", () => {
    const dateTimeDisplay = document.getElementById("dateTimeDisplay");

    // Function to format the date and time
    function formatDateTime(date) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        };
        return date.toLocaleString('en-US', options);
    }

    // Function to update the current date and time every second
    function updateDateTime() {
        const now = new Date();
        dateTimeDisplay.textContent = formatDateTime(now);
    }

    // Update the date and time immediately, then every second
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
