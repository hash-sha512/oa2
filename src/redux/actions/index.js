import {
    FETCH_INFO_BEGIN,
    FETCH_INFO_SUCCESS,
    FETCH_INFO_FAILURE,
    NEW_COUNTRY
    } from './actionTypes.js';


export function newCountry(country){
    return(
      {
        type: NEW_COUNTRY,
        payload: country
      }
    )
  }

export const fetchInfoBegin = () => ({
    type: FETCH_INFO_BEGIN
  });
  
export const fetchInfoSuccess = info => ({
    type: FETCH_INFO_SUCCESS,
    payload:  info  
  });
  
export const fetchInfoFailure = error => ({
    type: FETCH_INFO_FAILURE,
    payload: { error } //ES6 syntax
  });


export function fetchRegionalInfo(country) {
    return function(dispatch, getState) {
        dispatch(fetchInfoBegin());
        return fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
            //handler coz fetch API wont natively trigger catch block on 4xx, 5xx responses
            .then(handleErrors)
            .then(res => res.json())
            .then(values => {
                dispatch(fetchInfoSuccess(values));
                return values;
              })
            .catch(error => dispatch(fetchInfoFailure(error)))
    }
} 


function handleErrors(res) {
    if (!res.ok) throw new Error(res.error);
    return(res);
}