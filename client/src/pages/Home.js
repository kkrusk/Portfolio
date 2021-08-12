//rfce macro creates boilerplate skeleton setup for new page
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'

function Home() {
  let history = useHistory();
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => { //useEffect hook renders after each change
    axios.get('http://localhost:3001/posts').then((response) => {
      setListOfPosts(response.data);
    })
  }, []); //2nd param of useEffect stops infinite loop (I think by setting it to the value of 2nd param [] on 2nd render?)

  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          // must use ` ` in order to pass in JS value in argument
          <div className='post' key={key} onClick={() => { history.push(`/posts/byId/${value.id}`) }}>
            <div className='title'> {value.title} </div>
            <div className='post_text'> {value.post_text} </div>
            <div className='username'> {value.username} </div>
          </div>
        );
      })}
    </div>
  )
}

export default Home
