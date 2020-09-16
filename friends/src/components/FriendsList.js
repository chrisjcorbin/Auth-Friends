
import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'; 
import FriendForm from './FriendForm'; 

const FriendsList = () => {
    const [friends, setFriends] = useState([]); 
    console.log(friends); 
useEffect(() => {
    axiosWithAuth()
    .get("/api/friends")
    .then((res) => {
        setFriends(...friends, res.data); 
    })
    .catch((err) => console.log(err.message))
}, [])

    return (
        <div>
            <div className="float-left" style={{ width: "40vw"}}>
                <h3 className="text-center">Auth Friends</h3>
                <FriendForm setFriends={setFriends}/> 
            </div>
        <div className="d-flex flex-column">
            {friends.map(friend => {
                return (
                    <div className="card float-left" style={{ width: "18rem", margin: 15 }}>
                        <div className="card-body">
                            <div className="card-header">{friend.name}</div>
                            <footer className="blockquote-footer">{friend.email}</footer>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default FriendsList;