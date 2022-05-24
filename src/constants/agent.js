import superagent from "superagent"

let url = process.env.REACT_APP_API_URL
let key = process.env.REACT_APP_API_KEY

const api = {
    // Retrieve information
    get: (path, head, params) => {
        return superagent.get(url + path).set({ ...head, "x-api-key": key }).query(params).then(res => { return res.body }).catch(err => console.log(err))
    },
    // Create a resource
    post: (path, head, body) => {
        return superagent.post(url + path).set({ ...head, "x-api-key": key }).send(body).then(res => { return res.body }).catch(err => console.log(err))
    },
    // Delete a resource
    delete: (path, head, body) => {
        return superagent.delete(url + path).set({ ...head, "x-api-key": key }).send(body).then(res => { return res.body }).catch(err => console.log(err))
    },
    // Replace a resource
    put: (path, head, body) => {
        return superagent.put(url + path).set({ ...head, "x-api-key": key }).send(body).then(res => { return res.body }).catch(err => console.log(err))
    },
    // Update a resource
    patch: (path, head, body) => {
        return superagent.patch(url + path).set({ ...head, "x-api-key": key }).send(body).then(res => { return res.body }).catch(err => console.log(err))
    }
}

let user = {
    current: (token) => { return api.get("/auth/current", { "x-access-token": token }, {}) },
    signup: (body) => { return api.post("/auth/create", {}, body) },
    login: (body) => { return api.post("/auth/login", {}, body) }
}

let agent = {
    user
}

export default agent