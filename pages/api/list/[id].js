const resList = [
    { id: 'xiaoming', name: '小明', sex: 1, score: 88, sort: 2 },
    { id: 'zhangsan', name: '张三', sex: 1, score: 95, sort: 1 },
    { id: 'dili', name: '迪丽热巴', sex: 0, score: 76, sort: 3 },
];
export default function listHandler(req, res) {
    const { id } = req.query;
    const result = resList.find(v => v.id === id) ?? {};
    res.status(200).json({
        code: '0',
        message: 'success',
        data: result
    });
}