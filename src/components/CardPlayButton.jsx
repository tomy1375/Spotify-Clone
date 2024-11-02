import { Pause, Play } from "./Player"
import { usePlayerStore } from "../store/playerStore"

export function CardPlayButton({ id }) {
    const {
             currentMusic,
             isPlaying,
             setIsPlaying,
             setCurrentMusic
        } = usePlayerStore(state => state)
        
    const isPlayingPlayList = isPlaying && currentMusic ?.playlist.id === id

    const handleClick = ()=>{
        if (isPlayingPlayList) {
            setIsPlaying(false)
            return
        }
      fetch(`/api/get-info-play.json?id=${id}`)
        .then(res => res.json())
        .then(data => {
            const {song, playlist} = data
            setIsPlaying(true)
            setCurrentMusic({ songs, playlist, song:song[0]})
        }

        )
    }


    return(
        <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-4">
            {isPlayingPlayList ? <Pause/> : <Play/> }
        </button>
    )
}