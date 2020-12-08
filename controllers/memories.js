const Memory = require('../models/memory');

module.exports = {
    index
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