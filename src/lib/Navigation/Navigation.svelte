<script>
    import { getDrawerStore } from "@skeletonlabs/skeleton";
    import { page } from '$app/stores'; // Import the page store

    const drawerStore = getDrawerStore();

    function drawerClose(){
        drawerStore.close();
    }

    let links = {}; // Dictionary of references to each link

    // Reactive statement that sets focus to the link that corresponds to the current route
    $: {
        // @ts-ignore
        const link = links[$page.url.pathname];
        if (link) {
            link.focus();
        }
    }
</script>

<nav class="list-nav p-4 font-bold">
    <ul>
        <li><a href="/" on:click={drawerClose} bind:this={links['/']}>Home</a></li>
        <li><a href="/settings" on:click={drawerClose} bind:this={links['/settings']}>Settings</a></li>
        <li><a href="/tos" on:click={drawerClose} bind:this={links['/tos']}>Terms of Service</a></li>
        <li><a href="/privacypolicy" on:click={drawerClose} bind:this={links['/privacypolicy']}>Privacy Policy</a></li>
        <li><a href="/help" on:click={drawerClose} bind:this={links['/help']}>Help</a></li>
        <li><a href="/feedback" on:click={drawerClose} bind:this={links['/feedback']}>Feedback</a></li>
    </ul>
</nav>

