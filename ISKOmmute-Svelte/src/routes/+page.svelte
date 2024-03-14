<script>
	import { goto } from "$app/navigation";

	let startPlaceHolder = 'Choose starting point';
	let endPlaceHolder = 'Choose destination';

	let startPlace = '';
	let endPlace = '';

	let options = [
		{ value: "Alumni Engineers Centennial Hall", label: "Alumni Engineers Centennial Hall" },
		{ value: "Ang Bahay ng Alumni", label: "Ang Bahay ng Alumni" },
		{ value: "Area 2", label: "Area 2" },
		{ value: "Asian Institute of Tourism", label: "Asian Institute of Tourism" },
		{ value: "Benitez Hall", label: "Benitez Hall" },
		{ value: "Carillon Tower", label: "Carillon Tower" },
		{ value: "Church of the Risen Lord", label: "Church of the Risen Lord" },
		{ value: "Gyud Food Hub", label: "Gyud Food Hub" },
		{ value: "Institute of Mathematics", label: "Institute of Mathematics" }
	]

	function handleClick() {
		if (!startPlace || !endPlace) {
            window.alert('Please select both starting point and destination.');
        } else if (startPlace === endPlace) {
			window.alert('Starting point and destination cannot be the same.');
		} else {
			window.alert('Getting route from ' + startPlace + ' to ' + endPlace + '...');
			const url = `/generatedroute`;
			goto(url);
		}
	}
</script>

<div class="container p-10 space-y-4 flex flex-col items-center justify-center h-screen">
	<h1>Where do you want to go?</h1>

	<select class="select" bind:value={startPlace} id="select-start">
		{#if startPlaceHolder}
        	<option value="" disabled selected>{startPlaceHolder}</option>
    	{/if}
		{#each options as option (option.value)}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>

	<select class="select" bind:value={endPlace} id="select-dest">
		{#if endPlaceHolder}
        	<option value="" disabled selected>{endPlaceHolder}</option>
    	{/if}
		{#each options as option (option.value)}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>

	<button class="btn btn-xl variant-filled" id="btn-genroute" on:click={handleClick}>Generate Route</button>
</div>