<template>
    <div class="panel">
        <div class="resize"></div>
        <slot/>
    </div>
</template>

<style lang="scss">
.panel {
    background-color: hsl(var(--hue), var(--sat), 10%);
    color: hsl(var(--hue), var(--sat), 100%);
    border: 1px solid black;
    display: grid;
        
    & .resize {
        background-color: hsla(0, 0%, 100%, .2);
        &:hover {
            background-color: hsla(0, 0%, 100%, .5);
        }
    }
    &.right {
        grid-template-columns: 3px 1fr;
        width:var(--size);
        & .resize {
            grid-column: 1 / span 1;
            grid-row: 1 / -1;
            cursor: ew-resize;
        }
    }
    &.left {
        grid-template-columns: 1fr 3px;
        width:var(--size);
        & .resize {
            grid-column: -2 / span 1;
            grid-row: 1 / -1;
            cursor: ew-resize;
        }
    }
    &.top {
        grid-template-rows: 1fr 3px;
        height:var(--size);
        & .resize {
            grid-column: 1 / -1;
            grid-row: -2 / span 1;
            cursor: ns-resize;
        }
    }
    &.bottom {
        grid-template-rows: 3px 1fr;
        height:var(--size);
        & .resize {
            grid-column: 1 / -1;
            grid-row: 1 / span 1;
            cursor: ns-resize;
        }
    }
}
</style>
