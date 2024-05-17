<script>
    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const response = await fetch(event.target.action, {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            window.alert('Thank you for your feedback!');
            window.location.href = '/feedback';
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

    <form 
        id="my-form"
        method="POST"
        action="https://script.google.com/macros/s/AKfycbzSYJjfjw97jBC0lrmsfuDpWPXbpBhhtXV9oV6Pkp2U2Uiv1mgI4UU8S5ocNUG48MiG/exec"
        on:submit={handleSubmit}>

        <h2>Feedback Form</h2>
        <p>Rate your experience:</p>
        <div class="rating flex">
            {#each [5, 4, 3, 2, 1] as number}
                <input type="radio" id={`star${number}`} name="Rating" value={number} class="rating__input">
                <label for={`star${number}`} class="rating__label">&#9733;</label>
            {/each}
        </div>
        <p>Feedback:</p>
        <div class = "flex justify-center items-center">
            <textarea id="feedback-txtarea" name="Feedback" required></textarea>
        </div>
        <button type="submit" id="submitBtn" class="btn btn-xl variant-filled submit-feedback-btn">Submit</button>
    </form>
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

    .rating__input:checked ~ .rating__label {
        color: gold;
    }

    .rating__label {
    font-size: 2em;
    color: gray;
    cursor: pointer;
    }

</style>