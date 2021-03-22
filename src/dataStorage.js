const request = indexedDB.open('reactTwitter', 2)

request.onsuccess = () => {
  const database = request.result
  const transaction = database.transaction(['bio'], 'readwrite')
  transaction.objectStore('bio')
}

request.onupgradeneeded = () => {
  const database = request.result
  database.createObjectStore('bio', { autoIncrement: true })
  // database.createObjectStore('tweet-data', { keyPath: 'tweetItemId' })
  // database.createObjectStore('comment-data', { autoIncrement: true })
}

request.onerror = () => {
  console.log('request unsuccessful')
}

const addEntryToDb = (storeName, entry) => {
  const database = request.result
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.add(entry)

  transaction.oncomplete = () => {
    console.log('success')
  }

  transaction.onerror = () => {
    console.log(`error adding to ${storeName}`)
  }
}

const getEntryFromDb = async (storeName) => {
  const data = new Promise((resolve, reject) => {
    const database = request.result
    const transaction = database.transaction([storeName])
    const store = transaction.objectStore(storeName)
    const getData = store.getAll()
    console.log(getData);

    getData.onsuccess = () => {
      resolve(getData.result)
    }

    getData.onerror = () => {
      console.log(`error getting data from ${storeName}`)
      reject(getData.error)
    }
  })
  console.log(Promise.resolve(data));

  return Promise.resolve(data)
}

const clearAllEntries = (storeName) => {
  const database = request.result
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.clear()
}

// const deleteEntry = (storeName, entryId) => {
//   const database = request.result
//   const transaction = database.transaction([storeName], 'readwrite')
//   const store = transaction.objectStore(storeName)
//   store.delete(entryId)
// }

export { request, addEntryToDb, getEntryFromDb, clearAllEntries }
