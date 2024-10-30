const botonaaOne = document.getElementById('botonaaOne');

botonaaOne.addEventListener('click', function(){
    window.open("https://discord.gg/dna-clan-eu");
})

const botonaaTwo = document.getElementById('botonaaTwo');

botonaaTwo.addEventListener('click', function(){
    window.open("https://discord.gg/dna-clan-eu");
})
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle reveal animations
    function reveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If element is in view
                if (entry.isIntersecting) {
                    // Add active class
                    entry.target.classList.add('active');
                    // Optionally remove observer after reveal
                    // observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of the element is visible
            rootMargin: '0px' // No margin
        });

        // Observe all elements with reveal classes
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(element => {
            observer.observe(element);
        });

        // Handle stagger reveal elements
        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add active class to all children with a delay
                    entry.target.querySelectorAll('*').forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('active');
                        }, index * 100); // 100ms delay between each child
                    });
                    // Optionally remove observer after reveal
                    // staggerObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px'
        });

        // Observe all stagger reveal containers
        document.querySelectorAll('.stagger-reveal').forEach(element => {
            staggerObserver.observe(element);
        });
    }

    // Initialize reveal
    reveal();
});