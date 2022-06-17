var link = document.getElementById('link');
//change the href attribute to www.google.com when hover
link.onmouseover = () => link.setAttribute("href", "https://www.google.com");
//change the href attribute to www.google.com when not hover
link.onmouseout = () => link.setAttribute("href", "https://www.google.com"); 
//change the href attribute to ex.html when right click
link.oncontextmenu = () => link.setAttribute("href", "./ex.html");
//change the href attribute to ex.html when left click
link.onclick = () => link.setAttribute("href", "./ex.html");
//change the href attribute to ex.html when middle click
link.onmousedown = () => link.setAttribute("href", "./ex.html");

//turn of context menu
link.oncontextmenu = () => false;
