<template>
<svg version="1.1" viewBox="-750 -500 1500 1000" width="0" height="0" style="min-width:100%; min-height:100%;" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <clipPath id="clip">
			<rect width="50" height="50" fill="none" stroke="#00f"/>
		</clipPath>
		<pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
			<g clip-path="url(#clip)">
				<path d="m50 5h-50m50 10h-50m50 20h-50m50 10h-50m45-45v50m-10-50v50m-20-50v50m-10-50v50m45-40h-50m50 10h-50m50 10h-50m50 10h-50m40-40v50m-10-50v50m-10-50v50m-10-50v50" fill="none" stroke="#aaa" stroke-width=".5"/>
				<path d="m25 1e-5v50m25-25h-50" fill="none" stroke="#888" stroke-width=".5"/>
				<path d="m0 1e-5v50m50-50v50h-50m50-50h-50" fill="none" stroke="#555" stroke-width=".5"/>
			</g>
		</pattern>
	</defs>
    <rect width="100%" height="100%" x="-750" y="-500" fill="url(#grid)"></rect>
    <kame x="100" y="-50" angle="45"/>
</svg>
</template>

<style lang="scss">
</style>

<script>
import Kame from "./Kame";
export default {
    components: {
        Kame,
    }
}
</script>