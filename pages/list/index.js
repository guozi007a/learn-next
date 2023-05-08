import Link from 'next/link';
import styles from './index.module.scss';

const students = [
    { id: 'xiaoming', name: '小明' },
    { id: 'zhangsan', name: '张三' },
    { id: 'dili', name: '迪丽热巴' }
];

const List = () => {

    return <>
        <h3>This is a list page.</h3>
        <h5>以下是学生名单，点击可查看对应信息哦。</h5>
        <ul className={styles.stu_list}>
            {
                students.map((v, i) => {
                    return <li key={v.id}
                        className={`${styles.stu_li} ${styles[`stu_li${i + 1}`]}`}
                    >
                        <Link href={`/list/${v.id}`}>{v.name}</Link>
                    </li>
                })
            }
        </ul>
    </>
}

export default List;