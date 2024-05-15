<script>
    let feedback = '';
    let rating = 0; 
    let lastRating = 0;

    function handleClick(event) {
    const clickedRating = parseInt(event.target.value);

    // Iterate through stars and turn them yellow up to the clicked star
    const stars = document.querySelectorAll('.rating__label');
    for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];
        if (parseInt(star.value) <= clickedRating) {
            star.style.color = 'gold';
        } else {
            star.style.color = 'gray';
        }
    }
    //Update rating
    rating = clickedRating;
    lastRating = clickedRating;
    }

    function handleRatingChange(event) {
    rating = parseInt(event.target.value);
    }

    function handleSubmit() {
    if (!feedback && rating === 0) {
        window.alert('Feedback cannot be empty.');
    } else {
        window.alert(`Thank you for your feedback! Your input is valuable to us.`);
        const data = `Rating: ${rating} stars\nFeedback: ${feedback}\n`
        const blob = new Blob([data], { type: 'text/plain' });
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

<svelte:head>
    <title>Feedback | ISKOmmute</title>
</svelte:head>

<title>Iskommute Feedback</title>

<div class="container p-10 space-y-4 flex flex-col items-center justify-center h-screen">
    <h1>Iskommute Feedback</h1>
    <p>We value your feedback! If you have any suggestions, questions, or encounter any issues while using Iskommute, please don't hesitate to contact us using the form below. Your input helps us improve Iskommute for everyone.</p>

    <h2>Feedback Form</h2>
    <p>Rate your experience:</p>
    <div class="rating flex">
        {#each [5, 4, 3, 2, 1] as number}
            <input type="radio" id={`star${number}`} name="rating" value={number} class="rating__input" on:click={handleClick} on:change={handleRatingChange}>
            <!-- <label for={`star${number}`} class="rating__label">&#9733;</label> -->
            <button class="rating__label" id={`stars${number}`} value={number} on:click={handleClick}>&#9733;</button>
        {/each}
    </div>
    <p>Feedback:</p>
    <div class = "flex justify-center items-center">
        <form class="w-full max-w-lg" on:submit|preventDefault={handleSubmit}>
            <textarea id="feedback-txtarea" bind:value={feedback} required></textarea>
        </form>
    </div>
    <button id="submitBtn" class="btn btn-xl variant-filled submit-feedback-btn" on:click={handleSubmit}>Submit</button>
</div>

<style>
    #submitBtn {
    font-size: 1.4rem;
    text-align: center;
    font-weight: 600;
    background-color: #9C293E;
    color: white;
    margin-top: 1.8rem;
    
    }

    .submit-feedback-btn:hover {
    background-color: #800000;
    }

    .rating {
    direction: rtl;
    }

    .rating__input {
    display: none;
    }

    .rating__label {
    font-size: 2em;
    color: gray;
    cursor: pointer;
    }

</style>