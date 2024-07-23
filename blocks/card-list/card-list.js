// import {fetchPlaceholders} from '../../scripts/aem.js';

export default function decorate(block) {
  // const placeholders = fetchPlaceholders("en");
  // placeholders.forEach((row) => {
  //   console.log("inside placeholder block")
  //   console.log(row);
  // });
  const cardListContainer = document.createElement("div");
  cardListContainer.classList.add("cardList-container-section");

  [...block.children].forEach((row) => {
    console.log("inside block children");
    console.log(row);
  });
  }