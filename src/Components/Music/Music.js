import lotrst from './lotrst.mp3'
import {faVolumeDown, faVolumeMute} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon as FAI} from "@fortawesome/react-fontawesome";
import {Button} from "react-bootstrap";
import "./Music.css"

const Music = (props) => {
    const play = props.play
    const setPlay = props.setPlay
    const audio = props.audio


    const toggle = () => {
        if (play){
            setPlay(false)
            audio.pause()
        }

        else {
            setPlay(true)
            audio.play()
        }

    }



    return (
        <div className={"MusicButton"} >
            {play ? (
                <FAI onClick={toggle} className={"iconSound"} icon={faVolumeDown}/>
            ) : (
                <FAI onClick={toggle} className={"iconSound"} icon={faVolumeMute}/>
            )}
        </div>
    );
}

export default Music