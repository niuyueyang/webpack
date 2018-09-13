<template>
	<h1>{{msg}}</h1>
</template>

<script>
	export default{
		data(){
			return{
				msg:"Hello vue"
			}
		}
	}
</script>

<style scoped="scoped">
	h1{
		color: red;
	}
</style>