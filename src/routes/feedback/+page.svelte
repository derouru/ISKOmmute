<script>
    let feedback = '';

    function handleSubmit() {
        if (!feedback) {
            window.alert('Feedback cannot be empty.');
        } else {
            window.alert(`Thank you for your feedback! Your input is valuable to us.`);
            const blob = new Blob([feedback], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'feedback.txt';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
</script>

<title>Iskommute Feedback</title>

<div class="container p-10 space-y-4 flex flex-col items-center justify-center h-screen">
    <h1>Iskommute Feedback</h1>
    <p>We value your feedback! If you have any suggestions, questions, or encounter any issues while using Iskommute, please don't hesitate to contact us using the form below. Your input helps us improve Iskommute for everyone.</p>

    <h2>Feedback Form</h2>
    <div class = "flex justify-center items-center">
        <form class="w-full max-w-lg" on:submit|preventDefault={handleSubmit}>
            <textarea bind:value={feedback} required></textarea>
        </form>
    </div>
    <button id="generateBtn" class="btn btn-xl variant-filled generate-route-btn" on:click={handleSubmit}>Submit</button>
</div>

<style>
	#generateBtn {
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

</style>