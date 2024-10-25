const menu = document.getElementById("menu-icon");
const body = document.body;
const header = document.getElementById("header");

menu.addEventListener("click", () => {
    
    if (!document.getElementById("menuButton")) {
        header.insertAdjacentHTML("beforeend", `
            <div class="menu-button" id="menuButton">
                <div class="menu-wrapper">
                    <div class="icon-menu-close-div">
                        <img src="icon-menu-close.svg" class="icon-menu-close" id="closeMenu">
                    </div>
                    <nav class="mobile-nav">
                        <ul>
                            <li>Home</li>
                            <li>New</li>
                            <li>Popular</li>
                            <li>Trending</li>
                            <li>Categories</li>
                        </ul>
                    </nav>
                </div>
            </div>
        `);
    }

    if (!document.getElementById("overlay")) {
        body.insertAdjacentHTML("beforeend", `
            <div class="overlay" id="overlay"></div>
        `);
    }

    document.getElementById("closeMenu").addEventListener("click", closeMenu);
    document.getElementById("overlay").addEventListener("click", closeMenu);
});


function closeMenu() {
    const menuButton = document.getElementById("menuButton"); 
    const overlay = document.getElementById("overlay");
    
    if (menuButton) {
        menuButton.remove(); 
    }
    if (overlay) {
        overlay.remove(); 
    }
}
