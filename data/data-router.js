const express = require("express");
//make sure to invoke it an use uppercase R for .Router()
const router = express.Router();

const data = require("./db");

router.use(express.json());

router.get("/", (req, res) => {
  data
    .find()
    .then(all => {
      res.status(200).json(all);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "The posts information could not be retrieved."
      });
    });
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  findById(id)
    .then(singlePost => {
      if (singlePost) {
        res.status(200).json(singlePost);
      } else {
        res.status(404).json({
          errorMessage: "The post with the specified ID does not exist."
        });
      }
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({ errorMessage: "The post information could not be retrieved." });
    });
});

router.post("/", (req, res) => {
  if (!req.body.title || !req.body.contents)
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });
  data
    .insert(req.body)
    .then(added => {
      data.find().then(all => {
        res.status(201).json({ created: added, data: all });
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage:
          "There was an error while saving the post to the database."
      });
    });
});

router.post("/:id/comments", (req, res) => {
  if (!req.body.text)
    res.status(400).json({
      errorMessage: "Please provide text for the comment."
    });
  const id = req.params.id;
  data
    .insertComment({ post_id: id, ...req.body })
    .then(added => {
      if (added) {
        data.findPostComments().then(allComments => {
          res.status(201).json({ created: added, data: allComments });
        });
      } else {
        res
          .status(404)
          .json({
            errorMessage: "The post with the specified ID does not exist."
          });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage:
          "There was an error while saving the post to the database."
      });
    });
});

// router.delete ("/", (req, res) => {

//     .then( => {

//     })
//     .catch(error => {
//         console.log(error);
//         res.status(500).json({errorMessage: ""})
//     })
// });
// router.put ("/", (req, res) => {

//     .then( => {

//     })
//     .catch(error => {
//         console.log(error);
//         res.status(500).json({errorMessage: ""})
//     })
// });
// router. ("/", (req, res) => {

//     .then( => {

//     })
//     .catch(error => {
//         console.log(error);
//         res.status(500).json({errorMessage: ""})
//     })
// });

module.exports = router;
