import {fetchPlaceholders} from '../../scripts/aem.js';
import {sf} from '../../scripts/constants.js';


export default async function decorate(block) {
    console.log("inside the test block");
    const { sf } = await fetchPlaceholders()
    // const placeholders = await fetchPlaceholders();
    console.log(placeholders);
    console.log("this is placeholder end");
    // placeholders.forEach((row) => {
    //   console.log("inside placeholder block")
    //   console.log(row);
    // });


    console.log(block.parentElement.parentElement);
    console.log("hello--------");
    const titleElement = block.querySelector('div:nth-child(1) > p');
    const title = titleElement.textContent.trim();


    const descriptionElement = block.querySelector('div:nth-child(2) > ol');

    console.log(descriptionElement);

    block.parentElement.classList.add("parent_test");
    // block.innerHTML = `
    //     <div class="test">
    //         <h2>${title}</h2>
    //          ${descriptionElement}
    //     </div>
    // `;
    }