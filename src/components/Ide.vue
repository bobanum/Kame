<template>
    <div class="ide">
        <panel-code/>
        <panel-options/>
        <panel-console/>
        <div class="display"></div>
    </div>
</template>

<style lang="scss">
.ide {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr auto;
}
.panel {
    background-color: hsl(var(--hue), var(--sat), 10%);
    color: hsl(var(--hue), var(--sat), 100%);
    border: 1px solid black;
    display: grid;
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