import database from '../../dataBase'

const changeTheme = (theme, setTheme ) => {
  setTheme(theme)
  localStorage.setItem('storedTheme', theme)
}

const changeTextColor = (textColor, setTextColor) => {
  setTextColor(textColor)
  localStorage.setItem('storedTextColor', textColor)
}

const addTweetData = async (selector, setTweetModalDisplay) => {
  const tweetText = document.querySelector(selector).value

  await database.tweetData.add({tweetText})

  document.querySelector(selector).value = ''
  setTweetModalDisplay && setTweetModalDisplay(false)
}

const inputEventHandler = (event, inputSelector, buttonSelector, setTweetModalDisplay
) => {
  const inputValue = document.querySelector(inputSelector).value
  if (inputValue.trim().length >= 1) {
    document.querySelector(buttonSelector).classList.add('enable')
    const keyCode = event.which || event.keyCode
    if (keyCode === 13 && event.shiftKey) {
      addTweetData(inputSelector, setTweetModalDisplay)
    }
  } else {
    document.querySelector(buttonSelector).classList.remove('enable')
  }
}

export { inputEventHandler, addTweetData, changeTheme, changeTextColor }
