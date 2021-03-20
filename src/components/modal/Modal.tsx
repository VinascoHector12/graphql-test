import React from 'react';
import {createPortal} from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    z-index: 1000000;
    position: fixed;
    top: 25%;
    left: 25%;
    display: flex;
    padding-top: 25px;
    //align-items: center;
    justify-content: center;
    width: 50vw;
    height: 50vh;
    background: rgb(36, 40, 47);
    color: #fff;
`;

type Props = {
    modalOpen: boolean;
}

const Modal: React.FC<Props> = ({modalOpen, children}) => {
    if(!modalOpen) return null;

    return createPortal(
        <Wrapper>
            <div>{children}</div>
        </Wrapper>,
        document.body
        /*document.getElementById("portal")*/
    );
};

export default Modal;
