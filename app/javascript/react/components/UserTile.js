import React from 'react'
import { Link } from 'react-router-dom'

const UserTile = props => {
  let location

  if(props.city && props.state){
    location = `${props.city}, ${props.state}`
  }

  return(
      <div>
        <Link to={`/users/${props.id}`}>
          <div className="athlete-box">
            <img src={props.profile} alt="profile picture" width="250" height="250"/>
            <div className="athlete-text">
              <p>{props.firstname} {props.lastname} - {props.sex}</p>
              <p>{location}</p>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default UserTile
