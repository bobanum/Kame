<template>
    <div class="ide">
        <panel-code class="left"/>
        <panel-options class="right"/>
        <panel-console class="bottom"/>
        <div class="display"></div>
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
import PanelCode from "@/components/PanelCode";
import PanelOptions from "@/components/PanelOptions";
import PanelConsole from "@/components/PanelConsole";
export default {
    name: "Ide",
    components: {
        PanelCode,
        PanelOptions,
        PanelConsole,
    }
}
</script>