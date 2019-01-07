<template>
    <div class="user-wrapper">
        
    </div>
</template>

<script>
import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 500,
    tablet: 800,
    desktop: 1200,
  }
})

export default {
  name: 'User',
  data: function(){
    return{

    }
 }
}
</script>

<style>

</style>
