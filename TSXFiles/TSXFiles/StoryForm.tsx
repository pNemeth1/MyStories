// import React from 'react';

// import useStoryForm from '../hooks/useStoryForm';


// import './StoryForm.scss'

// type StoryFormProps = {
//     show: boolean;
//     handleClose: Function;
//     createStory: Function;
// }

// const Form: React.FC<StoryFormProps> = ({ handleClose, show, createStory }) => {
    
//     const { state, onHandleChange, onHandleSubmit, showError, showConfirmation}  = useStoryForm();

//     const showHideClassName = show ? "modal display-block" : "modal display-none";

//     return (
//         <div className={showHideClassName}>
//             <div className="modal-main">
//                 <div className={showConfirmation ? 'u-hide' : ''}>
//                     <div className="header-container">
//                         <h3 className="ui header">Share your Story!</h3>
//                     </div>

//                     <form className='ui form'>
//                         <div className={showError ? 'error' : 'error u-hide'}>
//                             <i className="exclamation icon"></i>
//                             Please fill out all the fields :)
//                         </div>
//                         <div className="ui field">
//                             <label>Title</label>
//                             <input name="title" type="text"
//                                 value={state.title}
//                                 // Because this is a html built in element
//                                 onChange={onHandleChange as unknown as (event: React.ChangeEvent<HTMLInputElement>) => void}
//                             />
//                         </div>
//                         <div className="ui field">
//                             <label>Desc</label>
//                             <input name="description" type="text"
//                                 value={state.description}
//                                 onChange={onHandleChange as unknown as (event: React.ChangeEvent<HTMLInputElement>) => void}
//                             />
//                         </div>
//                         <div className="ui field">
//                             <label>Text</label>
//                             <textarea name="text"
//                                 value={state.text}
//                                 onChange={onHandleChange as unknown as (event: React.ChangeEvent<HTMLTextAreaElement>) => void}
//                             />
//                         </div>

//                     </form>
//                     <div className="button-container">
//                         <button onClick={handleClose as any} className="ui red button">Close</button>
//                         <button onClick={() => onHandleSubmit(state, createStory, handleClose)} className="ui secondary button">Submit</button>

//                     </div>
//                 </div>
//                 <div className={showConfirmation ? 'confirmation' : 'u-hide'}>
//                     <h3 className="ui header"><i className="smile outline icon"></i> Thank you for surrendering the Story!</h3>
//                 </div>

//             </div>
//         </div>
//     );

// }

// export default Form;