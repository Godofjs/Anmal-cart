<template>
  <v-navigation-drawer permanent app clipped >
    <v-list-item>
      <v-row>
        <v-avatar class="display">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <v-list-item-title class="title mb-6">Jenry</v-list-item-title>
        <v-list-item-subtitle class="d-flex justify-space-around">
          <span class="num">
            <span class="txt">Cart</span> <br>
            <span class="num">200</span>
          </span>
          <span class="num">
            <span class="txt">Bought</span> <br>
            <span>3</span>
          </span>
          <span class="num">
            <span class="txt">Liked</span> <br>
            <span>400</span>
          </span>
        </v-list-item-subtitle>
      </v-row>
    </v-list-item>
    <v-list>
      <v-list-item to="/" class="item">
        <v-list-item-action >
          <v-icon>mdi-home-outline</v-icon>
        </v-list-item-action>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item to="/search" class="item">
        <v-list-item-action>
          <v-icon>mdi-magnify</v-icon>
        </v-list-item-action>
        <v-list-item-title>Search</v-list-item-title>
      </v-list-item>
      <v-list-item to="/cart" class="item">
        <v-list-item-action >
          <v-icon>mdi-cart</v-icon>
        </v-list-item-action>
        <v-list-item-title>cart</v-list-item-title>
      </v-list-item>
      
      <v-list-item to="/trending" class="item">
        <v-list-item-action >
          <v-icon>mdi-pound</v-icon>
        </v-list-item-action>
        <v-list-item-title>Trending</v-list-item-title>
      </v-list-item>
      <v-list-item to="/messages" class="item">
        <v-list-item-action >
          <v-icon>mdi-email-outline</v-icon>
        </v-list-item-action>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped>
.display {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25%;
  margin-bottom: 2%;
}
.title {
  display: inline-block;
  text-align: center;
}
.txt{
  font-weight: 10px;
  color: black;
}
.num{
  display: inline-block;
  text-align: center;
}
.item:hover{
  background-color: white;
  color: pink;
}
</style>
<script>
export default {
  
}
</script>