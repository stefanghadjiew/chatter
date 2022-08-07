import React from 'react';
import classes from './styles.module.scss';
import {
    Input,
    Image,
    Button,
    Svg,
    Paragraph,
    FramerMotionAnimation,
} from 'components';
import { useInput } from 'customHooks';
import { Form, Page, FlexContainer } from 'containers';
import { Link } from 'react-router-dom';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { AiOutlineSmile, AiFillLock } from 'react-icons/ai';
import { images } from 'assets';
import {
    animationTypes,
    buttons,
    labels,
    paragraphs,
} from 'staticResources';
import { siteMap } from 'Router';

export const Signup = () => {
    const firstName = useInput('');
    const lastName = useInput('');
    const nickname = useInput('');
    const email = useInput('');
    const password = useInput('');

    return (
        <Page title="Chatter">
            <FlexContainer componentClasses={classes['m-t-1']}>
                <FlexContainer componentClasses={classes['m-r-1']}>
                    <Svg icon={<BsFillChatRightTextFill />} />
                    <Paragraph text={paragraphs.beautiful} />
                </FlexContainer>
                <FlexContainer componentClasses={classes['m-r-1']}>
                    <Svg icon={<AiFillLock />} />
                    <Paragraph text={paragraphs.secure} />
                </FlexContainer>
                <FlexContainer componentClasses={classes['m-r-1']}>
                    <Svg icon={<AiOutlineSmile />} />
                    <Paragraph text={paragraphs.fun} />
                </FlexContainer>
            </FlexContainer>
            <FlexContainer
                componentClasses={[
                    classes['flex-between'],
                    classes['m-t-5'],
                ]}
            >
                <Form>
                    <FramerMotionAnimation
                        animation={animationTypes.bottomToTop}
                        animationDuration={0.3}
                    >
                        <FlexContainer
                            componentClasses={classes['flex-between']}
                        >
                            <Input
                                type="text"
                                label={labels.firstName}
                                value={firstName.value}
                                error={firstName.error}
                                onChange={firstName.handleChange}
                            />
                            <Input
                                type="text"
                                label={labels.lastName}
                                value={lastName.value}
                                error={lastName.error}
                                onChange={lastName.handleChange}
                            />
                        </FlexContainer>
                    </FramerMotionAnimation>

                    <FramerMotionAnimation
                        animation={animationTypes.bottomToTop}
                        animationDuration={0.5}
                    >
                        <Input
                            type="text"
                            label={labels.nickname}
                            value={nickname.value}
                            error={nickname.error}
                            onChange={nickname.handleChange}
                        />
                        <Input
                            type="email"
                            label={labels.email}
                            value={email.value}
                            success={email.success}
                            error={email.error}
                            onChange={email.handleChange}
                        />
                        <Input
                            type="password"
                            label={labels.password}
                            value={password.value}
                            error={password.error}
                            success={password.success}
                            onChange={password.handleChange}
                        />
                    </FramerMotionAnimation>
                    <FramerMotionAnimation
                        animation={animationTypes.bottomToTop}
                        animationDuration={1.2}
                    >
                        <Button text={buttons.createAccount} />
                    </FramerMotionAnimation>
                </Form>

                <FramerMotionAnimation
                    animation={animationTypes.insideOut}
                >
                    <Image src={images.signup} alt="signup-image" />
                </FramerMotionAnimation>
                <FlexContainer
                    componentClasses={[
                        classes['fit-content'],
                        classes['redirect-content'],
                    ]}
                >
                    <FlexContainer flexColumn={true}>
                        <Paragraph text={paragraphs.haveAnAccount} />
                        <Link to="/">
                            <Paragraph text={paragraphs.forgotPassword} />
                        </Link>
                    </FlexContainer>
                    <Link to={siteMap.Login.path}>
                        <Button
                            size="small"
                            text={buttons.login}
                            componentClasses={classes['btn-redirect']}
                        />
                    </Link>
                </FlexContainer>
            </FlexContainer>
        </Page>
    );
};
