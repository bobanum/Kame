<template>
    <panel id="panel-code">
        <div class="toolbar">
            <ul>
                <li @click="clickplay"><svg viewBox="0 0 32 32"><use href="../assets/icons.svg#play"/></svg></li>
                <li><svg viewBox="0 0 32 32"><use href="../assets/icons.svg#skip"/></svg></li>
                <li><svg viewBox="0 0 32 32"><use href="../assets/icons.svg#in"/></svg></li>
                <li><svg viewBox="0 0 32 32"><use href="../assets/icons.svg#out"/></svg></li>
                <li><svg viewBox="0 0 32 32"><use href="../assets/icons.svg#pause"/></svg></li>
            </ul>
        </div>
        <textarea name="code" id="code" cols="3" rows="1">avancer(10);
for (let x = 0; x < 10; x += 1) {
    tourner(5);
}</textarea>
    </panel>
</template>

<style lang="scss">
#panel-code {
    --size: 400px;
    grid-row: 1 / -2;
    grid-column: 1 / span 1;
    grid-template-rows: auto 1fr;
}
.toolbar {
    ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    svg {
        width: 32px;
        height: 32px;
        fill: white;
    }
}
</style>

<script>
import Panel from "./Panel"
import ace from "brace"
export default {
    name: "PanelCode",
    data() {
        return {
            content: "avancer(10);\r\nfor (let x = 0; x < 10; x += 1) {\r\ntourner(5);\r\n}",
        }
    },
    mounted() {
        console.log(ace);
        require('brace/mode/javascript')    //language
        require('brace/theme/twilight')
        var editor = ace.edit("code", {
            mode: "brace/mode/javascript",
            selectionStyle: "text"
        });
        editor.setTheme("ace/theme/twilight")
    },
    components: {
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
        },
        clickplay() {
            // var code = this.$refs.ace.editor.getValue()
            // var t = this.$refs.ace.editor.session.bgTokenizer.getTokens(2);
            // var t2 = this.$refs.ace.editor.session.bgTokenizer.getState(2);
            // var ace = require("brace");
            // var Range = ace.acequire('ace/range').Range;
            // this.$refs.ace.editor.session.addMarker(new Range(1, 0, 1, 10), "ace_active-line", "fullLine");
            // console.log(new Range(1, 0, 3, 10));
        },
    },
}
</script>