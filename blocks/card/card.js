export default function decorate(block) {

  console.log("inside card block");
  console.log(block);

  [...block.children].forEach((row) => {
    console.log("inside card block item");
    console.log(row);
  });

  const cardDiv = document.createElement('div');
  const title = cardDiv.createElement('div');
  cardDiv.className = 'card-title';


//   block.append(cardDiv);
//   block.innerHTML = blockAuthor.innerHTML;
}
