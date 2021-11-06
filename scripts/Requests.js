import { getRequests, deleteRequest } from "./dataAccess.js"

// requests exports the requests stored in application state as requests passed in as an ordered list wrapped inside an unordered list
export const Requests = () => {
    const requests = getRequests()
    const convertRequestToListElement = (requests) => {
        return `
        <li>
            ${requests.description}
            <button class="request__delete"
                    id="request--${requests.id}">
                Delete
            </button>
        </li>
    `    
    }
    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            } 
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

