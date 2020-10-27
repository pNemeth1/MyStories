import React from 'react';
import { useContext } from 'react';

import RandomJoke from './RandomJoke';



import AuthContext from '../contexts/AuthContexts';


const Landing = () => {

  const contextType = AuthContext;
  const auth = useContext(contextType);

  const getLink = (auth) => {

    let link;

    if (auth === null) {
      return;
    } else if (auth.data) {
      link = '/stories'
    } else if (!auth.data) {
      link = '/auth/google'
    }

    return link;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
      <h1 className="ui header">
        MyStories
      </h1>
      Share your stories and have them available whenever you need!
      {/* <img className="ui fluid image" src="/content/GUT1.JPG"></img> */}
      <div className="ui placeholder segment">
        <div className="ui icon header">
          <i className="pencil alternate icon"></i>
        Tell us what's in your head! These are your Stories!
        </div>
          <div className="inline">
          
          <a href={getLink(auth)} className="ui secondary button">GetStarted</a>
        </div>
      </div>
      <RandomJoke />
    </div>
  );
};

export default Landing;
