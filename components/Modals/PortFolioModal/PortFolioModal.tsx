import Link from 'next/link';
import { useEffect, useState } from 'react';
import { portFolioItem } from '../../../common/portFolio';
import { IPortFolio } from '../../../interface/IPortFolio';
import { IPortFolioItem } from '../../../interface/IPortFolioItem';
import usePortFolio from '../../../store/portFolio';
import PortFolioSlide from '../../PortFolioSlide/PortFolioSlide';
import styles from './PortFolioModal.module.scss';
import PortFolioModalBtn from './PortFolioModalBtn';

const PortFolioModal = () => {

    const { portFolio } = usePortFolio();
    const [item, setItem] = useState<IPortFolioItem | null>(null);

    useEffect(() => {
        const result = portFolioItem.find((item: IPortFolio) => item.title === portFolio);
        if (result) {
            setItem(result.item);
        }
    }, [portFolio]);

    return (
        <div className={styles.portFolioModal}>
            <div className={styles.titleContainer}>
                <div className={styles.modalTitle}>&lt;PortFolio /&gt;</div>
            </div>
            <div className={styles.main}>
                <PortFolioModalBtn />
                <PortFolioSlide />
                <div className={styles.text}>{item?.text}</div>
                <div className={styles.footer}>
                    <Link href={'/PortFolioPage'}>자세히 알아보기...</Link>
                </div>
            </div>
        </div>
    )
}

export default PortFolioModal;