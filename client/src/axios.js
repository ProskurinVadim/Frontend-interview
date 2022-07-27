import axios from "axios";

const instance = axios.create({});



instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token !== "undefined" ? `Token ${JSON.parse(token)}` : '';
    return config;
});

export const axiosCancelable = cb => {
    let source;
    return (...args) => {
        if (source) {
            source.cancel();
        }
        source = axios.CancelToken.source();
        return cb({cancelToken: source.token}, ...args);
    }

};
export const wrapThrowable = async throwable => {
    try {
        await throwable();
    } catch (e) {
    }
};

export default instance
