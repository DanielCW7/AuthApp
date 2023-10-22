import axios from "axios";
// file for axios functions


const api = axios.create({ baseURL: "https://api.restful-api.dev/" })


// GET
export const getPosts = async () => {
  return api.get("/objects")
}

// POST 
export const addPost = async (postData) => {
  return api.post("/objects", postData)
}

// PUT
export const updatePost = async (postData) => {
  return api.put(`/objects/${postData?.id ?? ""}`, postData)
}

