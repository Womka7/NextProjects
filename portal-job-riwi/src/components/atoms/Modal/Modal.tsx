import { Button } from "../Button/Button";
import { Icon } from "../Icons/Icon";
import './modalStyle.scss'
interface IProps {
    children: React.ReactNode;
    onClose: () => void
}
export const Modal = ({ children, onClose }: IProps) => {
    return (
        <div className={'bg-modal'}>
            <div className={'container-modal'}>
                <Button onClick={onClose} className='button-icon'                      >
                    <Icon name="iconclose" />
                </Button>
                {children}
            </div>
        </div>
    );
}