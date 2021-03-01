import { useState } from "react"
import './profilePage.css'

const ProfilePage = () => {
  const defaultPhotoSource = 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
  const [topPhoto, setTopPhoto] = useState(defaultPhotoSource)
  const [profilePhoto, setProfilePhoto] = useState(defaultPhotoSource)
  const [modalDisplay, setModalDisplay] = useState(false)
  const [deleteButton, setDeleteButton] = useState('none')
  const [name, setName] = useState('Jane Doe')
  const [bio, setBio] = useState('Front-end dev')
  const [location, setLocation] = useState('Lagos, Nigeria')
  const [website, setWebsite] = useState('')
  const [birthDate, setBirthDate] = useState('April, 27th 1869')

  const addPhoto = (id) => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(document.querySelector(id).files[0])
    photoReader.addEventListener('load', () => {
      if (id == '#topPhotoPicker') {
        setTopPhoto(photoReader.result)
        setDeleteButton('inline')
      } else {
        setProfilePhoto(photoReader.result)
      }
    })
  }

  const updateBio = () => {
    const nameInput = document.querySelector('.name-field').value
    const bioInput = document.querySelector('.bio-field').value
    const locationInput = document.querySelector('.location-field').value
    const websiteInput = document.querySelector('.website-field').value
    const birthDateInput = document.querySelector('.birth-date-field').value
    console.log(birthDateInput);
    setName(nameInput)
    setBio(bioInput)
    setLocation(locationInput)
    setWebsite(websiteInput)
    setBirthDate(birthDateInput)
    setModalDisplay(false)
  }

  const editProfileModal = (
    <>
      <div className="overlay" onClick={() => setModalDisplay(false)}></div>
      <div className="edit-profile-modal">
        <div className="header">
          <button type="button" id="closeModalButton"
            onClick={() => setModalDisplay(false)}>X
          </button>
          <span>Edit profile</span>
          <button id="saveProfileButton" onClick={() => updateBio()}>Save</button>
        </div>
        <div className="content">
          <img src={topPhoto} className="photo" alt="photo" />
          <div className="top-photo-container">
            <input type="file" id="topPhotoPicker"
              onChange={() => addPhoto('#topPhotoPicker')}
            />
            <label htmlFor="topPhotoPicker">
              <span title="Add photo"><i className="material-icons">&#xe412;</i></span>
            </label>
            <span style={{display: deleteButton}} title="Remove photo"
              onClick={() => {setTopPhoto(defaultPhotoSource); setDeleteButton('none')}}>
              <i className="material-icons">&#xe5cd;</i>
            </span>
          </div>
          <div>
            <div className="profile-photo">
              <img src={profilePhoto} alt="photo"/>
            </div>
            <div className="add-photo">
              <input type="file" id="profilePhotoPicker"
                onChange={() => addPhoto('#profilePhotoPicker')}
              />
              <label htmlFor="profilePhotoPicker">
                <span title="Add photo"><i className="fa fa-camera"></i></span>
              </label>
            </div>
            <div className="entry-box-container">
              <input type="text" className="name-field"
                maxLength="20" placeholder={name} required
              />
              <textarea className="bio-field" placeholder={bio}></textarea>
              <input type="text" className="location-field"
                maxLength="20" placeholder={location}
              />
              <textarea className="website-field" placeholder={website}></textarea>
              <label>Birth date
                <input type="date" className="birth-date-field" placeholder={birthDate} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className="profile-page">
      <div className="header">
        <button type="button"><i className="material-icons">&#xe5c4;</i></button>
        <div>
          <span>{name}</span>
          <small>4 Tweets</small>
        </div>
      </div>
      <div className="page-content">
        <img src={topPhoto} className="photo" alt="photo" />
        <div className="user-bio-container">
          <div>
            <div className="profile-photo">
              <img src={profilePhoto} alt="photo"/>
            </div>
            <div className="user-bio">
              <strong>{name}</strong>
              <p>{bio}</p>
              <span><i className="material-icons">&#xe55f;</i>{location}</span>
              <span><i className="fa fa-birthday-cake"></i>Born {birthDate}</span>
              <span><i className="fa fa-calendar"></i>Joined January 2021</span>
              <div>
                <span><strong>48 </strong>Following</span>
                <span><strong>8 </strong>Followers</span>
              </div>
            </div>
          </div>
          <button type="button" onClick={() => setModalDisplay(true)}>Edit profile</button>
        </div>
        <div className="options-button">
          <button>Tweets</button>
          <button>Tweets & replies</button>
          <button>Media</button>
          <button>Likes</button>
        </div>
      </div>
      { modalDisplay && editProfileModal }
    </div>
  )
}

export default ProfilePage
