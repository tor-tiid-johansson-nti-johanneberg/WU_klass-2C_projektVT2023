const burger = document.getElementById('burger')
const linkList = document.getElementById('link_list')
const h1 = document.getElementById('h1_index')

function toggleMenu() {
    linkList.classList.toggle('link_list_visible')
    h1.classList.toggle('h1_index_shift_right')
    burger.classList.toggle('burger_in_x_form')
}


burger.addEventListener('click', toggleMenu)