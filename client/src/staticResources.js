export const terms = `<p>By selecting Create account, you agree to our <span>Terms</span> and have read and acknowledge our <span>Global Privacy Statement</span></p>`;
export const loginMsg =
    'To keep connected with us please login with your personal information by email address and password 🔔';
export const buttons = {
    createAccount: 'Create Account',
    login: 'Login',
    google: 'Google',
};

export const headings = {
    welcomeBack: 'Welcome back :)',
};

export const labels = {
    firstName: 'First Name',
    lastName: 'Last Name',
    nickname: 'Nickname',
    email: 'Email',
    password: 'Password',
};

export const paragraphs = {
    beautiful: 'beautiful',
    secure: 'secure',
    fun: 'fun',
    haveAnAccount: 'Already have an account ?',
    forgotPassword: 'Forgot password ?',
    rememberMe: 'Remember me ',
    joinWith: 'Or you can join with',
};

export const animationTypes = {
    topToBottom: 'top-bottom',
    bottomToTop: 'bottom-top',
    leftToRight: 'left-right',
    rightToLeft: 'right-left',
    insideOut: 'inside-out',
};

export const animations = duration => ({
    'top-bottom': {},
    'bottom-top': {
        initial: { opacity: 0, y: '25px' },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration,
            },
        },
    },
    'left-right': {},
    'right-left': {},
    'inside-out': {
        initial: { opacity: 0, scale: 0.95 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: 'easeInOut',
                duration,
            },
        },
    },
});
