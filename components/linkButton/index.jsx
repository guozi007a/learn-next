import Link from 'next/link';
import styles from './index.module.scss';

const LinkButton = (props) => {

    const { href, text } = props;

    return <>
        <button className={styles.link_button}>
            <Link href={href}>{text}</Link>
        </button>
    </>
}

export default LinkButton;