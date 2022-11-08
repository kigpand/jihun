import { useState } from 'react';
import usePortFolio from '../../store/portFolio';
import useUserStore from '../../store/store';
import ContactModal from '../Modals/ContactModal/ContactModal';
import InfoModal from '../Modals/InfoModal/InfoModal';
import PortFolioModal from '../Modals/PortFolioModal/PortFolioModal';
import styles from './ProfileModal.module.scss';

const ProfileModal = () => {

    const { modal, onCloseModal } = useUserStore();
    const { changePortFolio } = usePortFolio();

    function onClose() {
        onCloseModal();
        changePortFolio('포켓몬도감');
    }

    return (
        <div className={styles.profileModal}>
            { modal === 'portFolio' && <PortFolioModal />}
            { modal === 'info' && <InfoModal />}
            { modal === 'more' && <ContactModal />}
            <div className={styles.back} onClick={onClose}></div>
        </div>
    )
}

export default ProfileModal;