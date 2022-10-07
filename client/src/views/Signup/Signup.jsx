import React from 'react';
import classes from './styles.module.scss';
import {
    Input,
    Image,
    Button,
    Svg,
    Paragraph,
    FramerMotionAnimation,
    animationTypes,
} from 'components';
import { Form, Page, FlexContainer } from 'containers';
import { Link } from 'react-router-dom';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { AiOutlineSmile, AiFillLock } from 'react-icons/ai';
import { images } from 'assets';
import { buttons, labels, paragraphs } from 'staticResources';
import { siteMap } from 'Router';

export const Signup = () => {
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
                justifyContent="space-between"
                componentClasses={[classes['m-t-5']]}
            >
                <Form>
                    <FramerMotionAnimation
                        animationVariant={animationTypes.bottomToTop}
                        animationDuration={0.3}
                    >
                        <FlexContainer flexDirection="column">
                            <Input
                                type="text"
                                label={labels.firstName}
                                initialValue=""
                            />
                            <Input
                                type="text"
                                label={labels.lastName}
                                initialValue=""
                            />
                        </FlexContainer>
                    </FramerMotionAnimation>

                    <FramerMotionAnimation
                        animationVariant={animationTypes.bottomToTop}
                        animationDuration={0.5}
                    >
                        <Input
                            type="text"
                            label={labels.nickname}
                            initialValue=""
                        />
                        <Input
                            type="email"
                            label={labels.email}
                            initialValue=""
                        />
                        <Input
                            type="password"
                            label={labels.password}
                            initialValue=""
                        />
                    </FramerMotionAnimation>
                    <FramerMotionAnimation
                        animationVariant={animationTypes.bottomToTop}
                        animationDuration={1.2}
                    >
                        <Button text={buttons.createAccount} />
                    </FramerMotionAnimation>
                </Form>

                <FramerMotionAnimation
                    animationVariant={animationTypes.insideOut}
                >
                    <Image src={images.signup} alt="signup-image" />
                </FramerMotionAnimation>
                <FlexContainer
                    componentClasses={[
                        classes['fit-content'],
                        classes['redirect-content'],
                    ]}
                >
                    <FlexContainer flexDirection="column">
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
