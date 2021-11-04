const API = "http://localhost:8088"

const applicationState = {
    serviceRequests: [],
    employeeTable:[],
    jobTable: []
}

export const fetchRequests = () => {
    return fetch(`${API}/serviceRequests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state of  in application state
                applicationState.serviceRequests = serviceRequests
            }
        )
}

export const fetchJobTable = () => {
    return fetch(`${API}/jobTable`)
        .then(response => response.json())
        .then(
            (jobTable) => {
                // Stores the external state of jobTable in application state
                applicationState.jobTable = jobTable
            }
        )
}

export const fetchEmpTable = () => {
    return fetch(`${API}/employeeTable`)
        .then(response => response.json())
        .then(
            (employeeTable) => {
                // Stores the external state of jobTable in application state
                applicationState.employeeTable = employeeTable
            }
        )
}
export const getRequests = () => {
    return applicationState.serviceRequests.map(serviceRequest => ({...serviceRequest}))
}

export const getEmployees = () => {
    return applicationState.employeeTable.map(employee => ({...employee}))
}

export const getJobTable = () => {
    return applicationState.jobTable.map(job => ({...job}))
}

// Need copies of permanent state set as empty arrays, matching the keys in your JSON file