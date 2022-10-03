import { useRef } from 'react';
import { FlexContainer } from 'containers';
import {
    FramerMotionAnimation,
    animationTypes,
    H4,
    Input,
    Button,
} from 'components';
import classes from './styles.module.scss';
import { useOutsideClick } from 'customHooks';
import { BiUser } from 'react-icons/bi';
import { ImPhone } from 'react-icons/im';
import { useAppDispatch } from 'app/hooks';
import { closePortal } from 'features/backdropPortal/backdropPortalSlice';

export const NewContact = () => {
    const componentRef = useRef(null);
    //Trying out the ref pattern
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const phoneNumberRef = useRef('+359');
    const dispatch = useAppDispatch();

    useOutsideClick(componentRef);

    return (
        <FramerMotionAnimation
            animationVariant={animationTypes.insideOut}
            animationDuration={0.2}
            componentClasses={classes['framer-motion__new-contact']}
        >
            <FlexContainer
                ref={componentRef}
                flexDirection="column"
                componentClasses={classes['p-1']}
            >
                <H4 text="New Contact" />
                <FlexContainer
                    flexDirection="column"
                    componentClasses={classes['flex-gap-1']}
                >
                    <FlexContainer
                        componentClasses={classes['flex-align-center']}
                    >
                        <BiUser />
                        <Input
                            variant="outlined"
                            label="First name"
                            componentClasses={classes['first-name']}
                        />
                    </FlexContainer>
                    <FlexContainer componentClasses={classes['m-l-3']}>
                        <Input
                            variant="outlined"
                            label="Last name"
                            componentClasses={classes['first-name']}
                        />
                    </FlexContainer>
                    <FlexContainer
                        componentClasses={classes['flex-align-center']}
                    >
                        <ImPhone />
                        <Input
                            variant="outlined"
                            label="Phone number"
                            componentClasses={classes['first-name']}
                        />
                    </FlexContainer>
                    <FlexContainer
                        justifyContent="flex-end"
                        componentClasses={
                            classes['framer-motion__new-contact__actions']
                        }
                    >
                        <Button
                            size="small"
                            color="dark-primary"
                            text="Cancel"
                            onClick={() => dispatch(closePortal())}
                        />
                        <Button
                            size="small"
                            color="dark-primary"
                            text="Create"
                        />
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </FramerMotionAnimation>
    );
};
