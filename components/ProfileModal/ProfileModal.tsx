import { useRef, useState } from 'react';
import usePortFolio from '../../store/portFolio';
import useUserStore from '../../store/store';
import ContactModal from '../Modals/ContactModal/ContactModal';
import InfoModal from '../Modals/InfoModal/InfoModal';
import PortFolioModal from '../Modals/PortFolioModal/PortFolioModal';
import styles from './ProfileModal.module.scss';

const ProfileModal = () => {

    const modalRef = useRef<HTMLDivElement>(null);
    const { modal, onCloseModal } = useUserStore();
    const { changePortFolio } = usePortFolio();

    function onClose() {
        if (modalRef) {
            modalRef.current!.style.animation = 'modalCloseAnim 1s forwards';
            modalRef.current?.addEventListener('animationend', () => {
                onCloseModal();
                changePortFolio('포켓몬도감');
                console.log('animation end');
            });
        }
    }

    return (
        <div className={styles.profileModal} ref={modalRef}>
            { modal === 'portFolio' && <PortFolioModal />}
            { modal === 'info' && <InfoModal />}
            { modal === 'more' && <ContactModal />}
            <div className={styles.back} onClick={onClose}></div>
        </div>
    )
}

export default ProfileModal;