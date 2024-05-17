<script>
	import { goto } from "$app/navigation";
	import { startValue } from '$lib/stores';
  	import { endValue } from '$lib/stores';
	import { options } from '$lib/dropdownoptions.js'

	let startPlaceHolder = 'Choose starting point...';
	let endPlaceHolder = 'Choose destination...';

	let startPlace = '';
	let endPlace = '';

	function handleClick() {
		if (!startPlace || !endPlace) {
            window.alert('Please select both starting point and destination.');
        } else if (startPlace === endPlace) {
			window.alert('Starting point and destination cannot be the same.');
		} else {
			window.alert('Getting route from ' + startPlace + ' to ' + endPlace + '...');
			startValue.set(startPlace);
			endValue.set(endPlace);
			const url = `/generatedroute`;
			goto(url);
		}
	}
</script>

<svelte:head>
	<title>Home | ISKOmmute</title>
</svelte:head>

<div class="container p-10 space-y-4 flex flex-col items-center justify-center h-screen">
	<h1 class="wdywtg-text">Where do you want to go?</h1>

	<select id="select-start" class="select" bind:value={startPlace}>
		{#if startPlaceHolder}
        	<option value="" disabled selected>{startPlaceHolder}</option>
    	{/if}
		{#each options as option (option.value)}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>

	<select id="select-dest" class="select" bind:value={endPlace}>
		{#if endPlaceHolder}
        	<option value="" disabled selected>{endPlaceHolder}</option>
    	{/if}
		{#each options as option (option.value)}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>

	<button id="generateBtn" class="btn btn-xl variant-filled generate-route-btn" on:click={handleClick}>Generate Route</button>
</div>

<style>
	.wdywtg-text {
		font-size: 1.4rem;
		text-align: center;
		font-weight: 700;
		/* color: #9C293E; */
		margin-bottom: 1.8rem;
	}

	.generate-route-btn {
		font-size: 1.4rem;
		text-align: center;
		font-weight: 600;
		background-color: #9C293E;
		color: white;
		margin-top: 1.8rem;
	}

	.generate-route-btn:hover {
		background-color: #800000;
	}

	.select {
		border-color: #979797;
		background-color: #F2F2F2;
		text-align: center;
		font-weight: 600;
		color: #979797;
		border-radius: 20px;
	}

</style>