<template>
    <panel id="panel-options">
    </panel>
</template>

<style lang="scss">
#panel-options {
    --size: 200px;
    grid-row: 1 / 1;
    grid-column: -2 / -1;
}
</style>

<script>
import Panel from "./Panel"
export default {
    name: "PanelOptions",
    components: {
        Panel
    }
}
</script>