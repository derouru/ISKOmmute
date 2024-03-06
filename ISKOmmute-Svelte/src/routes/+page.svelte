<script>
	let startPlaceHolder = 'Choose starting point';
	let endPlaceHolder = 'Choose destination';

	let startPlace = '';
	let endPlace = '';

	function handleClick() {
		if (!startPlace || !endPlace) {
            window.alert('Please select both starting point and destination.');
        }
	}
</script>

<div class="container p-10 space-y-4 flex flex-col items-center h-screen">
	<h1>Welcome to ISKOmmute!</h1>

	<select class="select">
		{#if startPlaceHolder}
			<option value="" disabled selected>{startPlaceHolder}</option>
		{/if}
		<option value="AECH">Alumni Engineers Centennial Hall</option>
		<option value="AngTBA">Ang Bahay ng Alumni</option>
		<option value="A2">Area 2</option>
		<option value="AIT">Asian Institute of Tourism</option>
		<option value="Benitez">Benitez Hall</option>
		<option value="Carillon">Carillon Tower</option>
		<option value="CoTRL">Church of the Risen Lord</option>
		<option value="Gyud">Gyud Food Hub</option>
		<option value="IMath">Institute of Mathematics</option>
	</select>

	<select class="select" bind:value={startPlace}>
		{#if endPlaceHolder}
			<option value="" disabled selected>{endPlaceHolder}</option>
		{/if}
		<option value="AECH">Alumni Engineers Centennial Hall</option>
		<option value="AngTBA">Ang Bahay ng Alumni</option>
		<option value="A2">Area 2</option>
		<option value="AIT">Asian Institute of Tourism</option>
		<option value="Benitez">Benitez Hall</option>
		<option value="Carillon">Carillon Tower</option>
		<option value="CoTRL">Church of the Risen Lord</option>
		<option value="Gyud">Gyud Food Hub</option>
		<option value="IMath">Institute of Mathematics</option>
	</select>

	<button class="btn btn-xl variant-filled" on:click={handleClick}>Generate Route</button>


</div>