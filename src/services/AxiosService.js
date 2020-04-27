import React from 'react';
import axios from 'axios';
import {AsyncStorage} from 'react-native';

const AxiosService = function() {
  // GET method
  async function get(endPoint) {
    let Authorization = await AsyncStorage.getItem('token').then(a => {
      console.log('\x1b[31m%s\x1b[0m', a);
      return `Bearer ${a}`;
    });

    console.log(
      '\x1b[31m%s\x1b[0m',
      '------------------------------------------------',
    );

    console.log({METHOD: 'GET', URL: endPoint});
    console.log(
      '\x1b[31m%s\x1b[0m',
      '------------------------------------------------',
    );
    return axios.get(endPoint, {headers: {Authorization}});
  }
  // POST method
  async function post(endPoint, params = {}) {
    console.log(
      '\x1b[31m%s\x1b[0m',
      '------------------------------------------------',
    );
    console.log({METHOD: 'POST', URL: endPoint, PARAMETER: params});
    console.log(
      '\x1b[31m%s\x1b[0m',
      '------------------------------------------------',
    );
    return axios.post(endPoint, params);
  }

  // PATCH method
  async function patch(endPoint, params = {}) {
    let Authorization = await AsyncStorage.getItem('token').then(a => {
      return `Bearer ${a}`;
    });

    console.log(
      '\x1b[31m%s\x1b[0m',
      '------------------------------------------------',
    );
    console.log({METHOD: 'PATCH', URL: endPoint, PARAMETER: params});
    console.log(
      '\x1b[31m%s\x1b[0m',
      '------------------------------------------------',
    );
    return axios.patch(endPoint, params, {headers: {Authorization}});
  }

  //PUT method
  async function put(endPoint, params = {}) {
    let Authorization = await AsyncStorage.getItem('token').then(a => {
      return `Bearer ${a}`;
    });
    console.log(
      '\x1b[31m%s\x1b[0m',
      '------------------------------------------------',
    );
    console.log({METHOD: 'PUT', URL: endPoint, PARAMETER: params});
    console.log(
      '\x1b[31m%s\x1b[0m',
      '------------------------------------------------',
    );
    return axios.put(endPoint, params, {headers: {Authorization}});
  }

  //DEL method
  async function del(endPoint, params = {}) {
    let Authorization = await AsyncStorage.getItem('token').then(a => {
      return `Bearer ${a}`;
    });
    console.log(
      '\x1b[31m%s\x1b[0m',
      '------------------------------------------------',
    );
    console.log({METHOD: 'DEL', URL: endPoint, PARAMETER: params});
    console.log(
      '\x1b[31m%s\x1b[0m',
      '------------------------------------------------',
    );
    return axios.delete(endPoint, {headers: {Authorization}});
  }

  return {
    get,
    post,
    put,
    patch,
    del,
  };
};
// let's return back our create method as the default.
export default AxiosService();
