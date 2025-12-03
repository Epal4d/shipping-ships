import { getCargoShips } from "./database.js"

const cargoShipList = () => {
    const cargoShips = getCargoShips()

    let cargoHTML = "<ul class= cargoShip>"

    for(const cargoShip of cargoShips){
        cargoHTML += `<li cargoShipId = ${cargoShip.id} haulerId = ${cargoShip.haulerId} > ${cargoShip.name}</li>`
    }
    cargoHTML += "</ul>"
}
