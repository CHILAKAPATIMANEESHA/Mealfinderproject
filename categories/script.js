// const API_CATEGORIES = "https://www.themealdb.com/api/json/v1/1/categories.php";
// const API_FILTER = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
// const categoriesDiv = document.getElementById("categories");
// const mealsDiv = document.getElementById("meals");
// const menuIcon = document.querySelector(".menu-icon");
// const menuList = document.getElementById("menuList");


// menuIcon.addEventListener("click", () => {
//   menuList.style.display = menuList.style.display === "block" ? "none" : "block";
// });


// const closeMenu = document.querySelector(".close-menu");
// closeMenu.addEventListener("click", () => { menuList.style.display = "none"; });


// const categoryPages = {
//   beef: "beef.html",
//   chicken: "chicken.html",
//   dessert: "dessert.html",
//   lamb: "Lamba.html",
//   pasta: "pasta.html",
//   pork: "pork.html",
//   seafood: "seafood.html",
//   side: "side.html",
//   vegan: "vegan.html",
//   vegetarian: "vegeterian.html",
//   breakfast: "breakfast.html",
//   goat: "goat.html"
// }
// fetch(API_CATEGORIES)
//   .then(res => res.json())
//   .then(data => {
//     categoriesDiv.innerHTML = "";
//     data.categories.forEach(cat => {
//       const div = document.createElement("div");
//       div.classList.add("card");
//       div.innerHTML = `
//         <img src="${cat.strCategoryThumb}" alt="${cat.strCategory}">
//         <div class="tag">${cat.strCategory}</div>
//       `;

      
//       div.addEventListener("click", () => {
//         const page = categoryPages[cat.strCategory.toLowerCase()];
//         if(page) {
//           window.location.href = page; 
//         } else {
//           fetchMealsByCategory(cat.strCategory); 
//         }
//       });

//       categoriesDiv.appendChild(div);
//     });
//   });


// function fetchMealsByCategory(category) {
//   fetch(API_FILTER + category)
//     .then(res => res.json())
//     .then(data => {
//       mealsDiv.innerHTML = "";
//       data.meals.forEach(meal => {
//         const div = document.createElement("div");
//         div.classList.add("card");
//         div.innerHTML = `
//           <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
//           <h4>${meal.strMeal}</h4>
//         `;
//         mealsDiv.appendChild(div);
//       });
//     });
// }


// document.getElementById("searchBtn").addEventListener("click", () => {
//   let query = document.getElementById("searchInput").value.trim();
//   const mealsTitle = document.getElementById("meals-title"); 
//   const resultDiv = document.getElementById("search-result");

//   if (query === "") {
//     alert("Please enter a recipe name!");
//     return;
//   }

//   document.getElementById("searchBtn").addEventListener("click", () => {
//   let query = document.getElementById("searchInput").value.trim();
//   const mealsTitle = document.getElementById("meals-title"); 
//   const resultDiv = document.getElementById("search-result");

//   if (query === "") {
//     alert("Please enter a recipe name!");
//     return;
//   }

//   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
//     .then(res => res.json())
//     .then(data => {
//       resultDiv.innerHTML = "";

//       if (data.meals) {
//         mealsTitle.style.display = "block";  
//         data.meals.forEach(meal => {
//           const mealCard = document.createElement("div");
//           mealCard.classList.add("meal-card");
//           mealCard.innerHTML = `
//             <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width:100%; border-radius:10px;">
//             <h3>${meal.strMeal}</h3>
//             <p><b>Category:</b> ${meal.strCategory}</p>
//             <p><b>Area:</b> ${meal.strArea}</p>
//           `;

  
//           mealCard.addEventListener("click", () => {
//             window.location.href = `mealDetails.html?id=${meal.idMeal}`;
//           });

//           resultDiv.appendChild(mealCard);
//         });
//       } else {
//         mealsTitle.style.display = "none";  
//         resultDiv.innerHTML = `<p>No recipe found for "${query}".</p>`;
//       }
//     })
//     .catch(err => console.error("Error fetching data:", err));
// });

const API_CATEGORIES = "https://www.themealdb.com/api/json/v1/1/categories.php";
const API_FILTER = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
const categoriesDiv = document.getElementById("categories");
const mealsDiv = document.getElementById("meals");
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.getElementById("menuList");

// Toggle menu
menuIcon.addEventListener("click", () => {
  menuList.style.display = menuList.style.display === "block" ? "none" : "block";
});

const closeMenu = document.querySelector(".close-menu");
closeMenu.addEventListener("click", () => { menuList.style.display = "none"; });
// Mapping categories to pages
const categoryPages = {
  beef: "beef.html",
  chicken: "chicken.html",
  dessert: "dessert.html",
  lamb: "Lamba.html",
  pasta: "pasta.html",
  pork: "pork.html",
  seafood: "seafood.html",
  side: "side.html",
  vegan: "vegan.html",
  vegetarian: "vegeterian.html",
  breakfast: "breakfast.html",
  goat: "goat.html"
};

// Fetch categories
fetch(API_CATEGORIES)
  .then(res => res.json())
  .then(data => {
    categoriesDiv.innerHTML = "";
    data.categories.forEach(cat => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
        <img src="${cat.strCategoryThumb}" alt="${cat.strCategory}">
        <div class="tag">${cat.strCategory}</div>
      `;

      // Click: navigate to page if exists, else fetch meals
      div.addEventListener("click", () => {
        const page = categoryPages[cat.strCategory.toLowerCase()];
        if (page) {
          window.location.href = page;
        } else {
          fetchMealsByCategory(cat.strCategory);
        }
      });

      categoriesDiv.appendChild(div);
    });
  });

// Fetch meals by category
function fetchMealsByCategory(category) {
  fetch(API_FILTER + category)
    .then(res => res.json())
    .then(data => {
      mealsDiv.innerHTML = "";
      data.meals.forEach(meal => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <h4>${meal.strMeal}</h4>
        `;
        mealsDiv.appendChild(div);
      });
    });
}

