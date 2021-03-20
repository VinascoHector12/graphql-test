import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 15px;
    display: flex;
    //align-items: center;
    //justify-content: center;
    flex-direction: column;

    button{
        margin-bottom: 20px;
    }
`;

type Props = {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalComponent: React.FC<Props> = ({setModalOpen}) => (
    <div className="fullModal">
        <h2 className="title">Lista de personajes</h2>
        <p>This is a cool modal!</p>
        <Wrapper>
            <button type="button" onClick={() => setModalOpen(false)}>
                <span>Close</span>
            </button>
        </Wrapper>
    </div>
);

export default ModalComponent;

