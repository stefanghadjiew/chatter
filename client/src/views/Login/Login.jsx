import React, { Fragment } from 'react';
import { Page, FlexContainer, Form } from 'containers';
import {
    Image,
    Input,
    H1,
    Paragraph,
    Button,
    FramerMotionAnimation,
    animationTypes,
} from 'components';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';
import { useInput } from 'customHooks';
import { loginMsg } from 'staticResources';
import { images } from 'assets';
import { siteMap } from 'Router';

export const Login = () => {
    const email = useInput('');
    const password = useInput('');

    return (
        <Page title="Chatter">
            <FlexContainer componentClasses={classes['m-t-3']}>
                <FramerMotionAnimation
                    animationVariant={animationTypes.insideOut}
                    animationDuration={0.3}
                >
                    <Image
                        src={images.login}
                        alt="login-image"
                        componentClasses={[
                            classes['login-image'],
                            classes['m-r-3'],
                        ]}
                    />
                </FramerMotionAnimation>
                <FlexContainer
                    flexDirection="column"
                    componentClasses={classes['login-form-container']}
                    /* centered={true} */
                >
                    <Fragment>
                        <FramerMotionAnimation
                            animationVariant={animationTypes.bottomToTop}
                            componentClasses={
                                classes['framer-animation-h1']
                            }
                        >
                            <H1
                                text="Welcome Back :)"
                                componentClasses={classes['m-b-small']}
                            />
                            <Paragraph text={loginMsg} />
                        </FramerMotionAnimation>
                        <Form componentClasses={classes['m-t-2']}>
                            <FramerMotionAnimation
                                animationVariant={
                                    animationTypes.bottomToTop
                                }
                                animationDuration={0.5}
                            >
                                <Input
                                    type="email"
                                    label="Email"
                                    value={email.value}
                                    success={email.success}
                                    error={email.error}
                                    onChange={email.handleChange}
                                />
                                <Input
                                    type="password"
                                    label="Password"
                                    value={password.value}
                                    error={password.error}
                                    success={password.success}
                                    onChange={password.handleChange}
                                />
                                <FlexContainer
                                    justifyContent="space-between"
                                    componentClasses={[
                                        classes['m-b-1'],
                                        classes['m-r-1'],
                                        classes['m-l-1'],
                                    ]}
                                >
                                    <Link to="/">
                                        <Paragraph text="Remember me" />
                                    </Link>
                                    <Link to="/">
                                        <Paragraph text="Forgot password ?" />
                                    </Link>
                                </FlexContainer>
                                <FlexContainer>
                                    <Link to="/">
                                        <Button
                                            text="Login"
                                            componentClasses={
                                                classes['m-r-2']
                                            }
                                        />
                                    </Link>
                                    <Link to={siteMap.Signup.path}>
                                        <Button text="Create Account" />
                                    </Link>
                                </FlexContainer>
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                animationVariant={
                                    animationTypes.bottomToTop
                                }
                                animationDuration={1.2}
                            >
                                <Paragraph
                                    text="Or you can join with"
                                    componentClasses={classes['m-t-1']}
                                />
                                <Button
                                    text="Google"
                                    componentClasses={classes['m-t-1']}
                                />
                            </FramerMotionAnimation>
                        </Form>
                    </Fragment>
                </FlexContainer>
            </FlexContainer>
        </Page>
    );
};
