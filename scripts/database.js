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
    ]
}

export const getDocks = () => {
    return structuredClone(database.docks)
    // You write the code for copying the array and returning it
}

export const getHaulers = () => {
    return structuredClone(database.haulers)
}