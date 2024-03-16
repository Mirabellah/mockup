document.addEventListener("DOMContentLoaded", function() {
    // Add an event listener to the form submission event
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior



        // Perform search operation (for demonstration purposes, log input values)
        // console.log("Location:", location);
        // console.log("Start Date:", startDate);
        // console.log("End Date:", endDate);
        // console.log("Guests:", guests);

        // You can implement further search functionality here
        // For example, you can send the form data to a server for processing, or update the UI with search results.
    });
});