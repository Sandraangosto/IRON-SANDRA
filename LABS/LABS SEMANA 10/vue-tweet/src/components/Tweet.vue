<template>
  <div class="tweet">
    <ProfileImage :image="ImageTweet"/>
    <!-- <img src="https://i.imgur.com/9yw1Fyw.jpg" class="profile" alt="profile" /> -->
    <div class="body">
      <div class="top">
        <span class="user">
          <Name :name="NameTweet" />
           <!-- <span class="name">Ironhack</span> -->
          <Handle :handle="HandleTweet" />
            <!-- <span class="handle">@ironhack</span> -->
        </span>

        <Timestamp :timestamp="TimeStampTweet" />
        <!-- <span class="timestamp">Nov 30, 2020</span> -->
      </div>
     
      <Message :message="MessageTweet"/>
       <!-- <p class="message">
        On December 7th, we will be hosting a #webinar that will introduce you
        to #SQL! Are you ready? 🚀
      </p> -->

      <Actions/>
       <!-- <div class="actions">
        Font Awesome icons
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-share"></i>
      </div> -->
      
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
import Name from "./Name.vue";
import Handle from "./Handle.vue";
import Timestamp from "./Timestamp.vue";
import Message from "./Message.vue";
import ProfileImage from "./ProfileImage.vue";
import Actions from "./Actions.vue";
import User from './User.vue';

defineProps({
  NameTweet: {
    type: String,
  },
  HandleTweet: {
    type: String,
  },
  TimeStampTweet: {
    type: String,
  },
  MessageTweet: {
    type: String,
  },
  ImageTweet: {
    type: String,
  }
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
