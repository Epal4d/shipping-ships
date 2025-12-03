const database = {
    docks: [
        { id: 1, title: "East Bay Dock", location: "San Francisco", maxCapacity: 5000.0 },
        { id: 2, title: "Harborview Dock", location: "Seattle", maxCapacity: 7200.0 },
        { id: 3, title: "Sunset Dock", location: "Los Angeles", maxCapacity: 6100.0 },
        { id: 4, title: "Gulfport Dock", location: "Houston", maxCapacity: 8300.0 }
    ],
    haulers: [
        { id: 1, name: "Titan Transport", dockId: 1 },
        { id: 2, name: "Ocean Runner", dockId: 1 },
        { id: 3, name: "Steel Voyager", dockId: 2 },
        { id: 4, name: "Neptune Freight", dockId: 3 }
    ],
    cargoShips: [
        { id: 1, name: "Aurora Star", haulerId: 1 },
        { id: 2, name: "Crimson Tide", haulerId: 2 },
        { id: 3, name: "Silver Wave", haulerId: 3 },
        { id: 4, name: "Emerald Horizon", haulerId: 4 }
    ]
}

export const getDocks = () => {
    return structuredClone(database.docks)
    // You write the code for copying the array and returning it
}

export const getHaulers = () => {
    return structuredClone(database.haulers)
}

export const getCargoShips = () => {
    return structuredClone(database.cargoShips)
}