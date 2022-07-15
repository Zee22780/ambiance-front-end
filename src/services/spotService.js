import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/spots`

// function create(spot) {
//   return fetch(BASE_URL, {
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${tokenService.getToken()}`
//     },
//     body: spot
//   })
//   .then(res => res.json())
// }

const create = async (spot) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: spot
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export {
  create,
}