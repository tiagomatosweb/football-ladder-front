import axios from 'axios';
import { shim } from 'promise.prototype.finally';

shim();

function getCompetitions() {
    const url = 'http://api.ffa.test/api/v1/competitions';
    return axios.get(url).then(response => response.data.data);
}

function getLadder(competitionId) {
    const url = `http://api.ffa.test/api/v1/competitions/${competitionId}/ladder`;
    return axios.get(url).then(response => response.data.data);
}

export default {
    getLadder,
    getCompetitions,
};
