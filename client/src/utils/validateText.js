const isEmpty = text => {
    return text.length > 0 ? '' : 'The field should not be blank';
};

const isEmail = text => {
    const validEmailRegex = /\S+@\S+\.\S+/;
    return text.match(validEmailRegex) ? '' : 'Not a valid email';
};

module.exports = { isEmpty, isEmail };
