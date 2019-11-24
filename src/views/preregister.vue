<template>
  <v-content class="content">
    <v-container class="cont">
      <v-row>
        <v-btn to="/register" width="300" class="btn" color="black">
          <span>Register</span>
        </v-btn>
      </v-row>
      <v-row>
        <v-btn to="/login" width="300" class="btn" color="black">
          <span>Login</span>
        </v-btn>
      </v-row>
    </v-container>
  </v-content>
</template>
<style scoped>
.content {
  overflow-y: hidden;
  position: fixed;
  margin: 0;
  background-image: url("../assets/cute_kitten.png");
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  filter: brightness(100%);
}
.cont {
  position: fixed;
  bottom: 0%;
  text-align: center;
  display: inline-block;
  margin-bottom: 0%;
  margin-left: 10%;
}
span {
  color: white;
}
.btn {
  margin: 0.7%;
}
@media screen and (max-width: 360px) and (max-height: 640px) {
  .cont {
    position: fixed;
    bottom: 0%;
    text-align: center;
    display: inline-block;
    margin-bottom: 15%;
    margin-left: 7% !important;
  }
}
@media screen and (max-width: 411px) and (max-height: 731px) {
  .cont {
    position: fixed;
    bottom: 0%;
    text-align: center;
    display: inline-block;
    margin-bottom: 35%;
    margin-left: 12%;
  }
}
@media screen and (max-width: 411px) and (max-height: 823px) {
  .cont {
    position: fixed;
    bottom: 0%;
    text-align: center;
    display: inline-block;
    margin-bottom: 59%;
    margin-left: 12%;
  }
}
@media screen and (max-width: 320px) and (max-height: 568px) {
  .cont {
    position: fixed;
    bottom: 0%;
    text-align: center;
    display: inline-block;
    margin-bottom: 5%;
    margin-left: 2% !important;
  }
}
@media screen and (max-width: 375px) and (max-height: 667px) {
  .cont {
    position: fixed;
    bottom: 0%;
    text-align: center;
    display: inline-block;
    margin-bottom: 20% !important;
    margin-left: 8% !important;
  }
}
@media screen and (max-width: 414px) and (max-height: 736px) {
   .cont {
    position: fixed;
    bottom: 0%;
    text-align: center;
    display: inline-block;
    margin-bottom: 35%;
    margin-left: 12%;
  }
}

</style>