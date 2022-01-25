function main() {
    $("h2").click(function() {
        $(this).next().hide();
    });
}

window.addEventListener("load", main);