const url = `http://localhost:4000/api/v1`

class event {
    static allEvents = (userId) => {
        return fetch(`${url}/event/${userId}`).then(res => res.json())
    }

    // create new event
    static createEvent = (data) => {
        return fetch(`${url}/event`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
            .then(response => response.json())
    }

    static editEvent = (id) => {
        const userId = localStorage.getItem('id')
        return fetch(`${url}/event/${userId}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
            credentials: 'include'
        })
        .then(res => res.json)
    }


    //delete an event
    static delete = (id) => {
        const userId = localStorage.getItem('id')
        return fetch(`${url}/event/${userId}/${id}`, {
            method: "DELETE",
        }).then(res => {
            console.log(res)
            return res.json()
        })
            .catch(console.error)
    }
}

export default event