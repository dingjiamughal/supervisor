module.exports = () => {
    const result = () => Array(7).fill(1).map(() => 100 + Math.random() * 500);
    return [
        {
            name: 'pro1',
            type: 'line',
            stack: null,
            data: result()
        },
        {
            name: 'pro2',
            type: 'line',
            stack: null,
            data: result()
        },
        {
            name: 'pro3',
            type: 'line',
            stack: null,
            data: result()
        },
        {
            name: 'pro4',
            type: 'line',
            stack: null,
            data: result()
        },
        {
            name: 'pro5',
            type: 'line',
            stack: null,
            data: result()
        }
    ];
};
