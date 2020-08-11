<template>
  <div class="content">
    <!-- <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide></swiper-slide>
    </swiper> -->
    <div id="login-div">
      <el-form class="login-form" ref="loginForm" :model="loginForm" :rules="rules" label-width="70px" label-position="right" hide-required-asterisk>
        <div class="form-head">用户登录</div>
        <el-form-item label="用户名" class="login-name" prop="name">
          <el-input v-model="loginForm.name" class="login-input" auto-complete="new-password"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" class="login-input" auto-complete="new-password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')" class='login-button'>登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content',
  data () {
    return {
      loginForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  display: flex;
  width: 100%;
  height: 750px;
  background: url(../../assets/images/bg2.png) no-repeat;
  justify-content: flex-end;
  align-items: center;
}
#login-div{
  position: relative;
  width:290px;
  height:350px;
  right: 8%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
}
.login-name{
  padding-top: 30px;
  color: #333!important;
  lable{
    color: #333;
  }
}
.login-input{
  width:90%;
}
.form-head{
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: #fff;
}
.el-form-item__label {
  color: #fff;
}
.login-button {
  width: 92%;
  margin-top: 20px;
}

</style>
