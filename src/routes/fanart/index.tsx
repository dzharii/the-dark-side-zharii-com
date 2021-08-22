import { FunctionalComponent, h } from 'preact';
import YouTubeEmbeded from '../../components/YouTubeEmbeded';
import style from './style.css';

interface Props {
    user: string;
}

const FanArtPage: FunctionalComponent<Props> = (props: Props) => {

    return (
        <div class={style.profile}>
            <h1>Fan Comics, Movies, Theories</h1>
            <YouTubeEmbeded videoId='Ey68aMOV9gc'/>
            <YouTubeEmbeded videoId='GfUf5OBbUz4'/>
            <YouTubeEmbeded videoId='3kSLCUSTF_Y'/>
            <a href="https://www.youtube.com/watch?v=3kSLCUSTF_Y&list=PLuKnjVUhJLzHWz-z0AUzarorcrgQlYkUz">More! Darth Vader (Audio Comics)</a>

            <h2>Theory: Darth Jar Jar - Sith Lord</h2>
            <YouTubeEmbeded videoId='p8Djj2rZgrY'/>
            <YouTubeEmbeded videoId='gCApD7tJQC0'/>
        </div>
    );
};

export default FanArtPage;
