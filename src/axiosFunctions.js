import axios from "axios";
// file for axios functions


// const api = axios.create({ baseURL: "https://api.restful-api.dev/" })
const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com/" })


// GET
export const getPosts = async () => {
  return api.get("/posts")
}

// POST 
export const addPost = async (postData) => {
  return api.post("/posts", postData)
}

// PUT
export const updatePost = async (id, text) => {
  const newText = text
  return api.put(`/posts/${id}`, {
    "body": newText
  })
}

// DELETE
export const deletePost = async (id) => {
  return api.patch(`/posts/${id}`)
}
