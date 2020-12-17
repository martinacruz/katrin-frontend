import React, { useState } from 'react'
import event from '../models/event'
import { useHistory } from 'react-router-dom'

const EditEvent = (props) => {

    const [editEvent, setEditEvent] = useState(props.location.state)

    let history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        event.editEvent(editEvent)
            .then(updatedEvent => {
                history.push("/event")
            })
    }

    return (
        <div>
            <h2>Change info for event: {event.name }</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="New event name" value={editEvent.name} name="name" onChange={(e) => setEditEvent({ ...editEvent, [e.target.name]: e.target.value })} className="newEventName" />
                <br />
                <input type="text" placeholder="New event location" value={editEvent.location} name="location" onChange={(e) => setEditEvent({ ...editEvent, [e.target.name]: e.target.value })} className="newEventName" />
                <br />
                <input type="text" placeholder="New event date" value={editEvent.date} name="date" onChange={(e) => setEditEvent({ ...editEvent, [e.target.name]: e.target.value })} className="newEventName" />
                <br />
                <input type="text" placeholder="New event time" value={editEvent.time} name="time" onChange={(e) => setEditEvent({ ...editEvent, [e.target.name]: e.target.value })} className="newEventName" />
                <br />
                <input type="text" placeholder="New event description" value={editEvent.description} name="description" onChange={(e) => setEditEvent({ ...editEvent, [e.target.name]: e.target.value })} className="newEventName" />
                <br />
                <button onClick={handleSubmit}>Submit Changes</button>
            </form>

        </div>
    )
}

export default EditEvent
