<template>
  <div>
    <!-- 路由切换 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- 底部导航 -->
    <tabbar>
      <tabbarItem path="/home">首页</tabbarItem>
      <tabbarItem path="/serach">搜索</tabbarItem>
      <tabbarItem path="/cart">购物车</tabbarItem>
      <tabbarItem path="/profile">我的 </tabbarItem>
    </tabbar>
  </div>
</template>
<script>
import tabbar from "@/components/common/tabbar/tabbar";
import tabbarItem from "@/components/common/tabbar/tabbarItem";
export default {
  components: {
    tabbarItem,
    tabbar,
  },
};
</script>
<style scoped></style>
