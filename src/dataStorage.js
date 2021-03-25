const request = indexedDB.open('reactTwitter', 3)

request.onsuccess = () => {
  const database = request.result
  const transaction = database.transaction(['bio'], 'readwrite')
  transaction.objectStore('bio')
}

request.onupgradeneeded = () => {
  const database = request.result
  database.createObjectStore('bio', { autoIncrement: true })
  database.createObjectStore('tweetData', { keyPath: 'id' })
  database.createObjectStore('commentData', { keyPath: 'id' })
  database.createObjectStore('messageData', { keyPath: 'id' })
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

    getData.onsuccess = () => {
      resolve(getData.result)
    }

    getData.onerror = () => {
      console.log(`error getting data from ${storeName}`)
      reject(getData.error)
    }
  })

  return Promise.resolve(data)
}

const clearAllEntries = (storeName) => {
  const database = request.result
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.clear()
}

export { request, addEntryToDb, getEntryFromDb, clearAllEntries }
