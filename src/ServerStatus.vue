<template>
    <div>
        Server status: {{ Status }} 
        <br />
        <button @click="ChangeStatus">Change</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                Status: "Critical"
            }
        },
        methods: {
            ChangeStatus() {
                this.Status = "Normal";
            }
        }
    }
</script>

<style scoped>

</style>