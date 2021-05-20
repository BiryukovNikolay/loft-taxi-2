export const serverLogin = async (login, password) => {
    return fetch(
        `https://loft-taxi.glitch.me/auth?username=${login}&password=${password}`
    ).then(res => res.json()).then(data => data.success)
}