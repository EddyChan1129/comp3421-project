<template>
  <div>
    <jheader></jheader>
    <nuxt />
    <jfooter></jfooter>
  </div>
</template>

<script>
import jheader from '~/components/jheader'
import jfooter from '~/components/jfooter'

export default {
  transition: "default",
  components:{
    jheader, jfooter
  },
  head() {
    return {
      title: "Selected furniture - the beginning of a comfortable life",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Discover our selection of high-quality furniture carefully selected for you. Whether it's modern simplicity or classic luxury, you'll find inspiration for your dream home here.",
        },
      ],
    };
  }
}
</script>