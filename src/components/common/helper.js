import { addEntryToDb } from "../../dataStorage"

const changeTheme = (theme, setTheme ) => {
  setTheme(theme)
  localStorage.setItem('storedTheme', theme)
}

const changeTextColor = (textColor, setTextColor) => {
  setTextColor(textColor)
  localStorage.setItem('storedTextColor', textColor)
}

const addTweetData = (selector, tweetData, setTweetData, setTweetModalDisplay) => {
  const tweetText = document.querySelector(selector).value
  const id = 'id' + Date.parse(new Date()).toString()
  const tweetObject = {
    tweetText,
    id
  }

  setTweetData([ tweetObject, ...tweetData ])
  addEntryToDb('tweetData', tweetObject)

  setTweetModalDisplay && setTweetModalDisplay(false)
}

const inputEventHandler = (event, inputSelector, buttonSelector, tweetData,
  setTweetData, setTweetModalDisplay
) => {
  const inputValue = document.querySelector(inputSelector).value
  if (inputValue.trim().length >= 1) {
    document.querySelector(buttonSelector).classList.add('enable')
    if (event.which === 13 && event.shiftKey) {
      addTweetData(inputSelector, tweetData, setTweetData, setTweetModalDisplay)
    }
  } else {
    document.querySelector(buttonSelector).classList.remove('enable')
  }
}

export { inputEventHandler, addTweetData, changeTheme, changeTextColor }
