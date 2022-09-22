// Menu data structure
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//task 1.0
const mainEl = document.querySelector("main");
//task 1.1
mainEl.style.backgroundColor = "var(--main-bg)";
//task 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
//task 1.3
mainEl.setAttribute("class", "flex-ctr");

//task 2.0
const topMenuEl = document.querySelector("#top-menu");
//task 2.1
topMenuEl.style.height = "100%";
//task 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//task 2.3
topMenuEl.setAttribute("class", "flex-around");

//task 3.0
//see line 2

//task 3.1
menuLinks.forEach((link) => {
  const linkEl = document.createElement("a");
  linkEl.setAttribute("href", link.href);
  linkEl.innerHTML = link.text;
  topMenuEl.append(linkEl);
});

//task 4.0
const subMenuEl = document.querySelector("#sub-menu");

//tast 4.1
subMenuEl.style.height = "100%";

//taks 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

//task 4.3
subMenuEl.setAttribute("class", "flex-around");

//task 4.4
subMenuEl.style.position = "absolute";

//task 4.5
subMenuEl.style.top = 0;

//task 5.0
//see above menuLinks

//task 5.1
let showingSubMenu = false;
const topMenuLinks = document.querySelectorAll("#top-menu > a");
//console.log(topMenuLinks)

//task 5.2
topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  topMenuLinks.forEach((link) => {
    if (e.target !== link) return;
    //console.log(link);
    //task 5.3
    if (e.target.classList.contains("active")) {
      //console.log(e.target);
      e.target.classList.remove("active");
      showingSubMenu = false;
      subMenuEl.style.top = 0;
      return;
    }
    //task 5.4
    topMenuLinks.forEach((link) => {
      //console.log(link);
      link.classList.remove("active");
    });
    //task 5.5
    if (link === e.target) link.classList.add("active");
    //task 5.6
    if (e.target.text !== "about") {
        showingSubMenu = true;
        mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
    } else {
        showingSubMenu = false;
        //task 6.4
        mainEl.innerHTML = '<h1>ABOUT</h1>'
    }
    let object = e.target
    //task 5.7 and 5.8
    const buildSubMenu = (arr) => {
        subMenuEl.textContent = ""
        arr.forEach((ele) => {
            const aTag = document.createElement('a')
            aTag.setAttribute('href', ele.href)
            aTag.textContent = ele.text
            subMenuEl.append(aTag)
        })

    };
      if (showingSubMenu === true) {
          menuLinks.forEach((ele) => {
              if (ele.text === object.text) {
                  buildSubMenu(ele.subLinks)
                  subMenuEl.style.top = '100%'
              } 
        })
      } else {
          subMenuEl.style.top = 0
    }
  });
});

//task 6.0
subMenuEl.addEventListener('click', (e) => {
    e.preventDefault()
    if (!e.target.href) return
    // task 6.1
    showingSubMenu = false
    subMenuEl.style.top = 0
    //task 6.2
    topMenuLinks.forEach((ele) => {
        ele.classList.remove('active')
    })
    //task 6.3
    mainEl.innerHTML =`<h1>${e.target.text}</h1>` 

})
