import Dexie from 'dexie'

const database = new Dexie('Twitter')
database.version(1).stores(
  {
    bio: '++id,name,aboutUser,location,website,birthDate,profilePhoto,headerPhoto',
    tweetData: '++id,tweetText'
  }
)

export default database
