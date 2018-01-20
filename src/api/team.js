import axios from 'axios';
import { shim } from 'promise.prototype.finally';

shim();

function getTeams() {
    const url = 'http://api.ffa.test/api/v1/teams';
    return axios.get(url).then(response => response.data.data);
}

export default {
    getTeams,
};
