<template>
    <panel id="panel-code">

    </panel>
</template>

<style lang="scss">
#panel-code {
    --size: 300px;
    grid-row: 1 / -1;
    grid-column: 1 / 2;
}
</style>

<script>
import Panel from "./Panel"
export default {
    name: "PanelCode",
    components: {
        Panel
    }
}
</script>