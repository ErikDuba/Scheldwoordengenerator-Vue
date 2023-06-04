
<template>

	<div style="margin-top:130px" class=" container    text-center">
		<h1 class="md-5">Welkom!</h1>
		<p>Dit is de scheldwoorden generator, klik op de knop om erachter te komen wat jij bent!</p>
		<button class="btn m-4 dark btn-primary" v-on:click="createInsult">Creëer Beledeging</button>
		<h3 class="md-5 ">Jij bent echt een:</h3>
		<h2 class="md-5 glow"> {{ verzameling }}</h2>
	</div>

</template>
<style lang="scss" >
/* change the colors */
$primary: rebeccapurple;
$danger: #dd0000;
$success: lime;
$warning: orange;
$info: aqua;

$body-bg: #f3f3f0;

@import "bootstrap";


	body {
		background-color: #1a1a1a !important;
		color: white !important;
	}
	.dark {
		background-color: #1a1a1a !important;
		color: white !important;
	}
	.glow {
		font-size: 80px;
		color: rgb(75, 60, 149);
		text-align: center;
		animation: glow 1s ease-in-out infinite alternate;
	}

	@-webkit-keyframes glow {
		from {
			text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #42d392,
				0 0 40px #42d392, 0 0 50px #42d392, 0 0 60px #42d392, 0 0 70px #42d392;
		}

		to {
			text-shadow: 0 0 20px #fff, 0 0 30px #5c92e6, 0 0 40px #5c92e6,
				0 0 50px #5c92e6, 0 0 60px #5c92e6, 0 0 70px #5c92e6, 0 0 80px #5c92e6;
		}
	}
</style>
<script>
import scheldwoorden from "./scheldwoorden.json";

export default {
	data() {
		return {
			scheldwoord: "",
			verzameling: "",
		};
	},
	methods: {
		createInsult: function () {
			this.verzameling = "";
			let x = Math.floor(Math.random() * (16 - 1) + 1);
			console.log(scheldwoorden);
			switch (x) {
				case 1:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["scheldWoord"])}`;
					break;
				case 2:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn1"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["scheldWoord"])}`;
					break;
				case 3:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn1"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn2"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["scheldWoord"])}`;
					break;
				case 4:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn1"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn2"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["object"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["scheldWoord"])}`;
					break;
				case 5:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn1"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn2"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["object"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["scheldWoord"])}`;
					this.verzameling += ` met je ${this.pickRandom(scheldwoorden["aandoeningen"])}`;
					break;
				case 6:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn2"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["scheldWoord"])}`;
					break;
				case 7:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["scheldWoord"])}`;
					this.verzameling += ` met je ${this.pickRandom(scheldwoorden["aandoeningen"])}`;
					break;
				case 8:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn1"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["object"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["scheldWoord"])}`;
					this.verzameling += ` met je ${this.pickRandom(scheldwoorden["aandoeningen"])}`;
					break;
				case 9:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn1"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn2"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["object"])}`;
					break;
				case 10:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn2"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["scheldWoord"])}`;
					this.verzameling += ` met je ${this.pickRandom(scheldwoorden["aandoeningen"])}`;
					break;
				case 11:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn1"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["scheldWoord"])}`;
					this.verzameling += ` met je ${this.pickRandom(scheldwoorden["aandoeningen"])}`;
					break;
				case 12:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn1"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["object"])}`;
					break;
				case 13:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn2"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["object"])}`;
					break;
				case 14:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn1"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["object"])}`;
					this.verzameling += ` met je ${this.pickRandom(scheldwoorden["aandoeningen"])}`;
					break;
				case 15:
					this.verzameling += ` ${this.pickRandom(scheldwoorden["Bn2"])}`;
					this.verzameling += ` ${this.pickRandom(scheldwoorden["object"])}`;
					this.verzameling += ` met je ${this.pickRandom(scheldwoorden["aandoeningen"])}`;
					break;
				default:
					this.verzameling += `default = ${this.pickRandom(scheldwoorden["scheldWoord"])}`;
					break;
			}
		},

		pickRandom: function (words) {
			let randomNumber = Math.floor(Math.random() * words.length);
			return words[randomNumber];
		},
	},
	beforeCreate: function () {
		document.body.className = 'home';
	}
};
</script>

