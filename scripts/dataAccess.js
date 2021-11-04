const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

export const getRequests = () => {
    return database.serviceRequest.map(serviceRequest => ({...serviceRequest}))
}

export const getEmployees = () => {
    return database.employeeTable.map(employee => ({...employee}))
}

export const getJobTable = () => {
    return database.jobTable.map(job => ({...job}))
}

// Need copies of permanent state set as empty arrays, matching the keys in your JSON file


const serviceRequest = []
const employeeTable = []
const jobTable = []
const requests = []

const appState = []