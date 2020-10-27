import { useState, useEffect } from 'react';

import { useHistory, useParams } from "react-router-dom";

import axios from 'axios';

const fetchStory = async (storyID) => {
    let story;
    try {
        story  = await axios.post('/api/get_story', {
            storyID
        });
        story = story.data;
    } catch(e) {
        console.log(e)
    }

    return story;
}

const postStory = async (formData, storyID) => {
    await axios.post('/api/edit_story', {
        _id: storyID,
        title: formData.title,
        description: formData.description,
        text: formData.text
    });
}


const useEditStory = () => {
    const [story, setStory] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [text, setText] = useState('');
    const history = useHistory()
    
    const params = useParams();
    const storyID = params.storyID;

    useEffect(() => {
        const fetchData = async (storyID) => {
            const story = await fetchStory(storyID);
            if (story) {
                setStory(story)
                setTitle(story.title);
                setDescription(story.description);
                setText(story.text);
            }
        };
        fetchData(storyID);

    }, []);

    const postData = async (formData, storyID) => {
        await postStory(formData, storyID)
        .then(() => {
            history.push('/stories');
        });
    }

    const onHandleSubmit = (e, storyID) => {
        e.preventDefault();
        const formValues = {
            title,
            description,
            text
        };
        postData(formValues, storyID);
    }

    return { story, title, description, text, setDescription, setTitle, setText, postData, onHandleSubmit}
}

export default useEditStory;