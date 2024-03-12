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

<nav class="list-nav p-4">
    <ul>
        <li><a href="/" on:click={drawerClose} class:active={$page.url.pathname === '/'} bind:this={links['/']}>Home</a></li>
        <li><a href="/settings" on:click={drawerClose} class:active={$page.url.pathname === '/settings'} bind:this={links['/settings']}>Settings</a></li>
        <li><a href="/tos" on:click={drawerClose} class:active={$page.url.pathname === '/tos'} bind:this={links['/tos']}>Terms of Service</a></li>
        <li><a href="/privacypolicy" on:click={drawerClose} class:active={$page.url.pathname === '/privacypolicy'} bind:this={links['/privacypolicy']}>Privacy Policy</a></li>
        <li><a href="/help" on:click={drawerClose} class:active={$page.url.pathname === '/help'} bind:this={links['/help']}>Help</a></li>
    </ul>
</nav>