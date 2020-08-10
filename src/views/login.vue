<template>
  <div class="login">
    <my-header></my-header>
    <my-content></my-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './layout/Header'
import MyFooter from './layout/Footer'
import MyContent from './layout/Content'

export default {
  name: 'Login',
  components: {
    MyHeader,
    MyFooter,
    MyContent
  }
}
</script>
