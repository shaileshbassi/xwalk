export default function decorate(block) {
    console.log("inside the test block");
    const titleElement = block.querySelector('div:nth-child(1) > p');
    const title = titleElement.textContent.trim();


    const descriptionElement = block.querySelector('div:nth-child(1) > ol');

    console.log(block);

    block.parentElement.classList.add("parent_test");
    block.innerHTML = `
        <div class="test">
            <h2>${title}</h2>
             ${descriptionElement}
        </div>
    `;
    }