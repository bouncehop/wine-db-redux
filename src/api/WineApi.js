const url = 'https://wines-api.herokuapp.com/api/'


export const fetchRegions = async () => {
  return (await fetch(`${url}regions`)).json();
}

export const fetchWinesFrom = async (region) => {
  return (await fetch(`${url}wines?region=${region}`)).json();
}

export const fetchWineFrom = async (id) => {
  return (await fetch(`${url}wines/${id}`)).json();
}

export const likeWine = async (id) => {
  return 
}
// export function likeWine(id) {
//   return fetch(`${host}/api/wines/${id}/like`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ like: true })
//   });
// }

// export function unlikeWine(id) {
  
// }

// export function isWineLiked(id) {
  
// }
