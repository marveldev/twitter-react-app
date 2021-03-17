const profilePhotoUrl = 'https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
const changeTheme = (theme, setTheme ) => {
  setTheme(theme)
  localStorage.setItem('storedTheme', theme)
}

const changeTextColor = (textColor, setTextColor) => {
  setTextColor(textColor)
  localStorage.setItem('storedTextColor', textColor)
}

const addTweetData = (selector, tweetData, setTweetData) => {
  const tweetText = document.querySelector(selector).value
  const name = 'Derick Alangi'
  const id = 'id' + Date.parse(new Date()).toString()
  const tweetObject = {
    profilePhotoUrl,
    tweetText,
    name,
    id
  }

  setTweetData([...tweetData, tweetObject])
}

const inputEventHandler = (inputSelector, buttonSelector) => {
  const inputValue = document.querySelector(inputSelector).value
  if (inputValue.trim().length >= 1) {
    document.querySelector(buttonSelector).classList.add('enable')
  } else {
    document.querySelector(buttonSelector).classList.remove('enable')
  }
}

export { inputEventHandler, addTweetData, changeTheme, changeTextColor }
