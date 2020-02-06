<template>
  <div class="wrapper">

    <div class="wrapper-content">
      <section>
        <div class="container">
          <h1>{{title}}</h1>

          <div class="message" v-if="message">
            <p>{{ message }}</p>
          </div>
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
export default {
  data (){
    return {

    }
  }
}
</script>

<style>

</style>
