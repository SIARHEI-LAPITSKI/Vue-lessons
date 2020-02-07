<template>
    <!--note note-->
    <div class="new-note">
        <label>Title</label>
        <input v-model="note.title" type="text">
        <div class="important">
            <label> Низкий
                <input name="priory" type="radio" checked>
            </label>
            <label> Средний
                <input name="priory" type="radio">
            </label>
            <label> Высокий
                <input name="priory" type="radio">
            </label>
        </div>
        <label>Description</label>
        <textarea v-model="note.descr"></textarea>
        <button class="btn btnPrimary" @click="addNote">New note</button>
    </div>
</template>

<script>
export default {
    props: {
        note: {
            type: Object,
            required: true
        }
    },
    methods: {
        addNote(){
            this.$emit('addNote', this.note)
        }
    }
}
</script>

<style lang="scss">
    .new-note{
        text-align: center;
    }

    .btn{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .important{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>