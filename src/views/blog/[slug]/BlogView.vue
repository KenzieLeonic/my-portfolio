<template>
    <div class="blogs">
        Blog {{ $route.params.id }}
    </div>
</template>

<script>
export default {
    computed:{
        blogId(){
            return parseInt(this.$route.params.id)
        }
    }
}

</script>
<style>
    
</style>