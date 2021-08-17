import { FunctionalComponent, h } from 'preact';
import style from './style.css';

interface P {
    videoId: string
}
const YouTubeEmbeded: FunctionalComponent<P> = (props) => {
    return (  <div className={style.videoResponsive}>
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${props.videoId}`}
            frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube"
        />
    </div>
    );
};

export default YouTubeEmbeded;