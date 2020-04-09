<template>
    <g id="kame" :style="position" style="transform:translate(calc(1px * var(--x)), calc(1px * var(--y))) rotate(calc(1deg * var(--angle)))">
        <use transform="scale(2)" href="../assets/kame.svg#kame"></use>
	</g>
</template>

<style lang="scss">
</style>

<script>
export default {
	props: {
		x: {
			default: 0,
		},
		y: {
			default: 0,
		},
		angle: {
			default: 0,
		},
	},
	computed: {
		position() {
			return {
				"--x": this.x,
				"--y": this.y,
				"--angle": this.angle,
				"--fill": "red",
				"--stroke": "yellow",
			}
		}
	},
}
</script>