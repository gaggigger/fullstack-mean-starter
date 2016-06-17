/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/users              ->  index
 * POST    /api/users              ->  create
 * GET     /api/users/:id          ->  show
 * PUT     /api/users/:id          ->  update
 * DELETE  /api/users/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import User from './user.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Users
export function index(req, res, next) {
  return User.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single User from the DB
export function show(req, res, next) {
  return User.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new User in the DB
export function create(req, res, next) {
  return User.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing User in the DB
export function update(req, res, next) {
  if (req.body._id) {
    delete req.body._id;
  }
  return User.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a User from the DB
export function destroy(req, res) {
  return User.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
export function registerUser(req, res) {
  return "dd";
  // if(!req.body.email || !req.body.password) {
  //   res.json({ success: false, message: 'Please enter email and password.' });
  // } else {
  //   var newUser = new User({
  //     email: req.body.email,
  //     password: req.body.password
  //   });
  //
  //   // Attempt to save the user
  //   newUser.save(function(err) {
  //     if (err) {
  //       return res.json({ success: false, message: 'That email address already exists.'});
  //     }
  //     res.json({ success: true, message: 'Successfully created new user.' });
  //   });
  // }
}
