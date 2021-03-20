import React, {useState} from 'react';
import '../header/Header.css';
import ModalComponent from '../modal/ModalContent';
import Modal from '../modal/Modal';

const Header: React.FC = (props:any) => {

const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="header1">
            <header>
                <a href="/" className="logo">
                    <img className="logoPic" src={props.pic} alt=""/>
                </a>
                <ul className="header_list">
                    <li className="header_link"><a href="/">Docs</a></li>
                    <li className="header_link"><a href="/">About</a></li>
                    <li className="header_link_list"><button onClick={()=>setModalOpen(true)}>Characters</button></li>
                </ul>
                <Modal modalOpen={modalOpen}>
                    <ModalComponent setModalOpen={setModalOpen} />
                </Modal>
            </header>
        </div>
    );
}

export default Header;