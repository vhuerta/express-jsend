'use strict';

module.exports = jsend;

function jsend() {

    var _success = function(data, message) {
        return _response.call(this, 'success', data, message);
    }

    var _fail = function(message, code, data) {
        return _response.call(this, 'fail', data, message, code);
    }

    var _error = function(message, code, data) {
        return _response.call(this, 'error', data, message, code);
    }

    var _response = function(status, data, message, code) {
        var response = {status: status};
        if(code) {
            response.code = code;
        }
        if(message) {
            response.message = message;
        }
        if(data) {
            response.data = data;
        }
        this.json(response);
    }

    return function(req, res, next) {

        res.jsuccess = _success;
        res.jfail = _fail;
        res.jerror= _error;

        next();

    }
}
