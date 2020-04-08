<template>
    <panel id="panel-code">
        <ace v-model="content" @init="editorInit" lang="javascript" theme="chrome" width="400" height="200"></ace>
    </panel>
</template>

<style lang="scss">
#panel-code {
    --size: 400px;
    grid-row: 1 / -1;
    grid-column: 1 / 2;
}
</style>

<script>
import Panel from "./Panel"
import Ace from "vue2-ace-editor"
export default {
    name: "PanelCode",
    data() {
        return {
            content: "avancer(10);\r\nfor (let x = 0; x < 10; x += 1) {\r\ntourner(5);\r\n}",
        }
    },
    components: {
        Ace,
        Panel,
    },
    methods: {
        editorInit: function () {
            require('brace/ext/language_tools') //language extension prerequsite...
            require('brace/mode/html')                
            require('brace/mode/javascript')    //language
            require('brace/mode/sass')
            require('brace/theme/chrome')
            require('brace/snippets/javascript') //snippet
        }
    }
}
</script>