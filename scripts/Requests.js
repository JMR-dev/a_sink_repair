import { getRequests } from "./dataAccess.js"

// requests exports the requests stored in application state as requests passed in as an ordered list wrapped inside an unordered list
export const Requests = () => {
    const requests = getRequests()
    const convertRequestToListElement = (requests) => {
            return `<li>${requests.description}</li>`
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
