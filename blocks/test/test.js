export default function decorate(block) {
    console.log("inside the test block");
    console.log(block);
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