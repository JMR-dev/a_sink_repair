const database = {
    // all data is presently seed data
    serviceRequest : [
        {
        id: null,
        description: "some description",
        serviceAddress: "some address",
        spendingLimit: 9999,
        jobDeadline: "01/01/2022"
        }
],
    
    employeeTable : [
        {
            id: null,
            empName: "John Doe"
        }
    ],
    jobTable : [
        {
        id: null,
        serviceRequestId: 1,
        employeeId: 1,
        jobStatusComplete: false 
        },
    ],
    transientState: {}
}