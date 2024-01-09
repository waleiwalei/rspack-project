<template>
  <div>
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
    <div>test</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Swiper, SwiperSlide } from 'swiper';

@Component({
  components: { Swiper, SwiperSlide },
})
export default class Activity extends Vue {
  public onSwiper(swiper) {
    console.log(swiper);
  }

  public onSlideChange() {
    console.log('slide change');
  }
}
</script>
