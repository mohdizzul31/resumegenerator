const resumeController = (req,res) => {
    const data ={
        name : req.body.name,
        location : req.body.location,
        occupation : req.body.occupation,
        education : req.body.education,
        experience : req.body.experience,
    };
    res.render("index",data);
};

module.exports = {resumeController};