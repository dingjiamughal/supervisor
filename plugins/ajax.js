import Vue from 'vue';
// import guid from '~/util/guid';

// let logger;
// if (!process.browser) {
//     logger = require('~/util/logger');
// }

export default function ({app, $axios, redirect, store, error}) {

    $axios.onResponse(response => {
        try {
            let responseData = response.data;
            if (typeof responseData === 'string') {
                responseData = global.JSON.parse(responseData);
            }
            let {status, msg, data} = responseData;
            if (responseData.success != null) {
                if (responseData.redirect != null) {
                    status = 2;
                    data = responseData.redirect;
                }
                else {
                    status = responseData.success ? 0 : 1;
                    msg = responseData.message;
                    data = responseData.result;
                }
            }
            response.data = {status, msg, data};
            return response;
        }
        catch (ex) {
            // logger.error(['axiosResponseTransform', store.state.parentLogId, response.data, ex.message]);
            error();
        }
    });

    Vue.prototype.ajax = store.ajax = app.ajax = (method, data, options = {}) => {
        // const logId = guid();
        let config = {
            method: 'post',
            maxRedirects: 0,
            timeout: 30000,
            responseType: 'json',
            headers: {},
            ...options
        };
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        // config.headers['Parent-Log-Id'] = store.state.parentLogId;
        // config.headers['Log-Id'] = logId;
        let postData = {
            ...data,
            method
        };
        config.data = postData;

        if (options.onResponse) {
            $axios.onResponse(options.onResponse);
        }
        return new Promise((resolve, reject) => {
            $axios(config).then(({data: responseData}) => {
                // if (!process.browser) {
                //     logger.info(['axiosServerSuccess', store.state.parentLogId, logId, postData, responseData]);
                // }
                if (options.handleData) {
                    responseData = options.handleData(responseData);
                }
                const {status, msg, data} = responseData;
                if (status === 0) {
                    resolve(data);
                    return;
                }
                if (status === 2) {
                    if (process.browser) {
                        window.location.href = data;
                    } else {
                        redirect(data);
                    }
                    // reject(responseData);
                    return;
                }
                // if (!process.browser) {
                //     logger.error(['axiosServerFail', logId, postData, responseData]);
                // }
                reject(responseData);
                // resolve();
            }).catch(err => {
                // if (!process.browser) {
                //     logger.error(['axiosCatch', logId, postData, err.message]);
                // }
                if (err.response) {
                    if (err.response.status >= 300 && err.response.status < 400) {
                        /* eslint-disable fecs-camelcase */
                        if (process.browser) {
                            window.location.href = err.response.headers.location;
                        } else {
                            redirect(err.response.headers.location);
                        }
                        return;
                    }
                }
                error();
            });
        });
    };
}
