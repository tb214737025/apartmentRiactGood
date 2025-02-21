import axios from "axios"

const baseUrl = `http://localhost:3001`

// export const getAllAprtment = () => {
//     return axios.get(`${baseUrl}/aprtment/getAllAprtment`)
// }

export const getAllCity = (id) => {
    return axios.get(`${baseUrl}/City/getAllCity`)
}
export const getAllCatgory = (id) => {
    return axios.get(`${baseUrl}/Category/getAllCategory`)
}
export const getAllApartment = (id) => {
    return axios.get(`${baseUrl}/apartment/getAllApartment`)
}
export const getAll= (id) => {
    return axios.get(`${baseUrl}/advertiser/getAll`)
}
export const login = (newUser) => {
    return axios.get(`${baseUrl}/advertiser/login`,newUser)
}

export const register = (newUser) => {
    // body
    return axios.post(`${baseUrl}/advertiser/register`, newUser)
}

export const post = (newCity) => {
    // body
    return axios.post(`${baseUrl}/City/addCity`, newCity)
}
export const addAprtment = (newAprtment) => {
    // body
    return axios.post(`${baseUrl}/apartment/addApartment`, newAprtment)
}
export const updateApartment = (newAprtment,idAp,idC) => {
    // body
    return axios.patch(`${baseUrl}/apartment/updateApartment${idAp}/${idC}`, newAprtment)
}
export const getByCatgeory = (id) => {
    return axios.get(`${baseUrl}/apartment/getByCatgeory`)
}