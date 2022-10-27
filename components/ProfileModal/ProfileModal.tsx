import { useState } from 'react';
import useUserStore from '../../store/store';
import ContactModal from '../Modals/ContactModal/ContactModal';
import InfoModal from '../Modals/InfoModal/InfoModal';
import PortFolioModal from '../Modals/PortFolioModal/PortFolioModal';
import styles from './ProfileModal.module.scss';

const ProfileModal = () => {

    const { modal ,onCloseModal } = useUserStore();

    function onClose() {
        onCloseModal();
    }

    return (
        <div className={styles.profileModal} onClick={onClose}>
            { modal === 'portFolio' && <PortFolioModal />}
            { modal === 'info' && <InfoModal />}
            { modal === 'contact' && <ContactModal />}
        </div>
    )
}

export default ProfileModal;