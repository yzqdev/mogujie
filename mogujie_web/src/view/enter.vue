<template>
  <div>
    <!-- 路由切换 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- 底部导航 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/enter/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/enter/search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item to="/enter/cart" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/enter/profile" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
<!--    <tabbar>-->
<!--      <tabbarItem path="/home">首页</tabbarItem>-->
<!--      <tabbarItem path="/serach">搜索</tabbarItem>-->
<!--      <tabbarItem path="/cart">购物车</tabbarItem>-->
<!--      <tabbarItem path="/profile">我的 </tabbarItem>-->
<!--    </tabbar>-->
  </div>
</template>
<script>
import tabbar from "@/components/common/tabbar/tabbar";
import tabbarItem from "@/components/common/tabbar/tabbarItem";
export default {
  data(){
    return {
      active:0
    }
  },
  components: {
    tabbarItem,
    tabbar,
  },
};
</script>
<style scoped></style>
