const url = `http://localhost:4000/api/v1`

class event {
    static allEvents = (userId) => {
        return fetch(`${url}/event/${userId}`).then(res => res.json())
    }

    // // create new event
    // static createEvent = () => {
    //     const data = {
    //         where: {
    //             userId: localStorage.getItem('id'),
    //             name: name,
    //             date: date,
    //             location: location,
    //             time: time,
    //             description: description,
    //         }
    //     }
    // }

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