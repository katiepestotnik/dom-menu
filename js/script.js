// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
//task 1.0
const mainEl = document.querySelector('main')
//task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)'
//task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
//task 1.3
mainEl.setAttribute('class', 'flex-ctr')

//task 2.0
const topMenuEl = document.querySelector('#top-menu')
//task 2.1
topMenuEl.style.height = '100%'
//task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
//task 2.3
topMenuEl.setAttribute('class', 'flex-around')

//task 3.0
//see line 2

//task 3.1
menuLinks.forEach((link) => {
    const linkEl = document.createElement('a')
    linkEl.setAttribute('href', link.href)
    linkEl.innerHTML = link.text
    topMenuEl.append(linkEl)
})

//task 4.0
const subMenuEl = document.querySelector('#sub-menu')

//tast 4.1
subMenuEl.style.height = '100%'

//taks 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

//task 4.3
subMenuEl.setAttribute('class', 'flex-around')

//task 4.4
subMenuEl.style.position = 'absolute'

//task 4.5
subMenuEl.style.top = 0