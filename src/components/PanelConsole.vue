<template>
    <panel id="panel-console" class="bottom">

    </panel>
</template>

<style lang="scss">
#panel-console {
    --size: 100px;
    grid-row: -2 / -1;
    grid-column: 2 / -1;
}
</style>

<script>
import Panel from "./Panel"
export default {
    name: "PanelConsole",
    components: {
        Panel
    }
}
</script>