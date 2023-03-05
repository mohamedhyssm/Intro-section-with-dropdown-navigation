// 2 links collapse
let arrowAnchor = <HTMLAnchorElement[]> Array.from(document.querySelectorAll(".arrowAnchor")),
  svgArrowArray = <SVGAElement[]> Array.from(document.querySelectorAll(".svgArrow")),
  featuresMenu = <HTMLUListElement> document.querySelector(".features-menu ul"),
  featuresMenuChidren = <HTMLUListElement[]>Array.from(featuresMenu.children),
  companyMenu = <HTMLUListElement> document.querySelector(".company-menu ul"),
  companyMenuChildren = <HTMLUListElement[]>Array.from(companyMenu.children)

// image and br to be responsive in mobile
let heroImage = <HTMLImageElement>document.getElementById("heroImage"),
  brEl = <HTMLBRElement>document.getElementById("brEl");


// svg inner
const arrowUpInner = `<path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>`,
  arrowDownInner = `<path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/>`,
  iconCloseMenuInner = `<g fill="#151515" fill-rule="evenodd"><path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z"/><path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z"/></g>`,
  iconMenuInner = `<g fill="#151515" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g>`;

// navLinks and his icon to be responsive in mobile
let navLinks = <HTMLDivElement>document.getElementById("navLinks"),
  menuIconLinks = <HTMLDivElement>document.getElementById("menuIconLinks"),
  overLay = <HTMLDivElement>document.getElementById("overLay");

  overLay.onclick = function() {
    menuIconLinks.dataset.icon = "open";
    menuIconLinks.innerHTML = iconMenuInner;
    menuIconLinks.setAttribute("style", `width: 32px; height: 18px;`);
    navLinks.classList.remove("active");
    overLay.classList.remove("active");
  }

  menuIconLinks.onclick = function () {
    if (menuIconLinks.dataset.icon === "open") {
      menuIconLinks.dataset.icon = "close";
      menuIconLinks.innerHTML = iconCloseMenuInner;
      menuIconLinks.setAttribute("style", `width: 26px; height: 26px;`);
  }
  else {
    menuIconLinks.dataset.icon = "open";
    menuIconLinks.innerHTML = iconMenuInner;
    menuIconLinks.setAttribute("style", `width: 32px; height: 18px;`);
  }
  navLinks.classList.toggle("active");
  overLay.classList.toggle("active");
}

window.onresize = () => {
  if (window.innerWidth <= 767) {
    heroImage.src = "images/image-hero-mobile.png";
    brEl.style.display = "none";
  }
  else {
    heroImage.src = "images/image-hero-desktop.png";
    brEl.style.display = "block";
  }
}

if (window.innerWidth <= 767) {
  heroImage.src = "images/image-hero-mobile.png";
  brEl.style.display = "none";
}

mouseClickCollapse(featuresMenu, featuresMenu, featuresMenuChidren, 0);
mouseClickCollapse(companyMenu, companyMenu, companyMenuChildren, 1);

function mouseClickCollapse(ulList: HTMLUListElement , menu: HTMLUListElement,menuChlidren: HTMLUListElement[], idx: number) {
  let anchor = arrowAnchor[idx],
    svg = svgArrowArray[idx]
  anchor.addEventListener("click", () => {
    anchor.classList.toggle("active")
    if (anchor.dataset.arrow === "down") {
      anchor.dataset.arrow = "up";
      svg.innerHTML = arrowDownInner;
    }
    else {
      anchor.dataset.arrow = "down";
      svg.innerHTML = arrowUpInner;
    }
    ulList.classList.toggle("active");
  })
  menuChlidren.forEach(li => {
    li.addEventListener("click", () => {
      anchor.classList.remove("active");
      svg.innerHTML = arrowUpInner;
      menu.classList.remove("active");
    })
  })
}
