function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // إغلاق القائمة إذا ضغطت خارجها
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

 const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const footer = document.querySelector("footer"); // جلب الفوتر
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // إذا كان الفوتر قريب من الشاشة (ظهر أو قرب يبان)
    if (footerTop < windowHeight) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });





  // تشغيل الأنيميشن عند التمرير
document.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".scroll-animate");
  const triggerBottom = window.innerHeight * 0.85; 

  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add("show");
    }
  });
});
