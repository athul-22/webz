import React, {useState} from 'react';
import { model } from 'mongoose';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Popups = () => (

    const [post , setPost ] = useState("");
    const [newPost , setNewPost] = useState([]);
    <Popup trigger={<button className="button"> Open Modal </button>} modal>
      <center><span> New Post </span><br/></center>
      <center></center><input id='post_input' type='text' placeholder='enter your post here'  /><center/>
            <br/>
            <button id='post_btn'  >POST</button>
    </Popup>
  );

  export default Popups;