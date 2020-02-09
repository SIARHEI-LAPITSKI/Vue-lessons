<template>
    <div class="wrapper">

        <div class="wrapper-content">
            <section>
                <div class="container">

                    <div>
                        <button @click="modalFirst = !modalFirst" class="btn btnPrimary">Show first modal</button>
                        <Modal
                                title="First modal"
                                v-show="modalFirst"
                                @close="modalFirst = false"
                        >
                            <div slot="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto assumenda
                                    autem blanditiis consequatur ducimus fuga ipsa modi mollitia nihil odio placeat
                                    quaerat, quasi quia quidem, quis rem sint suscipit.</p>
                                <br>
                                <button
                                        class="btn btnPrimary"
                                        @click="modalFirst = !modalFirst"
                                >
                                    Well done!!!
                                </button>
                            </div>
                        </Modal>
                    </div>
                    <br>
                    <div>
                        <!--second modal-->
                        <button @click="modalSecond.show = !modalSecond.show" class="btn btnPrimary">Show second modal
                        </button>
                        <Modal
                                title="Modal with form"
                                v-show="modalSecond.show"
                                @close="modalSecond.show = false"
                        >
                            <div slot="body">
                                <form @submit.prevent="sumbitSecondForm">
                                    <label>Name:</label>
                                    <input type="text" required v-model="modalSecond.name">

                                    <label>Email:</label>
                                    <input type="email" required v-model="modalSecond.email">

                                    <button class="btn btnPrimary">Отправить</button>
                                </form>
                            </div>
                        </Modal>
                    </div>


                    <br>
                    <div>
                        <!--modal with validate-->
                        <button class="btn btnPrimary" @click="modalValidate = !modalValidate">Show modal with form +
                            validate
                        </button>
                        <ModalValidate v-show="modalValidate" @close="modalValidate = false"/>

                    </div>

                </div>
            </section>
        </div>

    </div>
</template>

<script>
    import Modal from "./components/UI/Modal";
    import ModalValidate from "./components/ModalValidate";

    export default {
        components: {Modal, ModalValidate},
        comments: {
            Modal,
            ModalValidate
        },
        data() {
            return {
                modalFirst: false,
                modalSecond: {
                    show: false,
                    name: '',
                    email: ''
                },
                modalValidate: false
            }
        },
        methods: {
            sumbitSecondForm() {
                console.log({
                    name: this.modalSecond.name,
                    email: this.modalSecond.email
                });
                this.modalSecond.name = '';
                this.modalSecond.email = '';
                this.modalSecond.show = false
            }
        }
    }
</script>

<style>

</style>