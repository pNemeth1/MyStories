import React from 'react';



const JokeSection = ({ joke, showSpinner }) => {

    if (!joke) { return <></> }

    return (
        <div className={showSpinner ? 'u-hide' : 'joke-container'}>
            <div className="joke-segment">
                <p>{joke.setup}</p>
                <p>{joke.punchline}</p>
            </div>

        </div>
    );
}

export default JokeSection;