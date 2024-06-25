export default function decorate(block) {
  const cardListContainer = document.createElement("div");
  cardListContainer.classList.add("cardList-container-section");

  [...block.children].forEach((row) => {
    console.log("inside block children");
    console.log(row);
  });
  }