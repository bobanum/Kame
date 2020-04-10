<template>
    <panel id="panel-console">
        <textarea name="" id="" cols="3" rows="0" readonly>(100, -50)</textarea>
        <input @keyup.enter="validate" type="text" name="" id="" value="avancer(10);">
    </panel>
</template>

<style lang="scss">
#panel-console {
    --size: 3px;
    grid-row: -2 / span 1;
    grid-column: 1 / span 1;
    display: grid;
    grid-template-rows: 1fr auto;
    textarea, input {
        font-family: "Monaco", "Menlo", "Ubuntu Mono", "Consolas", "source-code-pro", monospace; 
        font-size: 16px;       
    }
}
</style>

<script>
import Panel from "./Panel"
export default {
    name: "PanelConsole",
    components: {
        Panel
    },
    methods: {
        validate(e) {
            alert(e.target.value);
        }
    }

}
</script>