{
    function multiMongooToObject(mongoos) {
        return mongoos.map(mongoo=>mongoo.toObject());
    }
    function mongooToObject(mongoo) {
        return mongoo ? mongoo.toObject() : mongoo;
    }
}

module.exports = {multiMongooToObject, mongooToObject}