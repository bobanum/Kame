<template>
    <div class="panel" id="panel-options">
        div.resize
    </div>
</template>

<style lang="scss">
#panel-options {
    grid-row: 1 / 1;
    grid-column: -2 / -1;
    width:200px;
    grid-template-columns: 1fr auto;
    .resize {
        border:1px solid black;
        padding: 1px;
        grid-row: ;
    }
}
</style>

<script>
export default {
    name: "PanelOptions"
}
</script>