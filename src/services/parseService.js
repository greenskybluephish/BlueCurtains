
const data = `(4:00PM - 5:15PM) Spider Bite, Skydiver, Birds of a Feather, Ruby, Oh King,
 Way Over Yonder the Minor Key, The Unexpected -> Nursery Rhyme, Kodachrome, Fear, Back on the Train 
 (6:30PM - 7:00PM) Lightbulb, Fish and a Rice Cake, Cuckoo’s Nest, Up on the Hill, 
 Rising Sun, Coming Home, Imitation Leather Shoes, East Due West, Ain’t No Bugs on Me, 
 Secret Place, Up in the Clouds`

const createSetlist = (data) => {
  console.log(data)
  const setArray = data.split(/\(|\)/)
  const reduced = setArray.filter((val, index) => {
    return index % 2 === 0 && index > 0
  })
  console.log(reduced)
  const setObject = reduced.map((set, setIndex) => {
    const normalizedSet = set.replaceAll(' ->', '%,')
    const songs = normalizedSet.split(', ')

    const songObjects = songs.map((songString, songIndex) => {
      const segueSong = songString.endsWith('%')
      let trimSong = songString.trim()
      if (segueSong) {
        trimSong = trimSong.split('%')[0]
        console.log(trimSong)
      }
      const trimmedSong = trimSong
      return {
        songName: trimmedSong,
        segue: segueSong,
        songIndex: songIndex + 1,
      }
    })
    return { set: songObjects, index: setIndex + 1 }
  })
  return setObject
}

const getSongObject = (songString) => {
  const segueSong = songString.endsWith('%')
  let ret = songString
  if (segueSong)
    ret = songString.split('%')[0]

  return { songName: ret, segue: segueSong }
}

export default createSetlist
