export const serverLogin = async (login, password) => {
    return fetch(`https://loft-taxi.glitch.me/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": login, "password": password })
    }).then(res => res.json())
}