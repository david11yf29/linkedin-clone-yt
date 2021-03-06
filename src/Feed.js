import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Feed.css';

import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import FlipMove from 'react-flip-move';

import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { selectUser } from './features/userSlice';


const Feed = () => {
  // Hook
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // snapshot.docs = posts 的 array 裡面很多 post
      // 每次 render 就去更新 posts state 
      // posts = [ {id: __, data: __}, {}, {}, ... ]
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

    // 有 id 的 doc
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
  };


  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
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
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          return (
            <Post 
              key={id} 
              name={name} 
              description={description} 
              message={message} 
              photoUrl={photoUrl} />
          )
        })}
      </FlipMove>
    </div>
  )
}

export default Feed;