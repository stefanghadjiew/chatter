import React from 'react';
import classes from './styles.module.scss';
import { Input, Image, Button, Svg, Paragraph } from 'components';
import { useInput } from 'customHooks';
import { Form, Page, FlexContainer } from 'containers';
import { Link } from 'react-router-dom';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { AiOutlineSmile, AiFillLock } from 'react-icons/ai';
import { images } from 'assets';

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
                    <Paragraph text="beautiful" />
                </FlexContainer>
                <FlexContainer componentClasses={classes['m-r-1']}>
                    <Svg icon={<AiFillLock />} />
                    <Paragraph text="secure" />
                </FlexContainer>
                <FlexContainer componentClasses={classes['m-r-1']}>
                    <Svg icon={<AiOutlineSmile />} />
                    <Paragraph text="fun" />
                </FlexContainer>
            </FlexContainer>
            <FlexContainer
                componentClasses={[
                    classes['flex-between'],
                    classes['m-t-5'],
                ]}
            >
                <Form>
                    <FlexContainer
                        componentClasses={classes['flex-between']}
                    >
                        <Input
                            type="text"
                            label="First Name"
                            value={firstName.value}
                            error={firstName.error}
                            onChange={firstName.handleChange}
                        />
                        <Input
                            type="text"
                            label="Last Name"
                            value={lastName.value}
                            error={lastName.error}
                            onChange={lastName.handleChange}
                        />
                    </FlexContainer>
                    <Input
                        type="text"
                        label="Nickname"
                        value={nickname.value}
                        error={nickname.error}
                        onChange={nickname.handleChange}
                    />
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
                    <Button text="Create Account" />
                </Form>
                <FlexContainer
                    componentClasses={[
                        classes['fit-content'],
                        classes['redirect-content'],
                    ]}
                >
                    <FlexContainer flexColumn={true}>
                        <Paragraph text="Already have an account ?" />
                        <Link to="/">
                            <Paragraph text="I forgot my password" />
                        </Link>
                    </FlexContainer>
                    <Link to="/login">
                        <Button
                            size="small"
                            text="Login"
                            componentClasses={classes['btn-redirect']}
                        />
                    </Link>
                </FlexContainer>
            </FlexContainer>

            <Image
                src={images.signup}
                alt="bird-chat"
                componentClasses={classes['signup-image']}
            />
        </Page>
    );
};
