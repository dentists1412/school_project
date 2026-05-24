
// HAMBURGER MENU

const hamburger = document.getElementById("hamburger");
5   const navLinks = document.getElementById("nav-links");


if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


// CLOSE MENU WHEN LINK CLICKED

 const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(link => {
  link.addEventListener("click", () => {
    if (navLinks) {
      navLinks.classList.remove("active");
    }
  });
});


// HEADER SHADOW ON SCROLL
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (header) {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 5px 10px rgba(0,0,0,0.2)";
    } else {
      header.style.boxShadow = "none";
    }
  }
});


// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const targetAttr = this.getAttribute("href");
    
    // Ensure the href is not just '#'
    if (targetAttr !== '#') {
      const target = document.querySelector(targetAttr);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  });
});


// GALLERY HOVER EFFECT

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.05)";
  });

  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";
  });
});

// NOTE ON FORM SUBMISSION:
// The Javascript form listener with e.preventDefault() was removed intentionally.
// This allows the data to naturally pass straight to your 'submit_admission.php' file.


// ==========================================
// BACKGROUND DATA COLLECTION HANDLING (AJAX)
// ==========================================
const admissionForm = document.querySelector(".admission-form");

if (admissionForm) {
  admissionForm.addEventListener("submit", function (e) {
    // 1. Stop the page from reloading completely
    e.preventDefault();

    // 2. Automatically grab all inputs inside the HTML form packaging
    const formData = new FormData(this);

    // 3. Dispatch data in the background to our index.php pipeline
    fetch("index.php", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // 4. Fire the success alert on screen once SQL inputs confirm execution
        alert("Application Submitted Successfully via Secure JavaScript Pipeline!");
        
        // 5. Clear out the form inputs clean for the next entry
        admissionForm.reset();
      } else {
        alert("Something went wrong with the server connection.");
      }
    })
    .catch(error => {
      console.error("Transmission Error:", error);
      alert("Network submission failed. Check if Termux database is running.");
    });
  });
}
