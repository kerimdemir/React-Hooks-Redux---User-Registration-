/* eslint-disable camelcase */

import ajax from './AxiosService';

const TokenGenerator = require('uuid-token-generator');
const token = new TokenGenerator();

const API_URL = 'https://example.com';
const ApiService = function () {
    const login = (data) => {
        //return ajax.post(API_URL + '/login', data);
        return token.baseEncoding;
    };

    const getUser = () => {
        return ajax.get(API_URL + '/core/me');
    };

    return {
        login,
        getUser,
    };
};

export default ApiService();
