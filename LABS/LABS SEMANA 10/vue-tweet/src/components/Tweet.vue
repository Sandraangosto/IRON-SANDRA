<script setup>
import Name from "./Name.vue";
import Handle from "./Handle.vue";
import Timestamp from "./Timestamp.vue";
import Message from "./Message.vue";
import Image from "./Image.vue";
import Actions from "./Actions.vue";

defineProps({
  NameCardTweet: {
    type: String,
  },
  HandleCardTweet: {
    type: String,
  },
  TimeStampCardTweet: {
    type: String,
  },
  MessageCardTweet: {
    type: String,
  },
  ImageCardTweet: {
    type: String,
  }
});
</script>

<template>
  <div class="tweet">
    
    <!-- <img src="https://i.imgur.com/9yw1Fyw.jpg" class="profile" alt="profile" /> -->
    <Image :image="ImageCardTweet"/>

    <div class="body">
      <div class="top">
        <span class="user">

          <!-- <span class="name">Ironhack</span> -->
          <Name :name="NameCardTweet" />

          <!-- <span class="handle">@ironhack</span> -->
          <Handle :handle="HandleCardTweet" />
        </span>

        <!-- <span class="timestamp">Nov 30, 2020</span> -->
        <Timestamp :timestamp="TimeStampCardTweet" />

      </div>

      <!-- <p class="message">
        On December 7th, we will be hosting a #webinar that will introduce you
        to #SQL! Are you ready? 🚀
      </p> -->
      <Message :message="MessageCardTweet"/>

      

      <!-- <div class="actions">
        Font Awesome icons
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-share"></i>
      </div> -->
      <Actions/>
      
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
