/* ==========================================================================
   METAHUB SAAS MARKETING LANDING PAGE - INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Navigation background fade on scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 2. Interactive Pricing Plan switcher (Monthly / Annual)
    const toggleButtons = document.querySelectorAll(".pricing-toggle-btn");
    const planPrices = document.querySelectorAll(".plan-card");

    const pricingData = {
        monthly: {
            starter: { price: "14.99", period: "/month", desc: "billed monthly" },
            small: { price: "29.99", period: "/month", desc: "billed monthly" },
            marketer: { price: "49.99", period: "/month", desc: "billed monthly" },
            pro: { price: "99.99", period: "/month", desc: "billed monthly" }
        },
        annual: {
            starter: { price: "12.50", period: "/month", desc: "billed annually ($149.99/yr)" },
            small: { price: "25.00", period: "/month", desc: "billed annually ($299.99/yr)" },
            marketer: { price: "41.66", period: "/month", desc: "billed annually ($499.99/yr)" },
            pro: { price: "83.33", period: "/month", desc: "billed annually ($999.99/yr)" }
        }
    };

    toggleButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Toggle active buttons
            toggleButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const mode = btn.getAttribute("data-billing");
            updatePrices(mode);
        });
    });

    function updatePrices(mode) {
        planPrices.forEach(card => {
            const planKey = card.getAttribute("data-plan");
            if (planKey && pricingData[mode][planKey]) {
                const amountEl = card.querySelector(".plan-price-amount");
                const periodEl = card.querySelector(".plan-price-period");
                const descEl = card.querySelector(".plan-billing-desc");

                // Fluid fade transition for prices
                if (amountEl && pricingData[mode][planKey]) {
                    amountEl.style.opacity = 0;
                    setTimeout(() => {
                        amountEl.textContent = pricingData[mode][planKey].price;
                        if (periodEl) periodEl.textContent = pricingData[mode][planKey].period;
                        if (descEl) descEl.textContent = pricingData[mode][planKey].desc;
                        amountEl.style.opacity = 1;
                    }, 150);
                }
            }
        });
    }

    // Add fade support styling to prices
    const prices = document.querySelectorAll(".plan-price-amount");
    prices.forEach(pr => {
        pr.style.transition = "opacity 0.2s ease";
    });

    // 3. Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                const offsetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
