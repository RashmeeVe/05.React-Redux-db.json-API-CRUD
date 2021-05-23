const url = "http://localhost:2000/users";

export const fetchAPIdata = () => (dispatch) => {
  fetch(url).then((data) => {
    data.json().then((apiData) => {
      return dispatch({
        type: "FETCH_API_DATA",
        data: apiData,
      });
    });
  });
};

export const addUserData = (user) => (dispatch) => {
  // console.log("addUserData==>", user);
  return dispatch({
    type: "ADD_USER",
    data: user,
  });
};

export const deleteUser = (id) => (dispatch) => {
  // console.log("addUserData==>", user);
  return dispatch({
    type: "DELETE_USER",
    data: id,
  });
};

export const getUserData = (id) => (dispatch) => {
  fetch(`${url}/${id}`).then((data) => {
    data.json().then((userData) => {
      return dispatch({
        type: "GET_USER_DATA",
        data: userData,
      });
    });
  });
};

export const editUserData = (user, id) => (dispatch) => {
  return dispatch({
    type: "EDIT_USER_DATA",
    data: user,
    id: id,
  });
};
