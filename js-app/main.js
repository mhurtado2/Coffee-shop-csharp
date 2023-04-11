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
const beanFormContainer = document.querySelector("#addBean");

function sendBean (userServiceRequest) {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    return fetch(url, fetchOptions).then(resp => resp.json()).then(addedBean => {
        console.log(addedBean)
    })
}

const AddBean = () => {
    let html = `
    <div class="field">
        <label class="label" for="bvName">Name</label>
        <input type="text" name="bvName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="bvRegion">Region</label>
        <input type="text" name="bvRegion" class="input" />
    </div>
    <div class="field">
        <label class="label" for="bvNotes">Notes</label>
        <input type="text" name="bvNotes" class="input" />
    </div>

    <button class="button" id="submitBean"> Add a Bean Variety</button>
    `
    return html

}

beanFormContainer.innerHTML = AddBean();
const beanButton = document.querySelector("#submitBean");

beanButton.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "submitBean") {
        //get what was typed in by user
        const beanName = document.querySelector("input[name='bvName']").value
        const beanRegion = document.querySelector("input[name='bvRegion']").value
        const beanNotes = document.querySelector("input[name='bvNotes']").value

        //make an object out of user data 
        const beanToSendToAPI = {
            name: beanName,
            region: beanRegion,
            notes: beanNotes
        }

        //send to spi
        sendBean(beanToSendToAPI);
    }
})



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