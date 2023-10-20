import axios from "axios";
// file for axios functions


const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" })


// GET
export const getPosts = async () => {
  return api.get("/posts")
}

// POST 
export const addPost = async (postData) => {
    return api.post("/posts", postData)
}

