import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Main.css';

import logo from '../assets/logo.png'
import likebutton from '../assets/like.png';
import dislikebutton from '../assets/dislike.png';

import api from '../services/api'

export default function Main({match}) {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers:{
          user:match.params.id
        }
      })
      setUsers(response.data);
    }
    loadUsers();
  },[match.params.id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null,{
      headers:{user:match.params.id},
    })

    setUsers(users.filter(user => user._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null,{
      headers:{user:match.params.id},
    })

    setUsers(users.filter(user => user._id !== id));
  }


  return (
      <div className="main-container">
        <Link to="/">
        <img src={logo} alt="TinDev"/>
        </Link>
          {users.length > 0 ? (
            <ul>
              {users.map(user => (
            <li key={user._id}>
            <img src={user.avatar} alt={user.name}/>
            <footer>
              <strong>{user.name}</strong>
              <p>{user.bio===null?"Um programdor iniciante":user.bio}</p>
            </footer>
            <div className="buttons">
              <button type="button" onClick={()=>handleLike(user._id)}>
                <img src={likebutton} alt="Like"/>
              </button>
              <button type="button" onClick={()=>handleDislike(user._id)}>
                <img src={dislikebutton} alt="Dislike"/>
              </button>
            </div>      
          </li>
          ))}
            </ul>
          ) : (
            <div className="empty">
              Acabou :(
            </div>
          )
          }
      </div>
  )
}
