import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as keys from '../keys/login.key';
import ApiService from "../../services/ApiService";
import DeviceInfo from 'react-native-device-info';

export const login = (email, password) => (dispatch) =>

    new Promise(function (resolve, reject) {
            if (email == '') {
                dispatch({
                    type: keys.LOGIN_REJECTED,
                    payload: "E-mail boş bırakılamaz.",
                })
            } else if (password == '') {
                dispatch({
                    type: keys.LOGIN_REJECTED,
                    payload: "Şifre boş bırakılamaz.",
                });

            } else {
                dispatch({
                    type: keys.LOGIN_PENDING,
                    payload: '',
                });
                let urlencoded = new FormData();
                urlencoded.append("username", email);
                urlencoded.append("password", password);
                const token = ApiService.login(urlencoded)
                console.log(token)
                AsyncStorage.setItem('token', token);
                dispatch({
                    type: keys.LOGIN_FULFILLED,
                    payload: token,
                });
            }

        }
    )
;
