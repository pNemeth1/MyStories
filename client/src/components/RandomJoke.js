import React from 'react';
import axios from 'axios';

import {useState} from 'react';

import JokeSection from './JokeSection';
import './Joke.scss';


const useJoke = () => {

    const [joke, setJoke] = useState();

    const getJoke = async () => {
        let joke;
        joke = await axios.get('https://dad-jokes.p.rapidapi.com/random/joke', {
            'headers': {
                "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
                "x-rapidapi-key": "4c82a35e46msh4230c3b0cceb061p1dc536jsnc91cabc490ab"
            }
        }).then((joke) => {
            joke = joke.data.body[0];
            setJoke(joke);
        }).catch((e) => {
            console.log(e);
        });
    
        return joke;
    }

    return {joke, getJoke}

}




const RandomJoke = () => {

    const {joke, getJoke} = useJoke();
    const [showSpinner, setShowSpinner ] = useState(false);

    const onGetJoke = async () => {
        setShowSpinner(true)
        await getJoke().then(() => {
            setShowSpinner(false);
        });
    }
    

    return (
        <div className="ui placeholder segment">
            <div className="ui icon header">
            <i className="smile outline icon"></i>
        Wanna Hear a Joke to brighten up your day?
        </div>
            <div className="inline">

            <button onClick={() => onGetJoke()} className="ui button red">Joke Time!</button>
                    
            </div>
            <div className={showSpinner ? 'ui active inline loader' : 'u-hide'}></div>
            <JokeSection joke={joke} showSpinner={showSpinner}/>
        </div>
    )
}

export default RandomJoke;