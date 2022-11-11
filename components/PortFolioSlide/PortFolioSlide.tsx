import styles from './PortFolioSlide.module.scss';
import GITHUB from '../../imgs/github.png';
import Image from 'next/image';

const PortFolioSlide = () => {
    return (
        <div className={styles.portFolioSlide}>
            <ul className={styles.container}>
                <li>
                    <Image width={100} height={50} src={GITHUB} alt='test'/>
                </li>
                <li>
                    <Image width={100} height={50} src={GITHUB} alt='test'/>
                </li>
                <li>
                    <Image width={100} height={50} src={GITHUB} alt='test'/>
                </li>
                <li>
                    <Image width={100} height={50} src={GITHUB} alt='test'/>
                </li>
                <li>
                    <Image width={100} height={50} src={GITHUB} alt='test'/>
                </li>
                <li>
                    <Image width={100} height={50} src={GITHUB} alt='test'/>
                </li>
                <li>
                    <Image width={100} height={50} src={GITHUB} alt='test'/>
                </li>
                <li>
                    <Image width={100} height={50} src={GITHUB} alt='test'/>
                </li>
            </ul>
        </div>
    )
}

export default PortFolioSlide;