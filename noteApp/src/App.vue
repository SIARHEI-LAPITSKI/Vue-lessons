<template>
    <div class="wrapper">

        <div class="wrapper-content">
            <section>
                <div class="container">
                    <h1>{{title}}</h1>

                    <message v-if="message" v-bind:message="message" />
                    <!--note note-->
                    <div class="new-note">
                        <input v-model="note.title" type="text">
                        <textarea v-model="note.descr"></textarea>
                        <button @click="addNote">New note</button>
                    </div>

                    <!--note list-->
                    <div class="notes" v-for="(note, index) in notes" :key="index">
                        <div class="note-header">
                            <p>{{ note.title }}</p>
                        </div>
                        <div class="note-body">
                            <p>{{ note.description }}</p>
                            <span>{{ note.date }}</span>
                        </div>

                    </div>
                </div>
            </section>
        </div>

    </div>
</template>

<script>
    import message from '@/components/Message.vue'
    import Message from "./components/Message";
    export default {
        components: {Message},
        component: {
            message,
        },
        data() {
            return {
                title: 'Nodes App',
                message: null,
                note: {
                    title: '',
                    descr: ''
                },
                notes: [
                    {
                        title: 'First note',
                        description: 'Description for first note',
                        date: new Date(Date.now()).toLocaleString()
                    },
                    {
                        title: 'Second note',
                        description: 'Description for second note',
                        date: new Date(Date.now()).toLocaleString()
                    },
                    {
                        title: 'Third note',
                        description: 'Description for third note',
                        date: new Date(Date.now()).toLocaleString()
                    },
                ]
            }
        },
        methods: {
            addNote() {
                // console.log(this.note)
                let {title, descr} = this.note;
                if (title === '') {
                    this.message = 'title cannot be blank';
                    return false;
                }
                this.notes.push({
                    title: title,
                    description: descr,
                    date: new Date(Date.now()).toLocaleString()
                });
                this.message = null;
                this.note.title = '';
                this.note.descr = '';
            }
        }
    }
</script>

<style>

</style>
