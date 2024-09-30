const sltTema = document.getElementById("sltTema");

sltTema.addEventListener("change", function() {
    const tema = sltTema.value;

    if (tema === "claro") {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
    } else if (tema === "escuro") {
        document.body.style.backgroundColor = "#333333";
        document.body.style.color = "#ffffff";
    }
});