import axios from "axios"

export const BASE_URL = 'https://movienew.cybersoft.edu.vn'

export const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MCIsIkhldEhhblN0cmluZyI6IjEwLzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDMwNDAwMDAwMCIsIm5iZiI6MTY2NTY4MDQwMCwiZXhwIjoxNjk0NDUxNjAwfQ.sBqNvFEzAEqAZuxinnH_gzedfmLxPTf7WONjIlV-Q7U'

export const configHeaders = () => { 
    return {
        TokenCybersoft: TOKEN_CYBERSOFT,
    }
 }

 export const https = axios.create({
    baseURL: BASE_URL,
    headers: configHeaders(),
    
 })