// toggle icon navbar


// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// change color of the links when scrolling down and up
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset + height) {
            // active navebar links 
            navLinks.forEach(links =>{
                links.classList.add('active');
                document.querySelector('header nav a[heref*=' + id + ']').classList.add('active');
            })
        }
    });


    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
}