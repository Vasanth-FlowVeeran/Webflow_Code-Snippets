/*

* Interactive Card Animation System
* Uses GSAP for smooth animations between two cards
* Each card expands on hover while hiding the other card

*/

<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

<script>
    // Select elements

    const s1Card = document.querySelector("#s1-card"); //Target the div with ID- #s1card
    const s2Card = document.querySelector("#s2-card"); //Target the div with ID- #s2card
    const s1Content = document.querySelector("#s1-content"); //Target the div with ID- #s1-content
    const s2Content = document.querySelector("#s2-content"); //Target the div with ID- #s2-content

    // Hover animation for S1 Card

    s1Card.addEventListener("mouseenter", () => {
    gsap.to(s1Card, {
        width: 1266,
        x: -70, // Push slightly to the left
        duration: 0.5,
        ease: "power2.inOut"
    });
    gsap.to(s2Card, { opacity: 0, duration: 0.3, ease: "power2.inOut" });
    gsap.to(s1Content, { opacity: 1, duration: 0.5, ease: "power2.inOut" });
});

    s1Card.addEventListener("mouseleave", () => {
    gsap.to(s1Card, {
        width: 550,
        x: 0, // Reset push
        duration: 0.5,
        ease: "power2.inOut"
    });
    gsap.to(s2Card, { opacity: 1, duration: 0.3, ease: "power2.inOut" });
    gsap.to(s1Content, { opacity: 0, duration: 0.5, ease: "power2.inOut" });
});

    // Hover animation for S2 Card
    s2Card.addEventListener("mouseenter", () => {
    gsap.to(s2Card, {
        width: 1266,
        x: -558, // Shift left by half the expansion
        duration: 0.5,
        ease: "power2.inOut"
    });
    gsap.to(s1Card, { opacity: 0, duration: 0.3, ease: "power2.inOut" });
    gsap.to(s2Content, { opacity: 1, duration: 0.5, ease: "power2.inOut" });
});

    s2Card.addEventListener("mouseleave", () => {
    gsap.to(s2Card, {
        width: 550,
        x: 0, // Reset translation
        duration: 0.5,
        ease: "power2.inOut"
    });
    gsap.to(s1Card, { opacity: 1, duration: 0.3, ease: "power2.inOut" });
    gsap.to(s2Content, { opacity: 0, duration: 0.5, ease: "power2.inOut" });
});
</script>