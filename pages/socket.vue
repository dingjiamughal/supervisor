<template>
    <section class="section">
        <div id="wrapper" class="container">
            <article class="media">
                <div class="media-content">
                    <div class="field is-grouped">
                        <p class="control is-expanded">
                            <input class="input" type="text" v-model="message" @keyup.enter="sendMessage" placeholder="message">
                        </p>
                        <p class="control">
                            <button class="button is-info" @click="sendMessage">
                                Send
                            </button>
                        </p>
                    </div>
                </div>
            </article>
            <article class="media" v-for="(message, index) in reverseMessages" :key="index">
                <!-- <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png">
                    </p>
                </figure> -->
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>id: {{ message.user }}</strong>
                            <br>
                            {{ message.text }}
                        </p>
                    </div>
                </div>
            </article>

            <article class="media">
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>id: {{ interval.user }}</strong>
                            <br>
                            {{ interval.text }}
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
import io from 'socket.io-client';

export default {
    data() {
        return {
            message: '',
            messages: [],
            interval: {},
            socket: ''
        };
    },
    computed: {
        reverseMessages() {
            return this.messages.slice().reverse();
        }
    },
    mounted() {
        this.getMessage();
    },
    methods: {
        sendMessage() {
            if (!this.message.trim()) {
                return;
            }

            let message = {
                user: this.socket.id,
                text: this.message.trim()
            };

            // this.messages.push(message);
            this.socket.emit('send-message', message);
            this.message = '';
        },
        getMessage() {
            this.socket = io();
            // this.messages = [];
            this.socket.on('update-message', message => {
                console.log('message', message);
                this.messages.push(message || {});
            });

            this.socket.on('interval', interval => {
                this.interval = interval;
            });
        }
    }
};

</script>

<style scoped>
    #wrapper {
        max-width: 600px;
    }

</style>
