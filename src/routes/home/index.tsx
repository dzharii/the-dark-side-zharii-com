import { FunctionalComponent, h } from 'preact';
import YouTubeEmbeded from '../../components/YouTubeEmbeded';
import style from './style.css';

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>The Dark Side's Home</h1>
            <YouTubeEmbeded videoId='jZ6nF6JKtRc'/>
            <YouTubeEmbeded videoId='HC_5dSmKbG0'/>
            <YouTubeEmbeded videoId='qvWv3uosN9E'/>
        </div>
    );
};

export default Home;
