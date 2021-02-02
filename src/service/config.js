const devBaseURL = 'http://8.136.1.227:3001'
const proBaseURL = 'http://8.136.1.227:3001'
// const devBaseURL = 'http://localhost:3001'
// const proBaseURL = 'http://localhost:3001'

export const baseURL = process.env.NODE_ENV === 'production' ? proBaseURL : devBaseURL
export const timeout = 5000