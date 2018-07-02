function openNav() {

    let nav = document.getElementById('menu-nav--principal');
    console.log(nav);

    if (nav.className === 'menu-nav--principal') {
        nav.className += ' menu-js';
        document.getElementById('threeline-icon').innerHTML = "&Cross;";
        document.getElementById('threeline-icon').style.borderBottom = "none";
    } else {
        nav.className = 'menu-nav--principal';
        document.getElementById('threeline-icon').innerHTML = "&#9776;";
        document.getElementById('threeline-icon').style.borderBottom = "border-bottom: solid #f27609 1px;";
    }
}