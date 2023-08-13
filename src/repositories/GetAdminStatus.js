/* eslint-disable import/no-anonymous-default-export */

import axios from 'axios';

const baseDomain = '';
const baseURL = `${baseDomain}`;
const Repository = axios.create({
    baseURL,
});

export default {
    /**
     * Calls the NodeJS API
     * 
     * @return {Promise<any>}
     */
    getAdminStatus(username) {
        return Repository.get(`adminAccess?UserName=${username}`)
    }
};