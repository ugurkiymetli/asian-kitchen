const menu = [{
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Tom Yum",
    category: "Thailand",
    price: 4.99,
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-879498_11-997c56f.jpg?quality=90&webp=true&resize=300,272",
    desc: `An authentic and deliciously nourishing clear Thai broth with seafood and big bold flavours.`,
  },
  {
    id: 11,
    title: "Suki",
    category: "Thailand",
    price: 5.99,
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2021/05/Thai-suki-07d1b22.jpg?quality=90&webp=true&resize=300,272",
    desc: `A classic noodle with pork, rice noodles, vegetables and suki sauce.`,
  },
  {
    id: 12,
    title: "Pad See Ew",
    category: "Thailand",
    price: 3.99,
    img: "https://migrationology.smugmug.com/Thai-Recipes/i-DjHzKdb/0/XL/thai-omelet-recipe-12-XL.jpg",
    desc: "Wide rice noodles, cooked with meat, egg, and seasoned with soy sauce and a sprinkle of pepper."
  },
];

//find html dom
let menuDOM = document.querySelector('.section-center');
let buttonDOM = document.querySelector('.btn-container')

// first finds distinct categories, then creates buttons for those categories than adds click eventListener to them. then sorts array and then renders menu.
function categorySort() {
  const categories = [...new Set(menu.map(item => item.category))]
  categories.unshift('All')
  let categoryButtons = "";
  for (const category of categories) {
    categoryButtons += `<button class="btn btn-outline-dark btn-item" data-id="${category}">${category}</button>`;
  }
  buttonDOM.innerHTML = categoryButtons
  const sortButtonsDOM = document.querySelectorAll('.btn-item')
  sortButtonsDOM.forEach(button => {
    button.addEventListener('click', function sort() {
      const category = this.getAttribute('data-id')
      const menuCategory = menu.filter(menuItem => {
        if (menuItem.category == category) {
          return menuItem
        }
      });
      category == 'All' ? renderMenu(menu) : renderMenu(menuCategory)
    })
  });
}
// gets each item from the menu or sorted menu array, creates div elements and puts the info in it.
function renderMenu(menu) {
  menuDOM.innerHTML = "";
  menu.forEach(element => {
    var menuItemDOM = document.createElement('div')
    menuItemDOM.classList.add("menu-items", "col-lg-6", "col-sm-12")
    menuItemDOM.innerHTML = `
    <img
    src="${element.img}"
    alt="${element.title}" class="photo">
    <div class="menu-info">
        <div class="menu-title">
            <h4>${element.title}</h4>
            <h4 class="price">${element.price}</h4>
        </div>
        <div class="menu-text">
            ${element.desc}
        </div>
    </div>
    `;
    menuDOM.append(menuItemDOM);
  });
}

renderMenu(menu)
categorySort()