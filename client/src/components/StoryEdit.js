import React from 'react';


import { Link } from 'react-router-dom';

import { useParams } from "react-router-dom";

import useEditStory from '../hooks/useStoryEdit';

import './StoryEdit.scss';





const StoryEdit = () => {
    const { story, title, description, text, setDescription, setTitle, setText, onHandleSubmit } = useEditStory();

    const params = useParams();
    const storyID = params.storyID;

    if (!story){return <></>}

    return (
        <div>
             <div className="header-container">
                <h1 className="ui header">Edit your Story</h1>
            </div>
            <form onSubmit={(e) => onHandleSubmit(e, storyID)} className="ui form">
            <div className="field">
                <label>Title</label>
                <input type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="field">
                <label>Short Description</label>
                <input type="text" 
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="field">
                <label>Your Story</label>
                <textarea type="text" 
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <button className="ui button secondary">Submit</button>
            </form>
            <Link to="/stories">
                <button className="ui red button">Cancel</button>
            </Link>
            
        </div>
    )
}

export default StoryEdit;