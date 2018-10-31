const path = require('path');
const Mock = require('mockjs');
const moduleAlias = require('module-alias');

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function error(msg = 'Error occurred!', data = null, status = 1) {
    console.log(`Mockup data error: ${msg}`);
    return {
        status,
        msg,
        data
    };
}


module.exports = function (options = {}) {
    // alias @mockup path
    moduleAlias.addAlias('@mockup', options.path);

    const isAjax = options.type === 'uri';
    const isDownload = options.type === 'download';
    const isUpload = options.type === 'upload';

    return async (req, res, next) => {
        // 判断method是否正确
        if (isAjax && options.method !== 'all' && req.method !== options.method.toUpperCase()) {
            next();
            return;
        }
        if (isDownload && req.method !== 'GET') {
            next();
            return;
        }
        if (isUpload && req.method !== 'POST') {
            next();
            return;
        }

        let params = {};
        if (isAjax) {
            params = {
                ...req.query,
                ...req.body
            };
        } else if (req.query.params) {
            try {
                params = global.JSON.parse(req.query.params);
            } catch (e) {
                console.warn(`Cannot parse params ${req.query.params}: ${e.message}`);
            }
        }

        // 取出method，如果在query和body里不存在，则使用path
        /* eslint-disable fecs-no-extra-destructure */
        const {
            method,
            ...data
        } = {
            method: req.path.replace(/^\//, ''),
            ...params
        };
        /* eslint-enable fecs-no-extra-destructure */

        // method 不存在
        if (!method) {
            const ret = error('No method!');
            if (isDownload) {
                res.status(500).send(ret.msg);
            } else {
                res.json(ret);
            }
            return;
        }

        try {
            // 获取mockup文件
            const file = require.resolve(path.resolve(options.path, method));
            if (require.cache[file] != null) {
                delete require.cache[file];
            }

            // 如果是function则执行
            let mockupData = require(file);
            if ('function' === typeof mockupData) {
                mockupData = await mockupData(data);
            }
            const result = Mock.mock(mockupData);

            // sleep
            let delay = 0;
            if ('function' === typeof options.delay) {
                delay = options.delay(method);
            } else if (options.delay) {
                delay = options.delay;
            }
            await sleep(delay);

            if (isDownload) {
                res.set('Content-Type', 'application/octet-stream');
                res.send(result);
            } else if (result == null
                || result.success == null) {
                // 如果是null，则直接返回不带数据的成功
                // 如果没有status字段或者有status但是没有msg和data，则认为是成功，返回即为数据
                // 其他情况则直接返回

                res.json({
                    success: true,
                    result: result == null ? null : (result.data || result)
                });
            } else {
                res.json(result);
            }
        } catch (e) {
            const ret = error(`Method ${method} error: ${e.message}`);
            if (isDownload) {
                res.status(e.code === 'MODULE_NOT_FOUND' ? 404 : 500).send(ret.msg);
            } else {
                res.json(ret);
            }
        }
    };
};
