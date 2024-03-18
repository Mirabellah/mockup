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
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? 'block' : 'none';
  });
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});

showTestimonial(index); // Show initial testimonial
