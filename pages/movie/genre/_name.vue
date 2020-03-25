<template>
<div>
    <genres :genre="$route.params.name"></genres>
</div>
</template>

<script>
import genres from '~/components/movies/genre/genre.vue';;
export default {
    components: {
        genres
    }
}
</script>
