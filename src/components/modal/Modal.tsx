import React from 'react';
import closeIcon from '../../assets/img/x.png'

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal : React.FC<ModalProps> = ({title, isOpen, onClose, children}) => {
    <div className={'modal'}>
        <div className={'modal_overlay'} />
        <div className={'modal_box'}>
            <div className={'modal_close-btn'}>
                <img src={closeIcon} alt={'close modal'}/>
            </div>
            <div className={'modal_title'}>
                {title}
            </div>
            <div className={'modal_content'}>
                {children}
            </div>
        </div>
    </div>
};