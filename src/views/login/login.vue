<template>
  <div class="login">
    <my-header></my-header>
    <my-content></my-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/Header'
import MyFooter from './components/Footer'
import MyContent from './components/Content'
// import MyHeader from '@/views/layout/Header'
// import MyFooter from '@/views/layout/Footer'
// import MyContent from '@/views/layout/Content'

export default {
  name: 'Login',
  components: {
    MyHeader,
    MyFooter,
    MyContent
  }
}
</script>
