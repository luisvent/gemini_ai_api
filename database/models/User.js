const { Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Joi = require("joi");
const mapper = require("map-factory");
const winston = require("winston");

const UserSchema = Schema({
   name: {
       type: String,
       required: true,
       min: 5,
       max: 25
   },
    surname: {
        type: String,
        default: ''
    },
    nick: {
       type: String,
        required: true,
        min: 5,
        max: 25,
        unique: true
    },
    email: {
       type: String,
        required: true,
        unique: true
    },
    role: {
       type: String,
        default: 'role_user'
    },
    image: {
       type: String,
        default: 'no_image.png'
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
       type: Date,
        default: Date.now
    },
});


UserSchema.plugin(mongoosePaginate);

const validateUser = (user) => {
    const validation = {
        name: Joi.string().required().trim().min(5).max(25),
        password: Joi.string().required().trim().min(5).max(25),
        email: Joi.string().required().email(),
        nick: Joi.string().required().trim().min(5).max(25),
    };

    const schema = Joi.object(validation).options({allowUnknown: true});
    const result = schema.validate(user);
    return result.error? result.error.details[0].message : false;
}

const mapToResponse = function(data) {

    const map = mapper();
    map("_id").to("_id");
    map("name").to("name");
    map("surname").to("surname");
    map("email").to("email");
    map("nick").to("nick");
    map("role").to("role");

    const result = map.execute(data || this);
    return result;
}

UserSchema.methods.invalid = validateUser;
UserSchema.methods.mapToResponse = mapToResponse;


module.exports = model('User', UserSchema, 'users');
