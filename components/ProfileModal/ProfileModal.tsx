import { useState } from 'react';
import ContactModal from '../Modals/ContactModal/ContactModal';
import InfoModal from '../Modals/InfoModal/InfoModal';
import PortFolioModal from '../Modals/PortFolioModal/PortFolioModal';
import styles from './ProfileModal.module.scss';

const ProfileModal = () => {

    const [modal, setModal] = useState('portfolio')

    return (
        <div className={styles.profileModal}>
            { modal === 'portFolio' && <PortFolioModal />}
            { modal === 'info' && <InfoModal />}
            { modal === 'contact' && <ContactModal />}
        </div>
    )
}

export default ProfileModal;