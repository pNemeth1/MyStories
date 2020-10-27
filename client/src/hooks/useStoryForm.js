import {useState} from 'react';


const useForm = () => {

    const [state, setState] = useState({
        title: '',
        description: '',
        text: '',
    });


    const [showError, setShowError] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const onHandleChange = (evt) => {
        const value = evt.target.value;

        setState({
            ...state,
            [evt.target.name]: value
        });
    }


    const onHandleSubmit = async (state, createStory, handleClose) => {
        let formData = {}
        
        if (!state.title || !state.description || !state.text) {
            setShowError(true);
            setTimeout(() => {
                setShowError(false)
            }, 2000);
        } else {
            formData.title = state.title;
            formData.description = state.description;
            formData.text = state.text;
            setShowConfirmation(true);
            setState({
                title: '',
                description: '',
                text: '',
            });
            setTimeout(() => {
                setShowConfirmation(false);
                createStory(formData);
                handleClose();
            }, 2000);
        }
    }


    return { state, onHandleChange, onHandleSubmit, showError, showConfirmation}
}

export default useForm;