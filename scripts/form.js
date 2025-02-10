/* Array of objects called products, 
I will use this provided code to load it into the DOM.*/

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  /*When the DOM is fully loaded, this code populates the product dropdown menu.
  For each product in the products array, an <option> element is created and added
    to the <select> element with the id "product".*/

  document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  });
  
  /* If the current page is "review.html", this code increments a review counter stored in
    localStorage. The counter tracks the total number of reviews submitted. After incrementing,
    a message displaying the total number of reviews is added inside the <main> element.*/

if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    document.addEventListener("DOMContentLoaded", () => {
        const reviewCountDisplay = document.createElement("p");
        reviewCountDisplay.textContent = `Total Reviews Submitted: ${reviewCount}`;
        document.querySelector("main").appendChild(reviewCountDisplay); // Agrega el mensaje dentro del main
    });
}
  

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;