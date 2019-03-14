<template>
  <div>
      <div class="search">
       <ab-nav></ab-nav>
       <ab-carousel></ab-carousel>
       <ab-tag></ab-tag>
       <ab-news></ab-news>
      </div>
  </div>
</template>

<script>
import Nav from '@/components/Base/Nav.vue'
import Carousel from '@/components/Base/Carousel.vue'
import Tag from '@/components/Base/Tag.vue'
import News from '@/components/Base/News.vue'
export default {
    name:'Body',
    data(){
        return{

        }
    },
    components:{
        'ab-nav':Nav,
        'ab-carousel':Carousel,
        'ab-tag':Tag,
        'ab-news':News
    }
}
</script>

<style scoped>
.search{
    width: 100%;
    max-width: 1500px;
    height: auto;
    margin-top: -19px;
}
</style>
