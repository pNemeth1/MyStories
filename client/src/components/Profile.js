import React from 'react';
import { Link } from 'react-router-dom';

import useStories from '../hooks/useStories';


import './Profile.scss';


const renderList = (stories) => {
    let renderedList
    if (stories) {
        renderedList = stories.map((story) => {
            return (
                <div key={story._id} className="item">
                    <i className="edit icon"></i>
                    <div className="content">
                    <Link className="header" to={`/story_edit/${story._id}`} style={{color: 'black'}}>
                        {story.title}
                    </Link>
                        <div className="description">Updated 22 mins ago</div>
                    </div>
                </div>
            )
        });

    }
    return renderedList;
}

const renderHeader = (userStories) => {
    if (userStories && userStories.length > 0) {
        return (
            <h3 className="ui header">Here are your Stories:</h3>
        )
    } else {
        return (
            <a href="/stories" className="ui secondary button">Post a Story!</a>
        )
    }

}


const Profile = ({ user }) => {
    const { stories } = useStories()

    const userStories = stories;


    if (!user.data) { return <></> }


    user = user.data;

    const renderedList = renderList(userStories);
    const header = renderHeader(userStories);
    return (
        <div>
            <div className="header-container">
                <h1 className="ui header">{user.firstName}</h1>
            </div>

            <div className="profile-content">
                <div className="image">
                    <img className="ui image fluid" src={user.image} alt="profile-pic" />
                </div>
                <div className="info">

                    <div className="profile-info">
                        <h3 className="ui header"> Welcome to your profile {user.firstName}!</h3>

                    </div>
                    <div className="stories-info">
                        {header}
                        <div className="ui relaxed divided list">
                            {renderedList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Profile;