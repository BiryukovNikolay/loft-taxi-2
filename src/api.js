export const serverLogin = async (login, password) => {
    return fetch(`https://loft-taxi.glitch.me/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": login, "password": password })
    }).then(res => res.json())
}

export const serverSaveCard = async ({cardNumber, CVC, date, name, token}) => {
    
    return fetch(`https://loft-taxi.glitch.me/card`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "cardNumber": cardNumber, "expiryDate": date, "cardName": name, "cvc": CVC, "token": token })
    }).then(res => res.json())
}