export default function decorate(block) {

  console.log("inside card block");
  console.log(block);
  const cardDiv = document.createElement('div');
  const title = cardDiv.createElement('div');
  div.className = 'card-title';
  block.append(cardDiv);
  block.innerHTML = blockAuthor.innerHTML;
}
