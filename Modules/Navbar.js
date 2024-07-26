async function nav(){
    var navbar = await fetch("Modules/navbar.html");
    var html = await navbar.text();
    document.body.insertAdjacentHTML("beforebegin",html);
}
async function foot(){
    var footer = await fetch("Modules/footer.html");
    var html = await footer.text();
    document.body.insertAdjacentHTML("afterend", html);
}
nav();
foot();