/* eslint-disable import/no-anonymous-default-export */
// import Repository from './Repository';

import axios from 'axios';

const baseDomain = '';
const baseURL = `${baseDomain}`;
const Repository = axios.create({
    baseURL,
});

export default {
    /**
     * Calls the NodeJS API for the all profiles information
     * 
     * @return {Promise<any>}
     */
    getAllConnection() {
        return Repository.get('connection')
    }
};