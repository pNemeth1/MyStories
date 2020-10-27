const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

const Story = require('../models/Story');

module.exports = app => {
  app.get('/api/get_stories', jsonParser, (req, res) => {
    Story.find({})
    .then(results => {
        res.send(results);
    }).catch((e) => {
      console.log(e);
    });
});

  app.post('/api/create_stories', jsonParser, (req, res) => {


    console.log(req.body);
    const newStory = {
      title: req.body.title,
      description: req.body.description,
      text: req.body.text,
      user: req.user.id,
      // googleId: req.user.googleId,
      // creationDate: new Date()
    }

    // Create Story
    new Story(newStory)
      .save().then(() => {
        Story.find({})
        .then(results => {
          res.send(results);
        });
      }).catch((e) => {
        console.log(e);
      });
  });

  app.post('/api/delete_story', jsonParser, (req, res) => {
    const storyId = req.body.story._id;
    Story.deleteOne({_id: storyId})
    .then(() => {
      Story.find({})
      .then(results => {
        res.send(results);
      });
    }).catch((e) => {
      console.log(e);
    });
  });

  app.post('/api/get_story', jsonParser, (req, res) => {
    const storyId = req.body.storyID;
    Story.findOne({_id: storyId}).then((result) => {
      res.send(result);
    }).catch((e) => {
      console.log(e);
    });
  });

  app.post('/api/edit_story', jsonParser, (req, res) => {
    const formData = req.body;
  
    Story.findOne({
      _id: req.body._id
    })
    .then(story => {

        // New values
        story.title = formData.title;
        story.description = formData.description;
        story.text = formData.text;
    
        story.save();
    }).catch((e) => {
      console.log(e);
    })
    res.send({success: true})
  });

};
