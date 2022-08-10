import ReactDOM from 'react-dom';
import classes from './styles.module.scss';
import { usePortal } from 'customHooks';

export const BackdropPortal = () => {
    const [loaded, portalId] = usePortal();

    return loaded ? ReactDOM.createPortal() : null;
};
