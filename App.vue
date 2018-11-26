<template>
    <div class="full-width center-content">
        <div>Hello World! {{ name }} WHAT</div>
        <div>Hello World! {{ test }} WHAT</div>
        <br/>
        <button v-on:click="say('')">Say what</button>
        <button v-on:click="remove('')">Remove</button>
        <a href="#" v-on:click="say()">test</a>

    </div>
 </template>

<script>
    export default {
        //console.log("DDD");
        // empty
        name: 'app',
        data: function() {
            return {
                name:"init data",
                test: {test: 123}

            }
        },

        computed: {

        },
        methods: {
            say: function (message) {
                this.message = 'New Date: '+ new Date()
                alert(this.message)
                this.name = this.message;
            },
            remove: function() {
                this.name = "";
            }
        }
    }

</script>
