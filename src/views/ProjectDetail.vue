<template>
    <div class="singleProject" v-if="currentPage">

        <img :src="image" alt="project screenshot">
        <section class="card">
            <p>{{ currentPage.name }}</p>
            <p>{{ currentPage.description }}</p>
            <a v-bind:href="currentPage.github">Github repo</a>
            <a v-bind:href="currentPage.liveLink">Livelink to the project</a>
        </section>

        <section class="card">
            <p>Features</p>
            <ul>
                <li v-for="feature in currentPage.features" :key="feature">{{feature}}</li>
            </ul>
        </section>
        <section class="card">
            <p>Languages and technologies used</p>
            <ul>
               <li v-for="item in currentPage.used" :key="item">{{item}}</li>
            </ul>
        </section>

    </div>
</template>

<script>
    import projects from '@/assets/projects.json'

    export default {
        name: 'ProjectDetail',
        data () {
            return {
                currentPage: null,
            }
        },
        mounted() {
            const { id } = this.$route.params

            this.currentPage = projects[id] ?? null
        },
        computed: {
            image () {
                if (!this.currentPage) {
                    return
                }
                const fileName = this.currentPage.id

                return require(`../assets/images/${fileName}.png`) // the module request
            }
        },
    }
</script>

<style scoped>
    .singleProject {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 2em;
    }

    img {
        width: 70vw;
    }

    .card:nth-of-type(1) {
        flex-basis: 100%;
    }


    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.6em;
        font-size: 1.3em;
    }

    .card ul {
        list-style: none;
        padding: 0;
    }

    .singleProject p:nth-of-type(2) {
        max-width: 50vw;
        text-align: center;
    }

    .singleProject a,
    .singleProject a:visited {
        color: #fff;
    }

</style>