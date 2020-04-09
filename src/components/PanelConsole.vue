<template>
    <panel id="panel-console">

    </panel>
</template>

<style lang="scss">
#panel-console {
    --size: 3px;
    grid-row: -2 / span 1;
    grid-column: 1 / span 1;
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