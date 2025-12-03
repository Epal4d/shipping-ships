const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Titan Transport", dockId: 1 },
        { id: 2, name: "Ocean Runner", dockId: 1 },
        { id: 3, name: "Steel Voyager", dockId: 2 },
        { id: 4, name: "Neptune Freight", dockId: 3 }
    ],
    cargoShips: [
        { id: 1, title: "Aurora Star", location: "East Bay Dock", maxCapacity: 5000 },
        { id: 2, title: "Crimson Tide", location: "Harborview Dock", maxCapacity: 7200 },
        { id: 3, title: "Silver Wave", location: "Sunset Dock", maxCapacity: 6100 },
        { id: 4, title: "Emerald Horizon", location: "Harborview Dock", maxCapacity: 8300 }
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