import { moveInstrumentation } from '../../scripts/scripts.js';


export default function decorate(block) {
    const ul = document.createElement('ul');

    [...block.children].forEach((row) => {
        const li = document.createElement('li');
        moveInstrumentation(row, li);
        while (row.firstElementChild) li.append(row.firstElementChild);
        [...li.children].forEach((div) => {
          if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
          else div.className = 'cards-card-body';
        });
        ul.append(li);
      });
}