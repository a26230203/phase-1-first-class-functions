function receivesAFunction(cb) {
    return cb();
}

receivesAFunction(function() {})

function returnsANamedFunction(name, cb) {
    return cb(name);
}

returnsANamedFunction('name', function(name) {return name})
    
