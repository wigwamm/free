import superagent from "superagent"

let url = process.env.REACT_APP_API_URL

const api = {
    // Retrieve information
    get: (path, params) => {
        return superagent.get(url + path).query(params).then(res => { return res }).catch(err => console.log(err))
    },
    // Create a resource
    post: (path, body) => {
        return superagent.post(url + path).send(body).then(res => { return res }).catch(err => console.log(err))
    },
    // Delete a resource
    delete: (path, body) => {
        return superagent.delete(url + path).send(body).then(res => { return res }).catch(err => console.log(err))
    },
    // Replace a resource
    put: (path, body) => {
        return superagent.put(url + path).send(body).then(res => { return res }).catch(err => console.log(err))
    },
    // Update a resource
    patch: (path, body) => {
        return superagent.patch(url + path).send(body).then(res => { return res }).catch(err => console.log(err))
    }
}

let user = {
    current: () => {  },
}

let agent = {
    user
}

export default agent