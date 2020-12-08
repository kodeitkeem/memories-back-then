const Memory = require('../models/memory');

module.exports = {
    index,
    new: newMemory,
    create
}

function index(req, res){
    Memory.find({}, function(err, memories){
        res.render('memories/index', {
            memories,
            user: req.user,
            title: 'User Memories'
        })
    })
}


function newMemory(req, res){
    res.render('memories/new', {
        title: 'Add a New Memory',
        user: req.user
})
}

function create(req, res){
    req.body.uploadedBy = req.user._id;
    const memory = new Memory(req.body);
    memory.save(function(err){
        console.log(memory);
        res.redirect('/memories')
    })
}