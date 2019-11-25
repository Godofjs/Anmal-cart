<template>
    <v-app>
        <sidebar />
        <router-view></router-view>
    </v-app>
</template>
<script>
import sidebar from'../components/sidebar'
export default {
    components: {
        sidebar
    }
}
</script>