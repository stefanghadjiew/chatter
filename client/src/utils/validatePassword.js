export const validatePassword = password => {
    let error = {};
    error.length =
        password.length >= 8 ? '' : 'be at least 8 characters long';
    error.characters = password.match(['[A-Za-z]'])
        ? ''
        : 'include both lower and upper case characters';
    error.symbols = password.match(/[-._!"`'#%&,:;<>=@{}~$()*+/\\?[\]^|]+/)
        ? ''
        : 'include at least one number and symbol';
    return error;
};
