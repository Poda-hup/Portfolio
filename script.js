let menu = document .querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclik = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
}
const typed = new Typed('.multiple-text', {
    strings: ['Web Designer','Frontend Developer','UI UX Design','Data Analysis'],
    typeSpeed: 80,
    backSpedd:80,
    backDelay:1200,
    loop:true,
  });

  const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// تشغيل EmailJS
(function(){
    emailjs.init("uD24HVYjSf771B1td");
})();

// لما الفورم يتبعت
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_fymjkgm", "template_3c48o3l", this)
    .then(function() {
        alert("Message Sent Successfully ✅🔥");
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Failed ❌");
        console.log(error);
    });
});