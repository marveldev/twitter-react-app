import { addEntryToDb, clearAllEntries } from "../../dataStorage"

const EditProfileModal = ({ setEditModal, bio, setBio }) => {
  const addPhoto = (id) => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(document.querySelector(id).files[0])
    photoReader.addEventListener('load', () => {
      if (id === '#headerPhotoPicker') {
        document.querySelector('#headerPhoto').src = photoReader.result
      } else {
        document.querySelector('#profilePhoto').src = photoReader.result
      }
    })
  }

  const updateBio = () => {
    const nameInput = document.querySelector('.name-field').value
    const bioInput = document.querySelector('.about-user').value
    const locationInput = document.querySelector('.location-field').value
    const headerPhoto = document.querySelector('#headerPhoto').src
    const profilePhoto = document.querySelector('#profilePhoto').src
    const websiteInput = document.querySelector('.website-field').value
    const birthDateInput = document.querySelector('.birth-date-field').value || '1996-04-05'
    const date = new Date(birthDateInput)
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate()
    const year = date.getFullYear()
    const birthDate = 'Born '.concat(month, ' ', day, ',' , ' ', year)
    const bioObject = {
      name: nameInput, aboutUser: bioInput, location: locationInput,
      website: websiteInput, birthDate: birthDate, profilePhoto: profilePhoto,
      headerPhoto: headerPhoto
    }

    setBio(bioObject)
    setEditModal(false)
    clearAllEntries('bio')
    addEntryToDb('bio', bioObject)
  }

  return (
    <>
      <div onClick={() => setEditModal(false)} className="overlay"></div>
      <div className="edit-profile-modal">
        <div className="header">
          <button
            onClick={() => setEditModal(false)} type="button" id="closeModalButton"
          >
            <i className="material-icons">&#xe5cd;</i>
          </button>
          <span>Edit profile</span>
          <button
            onClick={updateBio} id="saveProfileButton"
          >
            Save
          </button>
        </div>
        <div className="content">
          <img src={bio?.headerPhoto} className="photo" id="headerPhoto" alt="user-profile" />
          <div className="header-photo-container">
            <input
              onChange={() => addPhoto('#headerPhotoPicker')}
              type="file" id="headerPhotoPicker"
            />
            <label htmlFor="headerPhotoPicker">
              <span title="Add photo"><i className="material-icons">&#xe412;</i></span>
            </label>
            <span title="Remove photo">
              <i className="material-icons">&#xe5cd;</i>
            </span>
          </div>
          <div>
            <div className="profile-photo">
              <img src={bio?.profilePhoto} id="profilePhoto" alt="user-profile"/>
            </div>
            <div className="add-photo">
              <input
                onChange={() => addPhoto('#profilePhotoPicker')}
                type="file" id="profilePhotoPicker"
              />
              <label htmlFor="profilePhotoPicker">
                <span title="Add photo"><i className="fa fa-camera"></i></span>
              </label>
            </div>
            <form className="entry-box-container">
              <input
                type="text" className="name-field"
                maxLength="20" placeholder="Name"
                defaultValue={bio?.name}
                required
              />
              <textarea
                className="about-user"
                placeholder="Short introduction"
                defaultValue={bio?.aboutUser}>
              </textarea>
              <input type="text" className="location-field"
                maxLength="20" placeholder="Location" defaultValue={bio?.location}
              />
              <textarea className="website-field"
                placeholder="Website" defaultValue={bio?.website}
              >
              </textarea>
              <label>Birth date
                <input
                  type="date" className="birth-date-field"
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfileModal
