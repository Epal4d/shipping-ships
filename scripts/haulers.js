import { getHaulers } from "./database.js";

haulers = getHaulers()

export const haulerList = () => {
    let haulerHTML = "<ul class= haulers>"

    haulers = getHaulers()

    for (const hauler of haulers ) {
        haulerHTML += `<li hauler-id= "${hauler.id}">${hauler.name}</li>`
    }
    haulerHTML += "</ul>"
return haulerHTML
}