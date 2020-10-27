import React from 'react';

const StoryList = ({ stories, selectStory, selectedStory }) => {
    if (!stories) { return <></> }

    const handleSelecttStory = (story) => {
        selectStory(story)
    }


    return (
        <>
            {stories.map((story) => (
                <div className={story === selectedStory ? 'ui card story active ' : 'ui card story'} key={story._id} onClick={() => handleSelecttStory(story)}>
                    <div className="content">
                        <div className="header">{story.title}</div>
                        <div className="meta">2 days ago</div>
                        <div className="description">
                            {story.description}
                        </div>
                    </div>
                    
                </div>
            ))
            }
        </>
    )
}

export default StoryList;
