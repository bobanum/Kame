<template>
    <div class="ide">
        <panel-code class="left"/>
        <panel-options class="right"/>
        <panel-console class="bottom"/>
        <scene/>
    </div>
</template>

<style lang="scss">
.ide {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr auto;
}

</style>

<script>
import PanelConsole from "@/components/PanelConsole";
import PanelOptions from "@/components/PanelOptions";
import PanelCode from "@/components/PanelCode";
import Scene from "@/components/Scene";
export default {
    name: "Ide",
    components: {
        Scene,
        PanelCode,
        PanelOptions,
        PanelConsole,
    }
}
</script>