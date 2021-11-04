const API = "http://localhost:8088"

const applicationState = {}

export const fetchRequests = () => {
    return fetch(`${API}/serviceRequests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state of  in application state
                applicationState.requests = serviceRequests
            }
        )
}

export const fetchJobTable = () => {
    return fetch(`${API}/jobTable`)
        .then(response => response.json())
        .then(
            (jobTable) => {
                // Stores the external state of jobTable in application state
                applicationState.requests = jobTable
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


export const serviceRequest = []
export const employeeTable = []
export const jobTable = []
export const requests = []

// misc application state, if needed?
export const appState = []