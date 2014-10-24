// Load modules


// Declare internals

var internals = {};


module.exports = {
    auth: 'github',
    handler: function (request, reply) {

        if (request.auth.isAuthenticated) {
            request.auth.session.set(request.auth.credentials);
        }

        return reply.redirect('/');
    }
};
