/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId) => {
  const toggle = document.getElementById(toggleId),
    sidebar = document.getElementById(sidebarId)

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      /* Show sidebar */
      sidebar.classList.toggle('show-sidebar')
    })
  }
}
showSidebar('header-toggle', 'sidebar')

/*=============== LINK ACTIVE ===============*/


/*=============== DARK LIGHT THEME ===============*/
