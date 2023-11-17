function showSubMenu(menuId) {
    const submenu = document.getElementById(menuId);
    if (submenu) {
        submenu.style.display = 'flex';
    }
}

function hideSubMenu(menuId) {
    const submenu = document.getElementById(menuId);
    if (submenu) {
        submenu.style.display = 'none';
    }
}

