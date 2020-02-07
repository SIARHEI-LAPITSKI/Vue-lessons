<template>
    <Modals
            title="Modal with form + validate"
            @close="$emit('close')"
    >
        <div slot="body">
            <form @submit.prevent="">
                <label>Name:</label>
                <input type="text" required>

                <label>Email:</label>
                <input type="email" required>

                <button class="btn btnPrimary">Отправить</button>
            </form>
        </div>
    </Modals>
</template>

<script>
    import Modals from "./UI/Modal";
    export default {
        components: {
            Modals
        }
    }
</script>

<style scoped>

</style>