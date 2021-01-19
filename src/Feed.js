import React, { useEffect, useState } from 'react';

import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';

import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { db } from './firebase';

const Feed = () => {
  // Hook
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          data: doc.data()
        }
      }))
    })
  }, []);

  const sendPost = (event) => {
    event.preventDefault();

    // db.collection('posts').add({
    //   name: 'David Lin',
    //   description: 'this is a test',
    //   message: event.target.value
    // })
  };


  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => {
        return (
          <Post />
        )
      })}
      <Post name="David Lin" description="This is a test" message="Message worked" />
    </div>
  )
}

export default Feed;