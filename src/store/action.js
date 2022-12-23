const baseUrl = import.meta.env.VITE_APP_BASEURL;
import axios from "axios";

export const login = () => {
  const auth = {
    "email": import.meta.env.VITE_APP_EMAIL,
    "password": import.meta.env.VITE_APP_PASSWORD
  }
  return (dispatch) => {
    fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify(auth),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
      if (resp.ok) {
        return resp.json()
      }
      else {
        throw new Error(resp)
      }
    })
    .then(data => {
      localStorage.setItem("token", data.auth_token);
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const getAllGroupTasks = () => {
  return (dispatch) => {
    return fetch(`${baseUrl}/todos`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
      if (resp.ok) return resp.json()
      else throw new Error(resp.statusText)
    })
    .then(data => {
      dispatch({
        type: "FETCH_ALL_GROUP_TODOS",
        payload: data
      })
    })
    .catch(err => console.log(err));
  }
}