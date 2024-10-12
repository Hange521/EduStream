document.getElementById('join-btn').addEventListener('click', function() {
    alert('Thank you for joining EduStream! Start your learning journey today.');
});


document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    // Toggle the 'active' class on each click
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active'); // Close menu
    } else {
        navLinks.classList.add('active'); // Open menu
    }
});

