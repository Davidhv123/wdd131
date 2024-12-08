
// Time
const paragraph = document.querySelector(".modi");
const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const hours = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

paragraph.innerHTML = `<span> Last Modification: ${month}/${day}/${year} ${hours}:${min}:${sec}</span>`


// FORM - Product select

const products = [
  {
    id: "1",
    name: "laptop",
    averagerating: 4.5
  },
  {
    id: "2",
    name: "Phone",
    averagerating: 4.0
  },
  {
    id: "3",
    name: "Tablet",
    averagerating: 2.0
  },
  {
    id: "4",
    name: "TV",
    averagerating: 2.5
  },
  {
    id: "5",
    name: "Keyboard",
    averagerating: 5.0
  }
];
 
const selectElement = document.getElementById("productSelect");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  selectElement.appendChild(option);
});