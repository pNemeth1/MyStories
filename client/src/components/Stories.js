
import React, { useState } from 'react';

import StoryDetail from './StoryDetail';
import StoryList from './StoryList';
import StoryForm from './StoryForm';
import useStories from '../hooks/useStories';
import './Story.scss';
import './StoryForm.scss';
import './Card.scss';







const Stories = () => {
    const { stories, selectedStory, selectStory, deleteStory, showModal, setShowModal, onCreateStory } = useStories();
    const [showStories, setShowStories] = useState(true);

    const handleClose = () => {
        setShowModal(false);
        setShowStories(true);
    }

    const handleOpen = () => {
        setShowModal(true);
        setShowStories(false);
    }


    return (
        <div>
            <div className="header-container">
                <h1 className="ui header">Stories</h1>
                <div className="create-new">
                    <button className="ui secondary button" onClick={handleOpen}>Create New Story</button>
                    <StoryForm handleClose={handleClose} show={showModal} createStory={onCreateStory} >
                    </StoryForm>
                </div>
            </div>

            <div className="stories-container">
                <div className='story-detail-container'>
                    <StoryDetail selectedStory={selectedStory} selectStory={selectStory} showStories={showStories} deleteStory={deleteStory} />
                </div>
                
                <div className={showStories ? 'story-list' : 'story-list u-hide'}>
                    <StoryList selectedStory={selectedStory} stories={stories} selectStory={selectStory} deleteStory={deleteStory} showStories={showStories} />
                </div>
            </div>
        </div >
        
    );
}


export default Stories;