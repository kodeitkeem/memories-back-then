const Memory = require('../models/memory');

module.exports = {
    index,
    new: newMemory,
    create,
    edit,
    show
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

function edit(req, res){
    Memory.findByIdAndUpdate(req.params.id, req.body, function(err, memory){
        res.render('memories/edit', {
            title: 'Edit Your Memory',
            memory, 
            user: req.user
        })
    })
}

function show(req, res){
    Memory.findById(req.params.id, function(err, memory){
        res.render('memories/show', {
            title: 'Your Memory Details',
            memory,
            user: req.user
        })
    })
}