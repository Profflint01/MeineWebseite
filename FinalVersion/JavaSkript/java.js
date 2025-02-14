function EnableDarkTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

var typed = new Typed(".multitext", {
    strings: ["something different", "Thanks for visiting my website!", "I am profflint, a Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
    cursorChar: "|",
    cursor: true,     
});

//document.getElementById("email").autocomplete = "on";
