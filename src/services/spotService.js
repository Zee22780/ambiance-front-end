import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/spots`

function create(spot) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: spot
  })
  .then(res => res.json())
}

export {
  create,
}