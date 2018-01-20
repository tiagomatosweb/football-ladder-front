<template>
    <div class="ladder">
        <select v-model="currentCompetitionId"
                class="form-control">
            <option v-for="competition in competitions"
                    :key="competition.id"
                    :value="competition.id">{{ competition.name }}</option>
        </select>

        <br>

        <div v-if="loader.ladder"
             class="text-center">
            <img src="/static/spinner.svg" alt="">
        </div>

        <template v-else>
            <h1>{{ currentCompetition.name }}</h1>

            <div class="card">
            <div class="card-body">
                <table class="table table-sm mb-0">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>CLUB</th>
                        <th>P</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="(team, index) in ladder" :key="team.id">
                        <td>{{ index+1 }}</td>
                        <td>{{ team.name }}</td>
                        <td>{{ team.points }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </template>
    </div>
</template>

<script>
import { apiCompetition } from '@/api';

export default {
    name: 'ladder',

    created() {
        this.getCompetitions();
        this.getLadder();
    },

    data() {
        return {
            competitions: [],
            ladder: [],
            currentCompetitionId: 1,
            loader: {
                competitions: false,
                ladder: false,
            },
        };
    },

    computed: {
        currentCompetition() {
            const output = this.competitions.filter(item => item.id === this.currentCompetitionId);
            return output.length ? output[0] : {};
        },
    },

    watch: {
        currentCompetitionId(newValue) {
            if (newValue) {
                this.getLadder();
            }
        },
    },

    methods: {
        getCompetitions() {
            this.loader.competitions = true;
            apiCompetition.getCompetitions().then((response) => {
                this.competitions = response;
            }).finally(() => {
                this.loader.competitions = false;
            });
        },

        getLadder() {
            this.loader.ladder = true;
            apiCompetition.getLadder(this.currentCompetitionId).then((response) => {
                this.ladder = response;
            }).finally(() => {
                this.loader.ladder = false;
            });
        },
    },
};
</script>
