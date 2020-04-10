<template>
    <div class="panel">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.panel {
    background-color: hsl(var(--hue), var(--sat), 10%);
    color: hsl(var(--hue), var(--sat), 100%);
    border: 1px solid black;
    display: grid;
    padding: .5em;
}
</style>
