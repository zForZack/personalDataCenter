<template>
  <div class="content">
    <transition-group tag='ul' name='img' class="transul">
      <li v-for='(image,index) in imgs' :key='image.id' v-show='index===mark'>
        <div class="divImg" :style="{backgroundImage: 'url('+ image.url+')'}"></div>
      </li>
    </transition-group>
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
      },
      mark: 0,
      imgs: [
        {
          id: '1',
          url: require('../../assets/images/bg1.png')
        },
        {
          id: '2',
          url: require('../../assets/images/bg2.png')
        },
        {
          id: '3',
          url: require('../../assets/images/bg3.png')
        }
      ]
    }
  },
  created () {
    this.play()
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
    },
    autoPlay () {
      if (this.mark < this.imgs.length - 1) {
        this.mark++
      } else {
        this.mark = 0
      }
    },
    play () {
      setInterval(this.autoPlay, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  position: relative;
  display: flex;
  width: 100%;
  height: 581px;
  background: url(../../assets/images/bg2.png) no-repeat;
  justify-content: flex-end;
  align-items: center;
  .transul{
    position: absolute;
    left: -40px;
    top: 0;
    display: inline;
    margin: 0;
    list-style-type: none;
  }
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

.content ul li {
  position: absolute;
  overflow: hidden;
}

.content .divImg {
  background-position: 0px;
  background-size: cover;
  background-repeat: no-repeat;
  width: 1535px;
  height: 581px;
}

.img-enter-active,
.img-leave-active {
  transition: all 4s;
}

.img-enter,
.img-leave-to {
  opacity: 0;
}

.img-enter-to,
.img-leave {
  opacity: 1;
}

</style>
