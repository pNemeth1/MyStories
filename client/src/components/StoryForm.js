import React from 'react';

import useStoryForm from '../hooks/useStoryForm';


import './StoryForm.scss'




const Form = ({ handleClose, show, createStory }) => {
    
    const { state, onHandleChange, onHandleSubmit, showError, showConfirmation}  = useStoryForm();

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <div className={showConfirmation ? 'u-hide' : ''}>
                    <div className="header-container">
                        <h3 className="ui header">Share your Story!</h3>
                    </div>

                    <form className='ui form'>
                        <div className={showError ? 'error' : 'error u-hide'}>
                            <i className="exclamation icon"></i>
                            Please fill out all the fields :)
                        </div>
                        <div className="ui field">
                            <label>Add a title to your story</label>
                            <input name="title" type="text"
                                value={state.title}
                                onChange={onHandleChange}
                            />
                        </div>
                        <div className="ui field">
                            <label>Add a short description</label>
                            <input name="description" type="text"
                                value={state.description}
                                onChange={onHandleChange}
                            />
                        </div>
                        <div className="ui field">
                            <label>Write away :)</label>
                            <textarea name="text"
                                value={state.text}
                                onChange={onHandleChange}
                            />
                        </div>

                    </form>
                    <div className="button-container">
                        <button onClick={handleClose} className="ui red button">Close</button>
                        <button onClick={() => onHandleSubmit(state, createStory, handleClose)} className="ui secondary button">Submit</button>

                    </div>
                </div>
                <div className={showConfirmation ? 'confirmation' : 'u-hide'}>
                    <h3 className="ui header"><i className="smile outline icon"></i> Thank you for surrendering the Story!</h3>
                </div>

            </div>
        </div>
    );

}

export default Form;