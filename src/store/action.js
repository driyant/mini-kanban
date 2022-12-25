const baseUrl = import.meta.env.VITE_APP_BASEURL;

const sortByLatestTask = (data) => {
  let result = [];
  for (let i = data.length - 1; i >= 0; i--) {
    result.push(data[i]);
  }
  return result;
};

export const login = () => {
  const auth = {
    email: import.meta.env.VITE_APP_EMAIL,
    password: import.meta.env.VITE_APP_PASSWORD,
  };
  return (dispatch) => {
    fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify(auth),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error(resp);
        }
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchTaskItemGroup1 = () => {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/todos/1/items`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        const payload = sortByLatestTask(data);
        dispatch({
          type: "FETCH_ITEM_1",
          payload,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const fetchTaskItemGroup2 = () => {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/todos/2/items`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        const payload = sortByLatestTask(data);
        dispatch({
          type: "FETCH_ITEM_2",
          payload,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const fetchTaskItemGroup3 = () => {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/todos/3/items`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        const payload = sortByLatestTask(data);
        dispatch({
          type: "FETCH_ITEM_3",
          payload,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const fetchTaskItemGroup4 = () => {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/todos/4/items`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        const payload = sortByLatestTask(data);
        dispatch({
          type: "FETCH_ITEM_4",
          payload,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const createTask = (id, data) => {
  return (dispatch) => {
    return fetch(
      `https://todo-api-18-140-52-65.rakamin.com/todos/${id}/items`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((resp) => resp);
  };
};

export const deleteTaskItem = (itemId, todoId) => {
  return (dispatch) => {
    return fetch(`https://todo-api-18-140-52-65.rakamin.com/todos/${todoId}/items/${itemId}`, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      }
    })
    .then(resp => resp);
  }
}

export const getSingeItem = (itemId, todoId) => {
  return (dispatch) => {
    return fetch(`https://todo-api-18-140-52-65.rakamin.com/todos/${todoId}/items/${itemId}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    .then(resp => resp.json())
    .then(data => {
      dispatch({
        type: "GET_SINGLE_ITEM",
        payload: data
      })
      return data
    })
  }
}

export const updateSingleItem = (itemId, todoId, taskname) => {
  return (dispatch) => {
    return fetch(`https://todo-api-18-140-52-65.rakamin.com/todos/${todoId}/items/${itemId}`, {
      method: "PATCH",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "target_todo_id": +todoId,
        "name": taskname
      })
    })
    .then(resp => resp)
  }
}