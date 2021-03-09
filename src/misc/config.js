const apiBaseUrl = "https://api.tvmaze.com"
export async function apiGet(queryString) {
    const response = await fetch(`${apiBaseUrl}${queryString}`)
    .then(r => r.json())
    return response}
