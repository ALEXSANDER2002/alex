import NextAuth from "next-auth/next";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getFunction(url) {
  try {
    const response = await axios.get(`${API_URL}/` + url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
