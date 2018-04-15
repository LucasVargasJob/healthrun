/**
 *
 * name: httpAPI
 * @version : 0.0.1
 * @description: A HTTP request abstraction using fetch API.
 *
 */


let httpAPI = {};


(function httpAPIConstructor() {
    'use strict';


    httpAPI.name = 'httpAPI';
    httpAPI.version = '0.0.1';
    httpAPI.description = 'A HTTP request abstraction using fetch API';


    httpAPI.request = (url, params) => {
        return new Promise((resolve, reject) => {
            fetch(url, params).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    };


    httpAPI.get = (url, params) => {
        params.method = 'GET';

        return new Promise((resolve, reject) => {
            httpAPI.request(url, params).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    };


    httpAPI.post = (url, params) => {
        params.method = 'POST';

        return new Promise((resolve, reject) => {
            httpAPI.request(url, params).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    };


    httpAPI.post = (url, params) => {
        params.method = 'DELETE';

        return new Promise((resolve, reject) => {
            httpAPI.request(url, params).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    };


    httpAPI.put = (url, params) => {
        params.method = 'PUT';

        return new Promise((resolve, reject) => {
            httpAPI.request(url, params).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    };
})();

