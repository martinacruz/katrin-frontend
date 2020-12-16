import React from 'react';
import { useState, useEffect } from 'react'
import event from '../models/event'

const Event = (props) => {

  const [eventList, setEventList] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem('id'))


  const fetchData = async () => {
    const results = await event.allEvents(userId)
    console.log(results)
    setEventList(results)
  }

  useEffect(() => {
    fetchData()
  }, [props])

  const handleDestroy = (id) => {
    eventList.delete(id)
      .then(data => {
        fetchData()
      })
  }

  return (
    <div>
      <h1>Profile of user with ID {props.currentUser}</h1>
      <h2>You are now in the admin page</h2>
      <h1><u>Events</u></h1>
      {eventList.map((event, idx) => {
        return (
          <div>
            <h3>{event.name}</h3>
            <p><strong>Loc:</strong> {event.location} </p>
            <p><strong>Date:</strong> {event.date} </p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Description:</strong> {event.description} </p>
            <button className="btn-danger" onClick={() => handleDestroy(event.id)}>DELETE</button>
          </div>
        )
      })}
    </div>
  )
}

export default Event