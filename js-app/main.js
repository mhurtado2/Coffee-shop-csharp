const url = "https://localhost:44303/api/beanvariety/";


function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

const button = document.querySelector("#bean-button");
const beanVarietyList = document.querySelector("#bean-variety-list");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            const beanVarietyHTML = beanVarieties.map(beanVariety => {
                return `
                    <li>
                        <h2>${beanVariety.name}</h2>
                        <p>Region: ${beanVariety.region}</p>
                        <p>Notes: ${beanVariety.notes ? beanVariety.notes : '-'}</p>
                    </li>
                `;
            }).join("");

            beanVarietyList.innerHTML = beanVarietyHTML;
        })
});



//new form stuff
const newFormContainer = document.querySelector("#addBean");

function sendBean (userServiceRequest) {
    const fetchOptions = {

    }
}

const AddBean = () => {
    let html = `
    <div class="field">
        <label class="label" for="bvName">Name</label>
        <label type="text" name="bvName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="bvRegion">Region</label>
        <label type="text" name="bvRegion" class="input" />
    </div>
    <div class="field">
        <label class="label" for="bvNotes">Name</label>
        <label type="text" name="bvNotes" class="input" />
    </div>

    <button class="button" id="submitBean"> Add a Bean Variety</button>
    `
    return html

}

beanFormContainer.innerHtml = AddBean();
const beanButton = document.querySelector("#submitBean");

beanButton.addEventListener







const coffeeUrl = "https://localhost:44303/api/coffee/";

function getAllCoffee() {
    return fetch(coffeeUrl).then(resp => resp.json());
}
const coffeeButton = document.querySelector("#coffee-button");
const coffeeList = document.querySelector("#coffee-list");
coffeeButton.addEventListener("click", () => {
    getAllCoffee()
        .then(coffees => {
            const coffeeListHtml = coffees.map(coffee => {
                return `
                <li>
                    <h2>${coffee.title}</h2>
                    <p>${coffee.beanVariety.name}</p>
                </li>
                `;
            }).join("");
            coffeeList.innerHTML = coffeeListHtml;
        })
})