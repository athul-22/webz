import React from 'react'
import '../Styles/signinSuccess.css'
import successAnimation from '../Images/success.mp4'
import { Player } from 'video-react';


function SuccessNavigate() {

  return (
    <div>
        <Player
      playsInline
      poster="/assets/poster.png"
      src={successAnimation}
    />
       
    </div>
  )
}

export default SuccessNavigate