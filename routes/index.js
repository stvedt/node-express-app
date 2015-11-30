exports.teams = function(req, res){
    var name = req.params.name;

    res.render('default', {
        pageTitle: 'Teams ',
        className: 'teams'
    });
}

exports.teamSingle = function(req, res){
    var name = req.params.name;

    res.render('default', {
        pageTitle: 'Team: ' + req.params.teamName,
        className: 'team-single'
    });
}