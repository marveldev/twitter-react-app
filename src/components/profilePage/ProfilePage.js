import { useState } from 'react'
import './profilePage.css'

const Bio = (props) => {
  const { dateOfBirth } = props
  const [name, setName] = useState('Jane Doe')
  const [location, setLocation] = useState({
    city: 'Lagos',
    country: 'Nigeria'
  })

  const updateName = (event) => {
    event.preventDefault()
    const nameInput = document.querySelector('.name-field').value
    setName(nameInput)
  }

  const updateLocation = (event) => {
    event.preventDefault()
    const cityInput = document.querySelector('.city-field').value
    const countryInput = document.querySelector('.country-field').value
    setLocation({
      city: cityInput,
      country: countryInput
    })
  }

  return (
    <div className="user-bio">
      <strong>{name}</strong>
      <p>Front-end developer || Christian</p>
      <span><i className="material-icons">&#xe55f;</i>{location.city}, {location.country}</span>
      <span><i className="fa fa-birthday-cake"></i>Born {dateOfBirth}</span>
      <span><i className="fa fa-calendar"></i>Joined January 2021</span>
      <div>
        <span><strong>48 </strong>Following</span>
        <span><strong>8 </strong>Followers</span>
      </div>
      <form onSubmit={(event) => updateName(event)}>
        <input type="text" className="name-field" />
        <button type="submit">Change name</button>
      </form>
      <form onSubmit={(event) => updateLocation(event)}>
        <input type="text" className="city-field" />
        <input type="text" className="country-field" />
        <button type="submit">Change location</button>
      </form>
    </div>
  )
}

const ProfilePage = () => {
  const openEditModal = () => {
    document.querySelector('.edit-profile-modal').style.display = 'block'
    document.querySelector('#overlay').style.display = 'block'
  }

  return (
    <div className="profile-page">
      <div className="header">
        <button type="button"><i className="material-icons">&#xe5c4;</i></button>
        <div>
          <span>Jane Doe</span>
          <small>4 Tweets</small>
        </div>
      </div>
      <div className="page-content">
        <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG"
          className="photo" alt="photo" />
        <div className="user-bio-container">
          <div>
            <div className="profile-photo">
              <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="photo"/>
            </div>
            <Bio
              name="Judith Beans"
              dateOfBirth="$th April 1865"
              city="Lagos, Nigeria"
            />
          </div>
          <button type="button" onClick={() => openEditModal()}>Edit profile</button>
        </div>
        <div className="options-button">
          <button>Tweets</button>
          <button>Tweets & replies</button>
          <button>Media</button>
          <button>Likes</button>
        </div>
      </div>
      <div className="edit-profile-modal">
        <div className="header">
          <button type="button" id="closeModalButton">X</button>
          <span>Edit profile</span>
          <button id="saveProfileButton">Save</button>
        </div>
        <div className="content">
          <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG"
            className="photo" alt="photo" />
          <div>
            <div className="profile-photo">
              <img src="https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG" alt="photo"/>
            </div>
            <div className="entry-box-container">
              <input type="text" maxLength="20" placeholder="Name" required/>
              <textarea placeholder="Bio"></textarea>
              <input type="text" maxLength="20" placeholder="Location"/>
              <textarea placeholder="Website"></textarea>
              <label>Birth date
                <input type="date" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
