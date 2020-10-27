import React from 'react';

import { Link } from 'react-router-dom';

const StoryDetail = ({selectedStory, selectStory, deleteStory }) => {

    const handleCloseStory = () => {
        selectStory('');
    }
    if (!selectedStory){return <></>}

    const handleDelete = (story) => {
        deleteStory(story)
    }



    return (
        <div className="story-container">
            <div className="header-container">
                <h4 className="ui header">{selectedStory.title}</h4>
                <i onClick={() => handleCloseStory('')} className="window close outline icon"></i>
            </div>
            <p>{selectedStory.text}</p>
            <div className="button-container">
                <Link to={`/story_edit/${selectedStory._id}`}>
                    <button className="ui button secondary">Edit</button>
                </Link>
                
                <button onClick={() => handleDelete(selectedStory)} className="ui button secondary">Delete</button>
            </div>
        </div>
        
    );

}

export default StoryDetail;