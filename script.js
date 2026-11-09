
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. MOBILE NAVIGATION MENU
    // =====================================

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            const isOpen = navMenu.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            // Change hamburger icon
            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-bars", !isOpen);
                icon.classList.toggle("fa-xmark", isOpen);
            }
        });

        // Close menu after clicking a navigation link
        navMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            });
        });

        // Close menu with Escape key
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navMenu.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }
        });
    }


    // =====================================
    // 2. CONTACT FORM + WHATSAPP
    // =====================================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            // Check form validation
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            // Get customer details
            const name = document.getElementById("customerName").value.trim();
            const email = document.getElementById("customerEmail").value.trim();
            const service = document.getElementById("customerService").value;
            const message = document.getElementById("customerMessage").value.trim();

            // WhatsApp message
            const whatsappMessage =
                `*HELLO ROCKY!*

I need your editing service.

*NAME:* ${name}

*EMAIL:* ${email}

*SERVICE:* ${service}

*PROJECT DETAILS:*
${message}

Please contact me. Thank you!`;

            // WhatsApp number
            const phoneNumber = "918509357445";

            // Create WhatsApp URL
            const whatsappURL =
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

            // Open WhatsApp
            const whatsappWindow = window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

            // Show form status
            let formStatus = document.getElementById("formStatus");

            if (!formStatus) {

                formStatus = document.createElement("p");

                formStatus.id = "formStatus";

                formStatus.setAttribute("role", "status");

                contactForm.appendChild(formStatus);
            }

            if (whatsappWindow) {

                formStatus.textContent =
                    "WhatsApp is opening! Please press SEND to submit your inquiry.";

                formStatus.style.color = "#b794ff";

            } else {

                formStatus.textContent =
                    "WhatsApp could not open automatically. Please allow pop-ups and try again.";

                formStatus.style.color = "#ff7777";
            }

            formStatus.style.marginTop = "15px";
            formStatus.style.fontSize = "14px";

        });
    }


    // =====================================
    // 3. SMOOTH SCROLLING
    // =====================================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {

                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // =====================================
    // 4. FOOTER CURRENT YEAR
    // =====================================

    const footerYear = document.getElementById("currentYear");

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }


    // =====================================
    // 5. CONSOLE MESSAGE
    // =====================================

    console.log(
        "%c ROCKY EDITING TEMPLATES ",
        "background: #8b5cf6; color: white; font-size: 16px; padding: 10px;"
    );

    console.log("Website JavaScript loaded successfully!");

});
  
