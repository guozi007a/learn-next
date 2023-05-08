import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './index.module.scss';
import LinkButton from '/components/LinkButton';

const ListItem = () => {
    const router = useRouter();
    const { id } = router.query;
    const [stu, setStu] = useState({});

    // 获取api文件夹中的数据
    const getStudentData = async () => {
        if (!id) return;
        try {
            // result是一个Response对象，需要使用json()方法
            // 转化成json数据
            const result = await fetch(`${process.env.NODE_ENV === 'development' ? '' : '/learn-next'}/api/list/${id}`);
            const res = await result.json();
            if (res.code === '0') {
                setStu(res.data);
            } 
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => { 
        getStudentData();
    }, [id])

    return <>
        <h3>以下是你要查看的单个学生的信息：</h3>
        <table className={styles.table} rules='rows'>
            <tbody>
                <tr>
                    <td>姓名</td>
                    <td>{stu.name}</td>
                </tr>
                <tr>
                    <td>性别</td>
                    <td>{stu.sex ? '男' : '女'}</td>
                </tr>
                <tr>
                    <td>分数</td>
                    <td>{stu.score}</td>
                </tr>
                <tr>
                    <td>排名</td>
                    <td>{stu.sort}</td>
                </tr>
            </tbody>
        </table>
        <LinkButton href="/" text="返回首页" />
    </>
}

export default ListItem;