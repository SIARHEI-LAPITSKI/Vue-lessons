<template>
    <div class="wrapper">

        <div class="wrapper-content">
            <section>
                <div class="container">
                   
                    <!-- message -->
                    <message 
                        v-if="message" 
                        :message="message" 
                    />

                    <!-- new note -->
                    <NewNote 
                        :note="note" 
                        @addNote="addNote" 
                    />
                    
                    
                    <div class="note-header">
                        <!-- title  -->
                        <h1>{{title}}</h1>

                        <!-- search -->
                        <Search 
                            :value="search"
                            placeholder="Find your note"
                            @search="search = $event"
                        />

                        <!-- icons controls -->
                        <div class="icons">
                            <svg :class="{ active: grid }" @click="grid = true" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                            <svg :class="{ active: !grid }" @click="grid = false" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
                        </div>
                    </div>

                    <!-- note list -->
                    <Notes 
                        :notes="notesFilter"
                        @remove="removeNote"
                        :grid="grid"
                    />
                </div>
            </section>
        </div>

    </div>
</template>

<script>
    import Message from "@/components/Message";
    import NewNote from "@/components/NewNote";
    import Notes from "@/components/Notes";
    import Search from "@/components/Search";
    export default {
        components: {
            Message,
            NewNote,
            Notes,
            Search
        },
        data() {
            return {
                title: 'Nodes App',
                search: '',
                message: null,
                grid: true,
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
        computed: { 
            notesFilter(){
                let array = this.notes,
                    search = this.search
                if(!search) return array
                //small
                search = search.trim().toLowerCase()
                //filter
                array = array.filter(function(item){
                    if(item.title.toLowerCase().indexOf(search) !== -1){
                        return item
                    }
                })
                //Error
                return array
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
            },
            removeNote (index){
                this.notes.splice(index, 1)
            }
        }
    }
</script>

<style>

</style>