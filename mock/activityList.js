module.exports = params => {
    const result = Array(params.pageSize).fill(1).map(() => {
        return {
            uid: 'uid123',
            verb: 'click',
            object: `第${params.pageNo}页的信息，每页${params.pageSize}条`
        };
    });

    return result;
};
