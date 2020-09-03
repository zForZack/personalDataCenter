
<template>
  <div class="menu">
    <div class="left-bar">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-button @click="handleCollapse()">{{isCollapsebutton}}</el-button>
      </el-radio-group> -->
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#313451" text-color="#fff" active-text-color="#5fccff">
        <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="goto(item.path)">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu index="index" v-for="(item,index) in hasChildren" :key="index">
          <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span>{{item.label}}</span> </template>
          <el-menu-item-group>
              <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex">
                {{subItem.label}}
              </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'main-menu',
  data () {
    return {
      isCollapse: false,
      isCollapsebutton: '收起',
      asideMenu: [
        {
          path: '/menu/mainPage', // 地址
          label: '首页', // 菜单标识
          icon: 's-platform' // 图标选取的是element图表，然后拼接到上面
        },
        {
          label: '系统管理', // 菜单标识
          icon: 'setting', // 图标选取的是element图表，然后拼接到上面
          children: [
            {
              path: '/page1',
              label: '用户管理'
            },
            {
              path: '/page1',
              label: '角色管理'
            }
          ]
        }
      ]
    }
  },
  computed: {
    noChildren () {
      return this.asideMenu.filter(item =>
        !item.children
      )
    },
    hasChildren () {
      return this.asideMenu.filter(item =>
        item.children
      )
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleCollapse () {
      this.isCollapse = !this.isCollapse
      this.isCollapsebutton = this.isCollapsebutton === '展开' ? '收起' : '展开'
    },
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="scss">
.left-bar{
  max-width: 15%;
  height: 100%;
  display: inline-block;
  position: absolute;
  left: 0;
  background-color: #313451;
}
.left-bar>ul{
  padding-top: 50px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.el-submenu__title,.el-menu-item {
  text-align: left;
}
.el-menu-item-group__title{
  display: none;
}
.el-menu {
  border: none;
}
.el-menu-item-group ul li{
  background-color: #242539!important;
}
.el-menu-item-group ul li:hover,.el-menu-item:hover{
  background-color: rgb(39, 42, 65)!important;
  color: #5fccff!important;
}
</style>
