  const dropdownCategoriesBtns = document.querySelectorAll('.dropdown-categories-btn');
  const dropdownMenuSubcategoriesMainCont =  document.querySelectorAll('.dropdown-sub-categories-main-cont');

  const firstDropdown = document.querySelector(".dropdown-menu-categories") //prvi cont
  const secondDropdown = document.querySelectorAll(".dropdown-sub-categories-main-cont");// druge/subkategorije
  const subcategorysNames = document.querySelectorAll("[data-subcategory-name]") //imena subkategorija

  const lastDropdown = document.querySelectorAll(".last-categorys-ul") //zadnje kategorije

  const userAccountDiv = document.querySelector(".user-account-section-dropdown")
  const openHambiMenu = document.querySelector(".hamburger-cont");
  const closeHambiMenu = document.querySelector(".close-hamb-menu");
  const originalUserAccountContent = userAccountDiv.innerHTML;


  const dropdownSubSubcategorys = document.querySelectorAll(".dropdownp-sub-sub");

 

  

openHambiMenu.addEventListener("click", () => {
    firstDropdown.classList.add("show")
   
});
closeHambiMenu.addEventListener("click", () => {
  firstDropdown.classList.remove("show");
 
});


dropdownCategoriesBtns.forEach((li, index) => {
  li.addEventListener('click', () => {
      secondDropdown.forEach((secondCategory, liIndex) => {
          if (index === liIndex) {
              secondCategory.classList.toggle("show");
              userAccountDiv.textContent =" < " + li.textContent;
              userAccountDiv.classList.add("backbtnItems");
          }

  

    userAccountDiv.addEventListener("click", () => {
          secondCategory.classList.remove("show");
          // subcategorysNames[ulIndex].classList.remove("show")
          userAccountDiv.innerHTML = originalUserAccountContent;
          
      });

          
      });

      closeHambiMenu.addEventListener("click", () => {
        secondDropdown.forEach(secondCategory => {
            secondCategory.classList.remove("show");
            userAccountDiv.innerHTML = originalUserAccountContent;
          });
      });
  });
});
  

    
    
 
//  subcategorysNames.forEach((span, index) => {
//   span.addEventListener("click", () => {   
//     lastDropdown.forEach((ul ,ulIndex ) => {
//       if(index === ulIndex ) {
//         ul.classList.add("show");
//          userAccountDiv.innerHTML = ` <  ${subcategorysNames[index].innerHTML}` 
//         userAccountDiv.addEventListener("click", () => {
        
//           ul.classList.remove("show")
          
          
//       });
        
//       }

//     })
//   })
// });
subcategorysNames.forEach((span, index) => {
  span.addEventListener("click", () => {
    for (let ulIndex = 0; ulIndex < lastDropdown.length; ulIndex++) {
      if (index === ulIndex) {
        lastDropdown[ulIndex].classList.add("show");
        userAccountDiv.innerHTML = ` <  ${subcategorysNames[index].innerHTML}`;
        
        userAccountDiv.addEventListener("click", () => {
          lastDropdown[ulIndex].classList.remove("show");
        });
      }
    }
  });
});
