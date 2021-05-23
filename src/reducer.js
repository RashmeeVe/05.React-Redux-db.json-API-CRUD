import axios from "axios";
const url = "http://localhost:2000/users";

const apiData = (state = [], action) => {
  switch (action.type) {
    case "FETCH_API_DATA":
      return { ...state, data: action.data };

    case "ADD_USER":
      axios.post(url, action.data);
      return { ...state };

    case "DELETE_USER":
      axios.delete(`${url}/${action.data}`);
      return { ...state };

    case "GET_USER_DATA":
      const users = action.data;
      return { users };

    case "EDIT_USER_DATA":
      axios.put(`${url}/${action.id}`, action.data);
      return { ...state };

    default:
      return state;
  }
};
export default apiData;
