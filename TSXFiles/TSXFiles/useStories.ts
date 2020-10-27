// import React from 'react';

// import { useState, useEffect } from 'react';
// import Axios from 'axios';


// const fetchStories = async (): Promise<object> => {
//     let stories;
//     try {
//         stories = await Axios.get('/api/get_stories');
//         stories = stories.data;
//         console.log(stories)
//     } catch (e) {
//         console.log(e);
//     }
//     return stories;
// }

// const deleteStories = async (story: object): Promise<object> => {
//     let stories;
//     try {
//         stories = Axios.post('/api/delete_story', { story: story })
//         stories = (await stories).data;
//     } catch (e) {
//         console.log(e);
//     }
//     return stories;
// }

// const createStory = async(formData: {title: string, description: string, story: string}): Promise<object> => {
//     let stories: object = {};
//     try {
//         stories = await Axios.post('/api/create_stories', {
//             title: formData.title,
//             description: formData.description,
//             story: formData.story
//         });
//     } catch(e) {
//         console.log(e)
//     }

//     return stories;

// }

// const useStories = (): {stories: object, selectedStory: object, selectStory: () => any, deleteStory:() => any, showModal: boolean,  setShowModal: () => any, onCreateStory: () => any} => {
//     const [stories, setStories] = useState();
//     const [selectedStory, selectStory] = useState();
//     const [showModal, setShowModal] = useState();

//     useEffect(() => {
        
//         const fetchData = async () => {
//             const stories = await fetchStories();
            
//             if (stories) {
//                 setStories(stories);
//                 selectStory('');
//             }

//         };
//         fetchData();
//     }, [showModal])

//     const deleteStory = async (story) => {
//         const stories = await deleteStories(story);
//         if (stories) {
//             setStories(stories);
//             selectStory('');
//         }

//     }

//     const onCreateStory = async (formData) => {
//         const stories = await createStory(formData);
//         if (stories) {
//             setStories(stories.data);
//         }

//     }

//     return { stories, selectedStory, selectStory, deleteStory, showModal,  setShowModal, onCreateStory}
    
// }

// export default useStories;