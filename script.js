const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {

        headers.forEach(h => {
            if (h !== header) {
                h.nextElementSibling.style.display = "none";
                h.querySelector("span").innerText = "▼";
            }
        });

        const body = header.nextElementSibling;
        const arrow = header.querySelector("span");

        if (body.style.display === "block") {
            body.style.display = "none";
            arrow.innerText = "▼";
        } else {
            body.style.display = "block";
            arrow.innerText = "▲";
        }
    });
});
