// Scroll-reveal animations for the editorial theme.
// Classes are added here (not in the HTML) so content stays visible without JS.
document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;

  const targets = document.querySelectorAll(
    [
      ".post-header",
      ".post article > p",
      ".post article > h2",
      ".post article .profile",
      ".post article ol.bibliography > li",
      ".publications h2.bibliography",
      ".publications ol.bibliography > li",
      ".post-list > li",
      ".card",
    ].join(", ")
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("iia-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  let stagger = 0;
  targets.forEach((el) => {
    el.classList.add("iia-reveal");
    el.style.setProperty("--iia-reveal-delay", `${(stagger % 5) * 70}ms`);
    stagger += 1;
    observer.observe(el);
  });
});
