import { FETCH_VENUES, NEW_VENUE, EDIT_VENUE, DELETE_VENUE } from './types'

export const fetchVenues = () => (dispatch) => {
  fetch('http://localhost:3000/api/v1/venues')
  .then(res => res.json())
  .then(venues => dispatch({
    type: FETCH_VENUES,
    payload: venues
  }))
}

export const createVenue = (venueData) => (dispatch) => {
  fetch('http://localhost:3000/api/v1/venues',{
    method:'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(venueData)
  })
  .then(res => res.json())
  .then(venue => dispatch({
    type: NEW_VENUE,
    payload: venue
  }))

}

export const editVenue = (venueData) => (dispatch) => {
  fetch(`http://localhost:3000/api/v1/venues/${venueData.id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(venueData)
  })
  .then(res => res.json())
  .then( venue => dispatch({
    type: EDIT_VENUE,
    payload: venue
  }))
}

export const deleteVenue = (id) => (dispatch) => (
  fetch( `http://localhost:3000/api/v1/venues/${id}`,{
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(venue => {
    return dispatch({
      type: DELETE_VENUE,
      payload: venue.venueId
  })})
)
