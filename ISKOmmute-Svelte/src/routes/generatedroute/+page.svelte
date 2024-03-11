<script>
	let startPlaceHolder = 'Choose starting point';
	let endPlaceHolder = 'Choose destination';

	let startPlace = '';
	let endPlace = '';

	let options = [
        { value: "AECH", label: "Alumni Engineers Centennial Hall" },
        { value: "AngTBA", label: "Ang Bahay ng Alumni" },
        { value: "A2", label: "Area 2" },
        { value: "AIT", label: "Asian Institute of Tourism" },
        { value: "Benitez", label: "Benitez Hall" },
        { value: "Carillon", label: "Carillon Tower" },
        { value: "CoTRL", label: "Church of the Risen Lord" },
        { value: "Gyud", label: "Gyud Food Hub" },
        { value: "IMath", label: "Institute of Mathematics" }
    ]

	function handleClick() {
		if (!startPlace || !endPlace) {
            window.alert('Please select both starting point and destination.');
        } else if (startPlace === endPlace) {
			window.alert('Starting point and destination cannot be the same.');
		} else {
			window.alert('Getting route from ' + startPlace + ' to ' + endPlace + '...');
		}
	}
</script>

<div class="container p-10 space-y-4 flex flex-col items-center justify-center h-screen">
	<h1>Placeholder Page for /generatedroute</h1>

	<select class="select" bind:value={startPlace}>
		{#if startPlaceHolder}
        	<option value="" disabled selected>{startPlaceHolder}</option>
    	{/if}
		{#each options as option (option.value)}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>

	<select class="select" bind:value={endPlace}>
		{#if endPlaceHolder}
        	<option value="" disabled selected>{endPlaceHolder}</option>
    	{/if}
		{#each options as option (option.value)}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>

	<button class="btn btn-xl variant-filled" on:click={handleClick}>Generate Route</button>
</div>