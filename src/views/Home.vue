<template>
  <v-content>
    <v-row>
      <div class="body pl-8">
        <div class="search">
          <v-text-field class="pt-0">
            <v-icon slot="append" color="red">mdi-magnify</v-icon>
          </v-text-field>
        </div>

        <v-container class="mt-n4">
          <h4>Pets and Breeds</h4>
          <v-row>
            <v-card class="trends">
              <v-img src="../assets/panda.jpg" height="194"></v-img>

              <v-card-actions class="d-flex justify-space-around">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="trends">
              <v-img src="../assets/monkey.jpg" height="194"></v-img>

              <v-card-actions class="d-flex justify-space-around">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="trends">
              <v-img src="../assets/lemur.jpg" height="194"></v-img>

              <v-card-actions class="d-flex justify-space-around">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="trends">
              <v-img src="../assets/hummingbird.jpg" height="194"></v-img>

              <v-card-actions class="d-flex justify-space-around">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="trends">
              <v-img src="../assets/pembroke.jpg" height="194"></v-img>

              <v-card-actions class="d-flex justify-space-around">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="trends">
              <v-img src="../assets/whitefox.jpg" height="194"></v-img>

              <v-card-actions class="d-flex justify-space-around">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-container>
        <v-container>
          <h4>Latest Pets and Breeds</h4>
           <v-row>
            <v-card class="trends">
              <v-img src="../assets/rails.jpg" height="194"></v-img>

              <v-card-actions class="d-flex justify-space-around">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="trends">
              <v-img src="../assets/cub.jpg" height="194"></v-img>

              <v-card-actions class="d-flex justify-space-around">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="trends">
              <v-img src="../assets/runpup.jpg" height="194"></v-img>

              <v-card-actions class="d-flex justify-space-around">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="trends">
              <v-img src="../assets/panda.jpg" height="194"></v-img>

              <v-card-actions class="d-flex justify-space-around">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="trends">
              <v-img src="../assets/cuteowl.jpg" height="194"></v-img>

              <v-card-actions class="d-flex justify-space-around">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="trends">
              <v-img src="../assets/kitten.jpg" height="194"></v-img>

              <v-card-actions class="d-flex justify-space-around">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-container>
      </div>
      <sidebar />
    </v-row>
  </v-content>
</template>

<script>
import sidebar from '../components/rightsidebar'
export default {
  components: {
    sidebar
  }
};
</script>
<style scoped>
.body {
  margin-left: 0%;
  width: 90%;
}
.trends {
  width: 31%;
  margin: 1%;
}
.text {
  margin-top: 0%;
  display: inline-block !important;
  text-align: center !important;
}
.search {
  width: 30%;
}
</style>
