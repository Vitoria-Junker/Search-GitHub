import {baseUrl, eventsQuantity} from '/src/scripts/variables.js'


async function events(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`)
    return await response.json()
}

export { events }