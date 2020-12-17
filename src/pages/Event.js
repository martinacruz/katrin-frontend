import React from 'react';
import { useState, useEffect } from 'react'
import event from '../models/event'
import { Link } from 'react-router-dom'

const Event = (props) => {

  // delete states
  const [eventList, setEventList] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem('id'))

  //create new event state
  const [data, setData] = useState({})

//display events
  const fetchData = async () => {
    const results = await event.allEvents(userId)
    console.log(results)
    setEventList(results)
  }

  useEffect(() => {
    fetchData()
  }, [props])

  //create events
  const createNewEvent = (e) => {
    e.preventDefault()
    event.createEvent(data).then(res => {
      console.log(res)
      fetchData()
    })
  }

  //delete events
  const handleDestroy = (id) => {
    console.log(id)
    event.delete(id)
      .then(data => {
        console.log(data)
        fetchData()
      })
  }

  return (
    <div>
      <h1>Profile of user with ID {props.currentUser}</h1>
      <h2>You are now in the admin page</h2>
      <div className="createEvent">
        <form onSubmit={createNewEvent}>
          <input type="text" placeholder="New event name" value={data.name} name="name" onChange={(e) => setData({...data, [e.target.name]: e.target.value})} className="newEventName"/>
          <br/>
          <input type="text" placeholder="New event location" value={data.location} name="location" onChange={(e) => setData({...data, [e.target.name]: e.target.value})} className="newEventName"/>
          <br/>
          <input type="text" placeholder="New event date" value={data.date} name="date" onChange={(e) => setData({...data, [e.target.name]: e.target.value})} className="newEventName"/>
          <br/>
          <input type="text" placeholder="New event time" value={data.time} name="time" onChange={(e) => setData({...data, [e.target.name]: e.target.value})} className="newEventName"/>
          <br/>
          <input type="text" placeholder="New event description" value={data.description} name="description" onChange={(e) => setData({...data, [e.target.name]: e.target.value})} className="newEventName"/>
          <br/>
          <button>Add New Event</button>
        </form>
      </div>
      <h1><u>Events</u></h1>
      {eventList.map((event, idx) => {
        return (
          <div key={ event.eventList} >
            <h3>{event.name}</h3>
            <p><strong>Loc:</strong> {event.location} </p>
            <p><strong>Date:</strong> {event.date} </p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Description:</strong> {event.description} </p>
            <button className="btn-danger" onClick={() => handleDestroy(event.id)}>Delete</button>
            <Link to={{
              pathname: `/editevent/${event.id}`,
              state: event
            }}>
              <button>Edit</button>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Event