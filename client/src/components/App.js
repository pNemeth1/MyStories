import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Profile from './Profile';
import Stories from './Stories';
import StoryEdit from './StoryEdit';
import ProtectedRoute from '../components/ProtectedRoute';

import AuthContext from '../contexts/AuthContexts';

import useAuth from '../hooks/useAuth';


const App = () =>  {

  const auth = useAuth();
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <AuthContext.Provider value={auth}>
              <Header />

              <Route exact path="/" component={Landing} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/stories" component={Stories} />
              <ProtectedRoute path="/story_edit/:storyID" component={StoryEdit} />
              <Footer />
            </AuthContext.Provider>
          </div>
        </BrowserRouter>
      </div>
    );
}

export default App;
