module.exports = params => {
    const result = Array(params.pageSize).fill(1).map((item, index) => {
        return {
            errorData: `第${params.pageNo}页的信息，每页${params.pageSize}条`,
            count: 10 * (params.pageNo - 1) + index,
            originFile: `第${params.pageNo}页的xxxxx`
        };
    });

    return result;
};
