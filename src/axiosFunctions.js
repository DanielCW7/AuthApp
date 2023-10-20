import axios from "axios";
// file for axios functions


const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" })


// GET
export const getUsers = async () => {
  return api.get("/users")
   
}

// POST 
export const postUsers = async (userData) => {
    return api.post("/user", userData)
}

