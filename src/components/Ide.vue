<template>
    <div class="ide">
        <div class="panel panel-code">code</div>
        <div class="display"></div>
        <div class="panel panel-options">options</div>
        <div class="panel panel-console">console</div>
    </div>
</template>

<style lang="scss">
.ide {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: 1fr 200px;
}
.panel {
    background-color: hsl(var(--hue), var(--sat), 10%);
    color: hsl(var(--hue), var(--sat), 100%);
    border: 1px solid black;
}
.panel-options {
    grid-row: 1 / 1;
    grid-column: -2 / -1;
}
.panel-code {
    grid-row: 1 / -1;
    grid-column: 1 / 2;
}
.panel-console {
    grid-row: -2 / -1;
    grid-column: 2 / -1;
}
</style>

<script>
export default {
    name: "Ide",
    
}
</script>