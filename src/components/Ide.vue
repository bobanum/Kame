<template>
    <div class="ide">
        <panel-code/>
        <panel-console/>
        <panel-options/>
        <scene style="grid-row-end: span 2" />
        <span class="resize" id="resize1"></span>
        <span class="resize" id="resize2"></span>
    </div>
</template>

<style lang="scss">
.ide {
    --resize-width: 3px;
    display: grid;
    grid-template-columns: 430px 1fr 64px;
    grid-template-rows: 1fr 100px;
    grid-template-areas: "a b c" "d b c";
    grid-gap: var(--resize-width);
    .resize {
        // background-color: red;
        width: var(--resize-width);
        height: var(--resize-width);
    }
}
#resize1 {
    grid-row: 1 / -1;
    grid-column: 1 / span 1;
    justify-self: flex-end;
    margin-right: calc(var(--resize-width) * -1);
    height: auto;
    cursor: ew-resize;
}
#resize2 {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
    align-self: flex-end;
    margin-bottom: calc(var(--resize-width) * -1);
    width: auto;
    cursor: ns-resize;
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