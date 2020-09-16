import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'; 

const initialState = {
    id: Date.now(),
    name: "",
    age: "",
    email: "",
};

const FriendForm = (props) => {
    const { setFriends } = props; 
    const [newFriend, setNewFriend] = useState(initialState); 

    const handleInput = (e) => {
       setNewFriend({
           ...newFriend, 
           [e.target.name]: e.target.value
       }); 
    };

    const addFriend = (friend) => {
        axiosWithAuth()
        .post('/api/friends', friend)
            .then((res) => {
                setFriends(res.data);
                setNewFriend(initialState); 
            })
            .catch((err) => console.error(err.message))

    };

    return (
<div className="card col-12 col-lg-4 login-card mt-2 hv-center">
    <form>
        <div className="form-group text-left">
                <label htmlFor="exampleInputName1">Name</label>
                <input type="name" 
                    className="form-control" 
                    name="name"
                    placeholder="Name"
                    value={newFriend.name}
                    onChange={handleInput}
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputAge1">Age</label>
                <input type="age" 
                    className="form-control" 
                    name="age" 
                    placeholder="Age"
                    value={newFriend.age}
                    onChange={handleInput}
                />
            </div>
            <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input type="email" 
                   className="form-control" 
                   name="email" 
                   aria-describedby="emailHelp" 
                   placeholder="Enter email"
                   value={newFriend.email}
                   onChange={handleInput}
            />
            <small id="emailHelp" className="form-text text-muted">
                Please enter your email
            </small>
        </div>
            <button onClick={() => addFriend(newFriend)} type="submit" className="btn btn-primary">
                Sign Up
            </button>
        </form>
    </div>
    )
}

export default FriendForm;