<script>
    import { getDrawerStore } from "@skeletonlabs/skeleton";
    import { page } from '$app/stores'; // Import the page store

    const drawerStore = getDrawerStore();

    function drawerClose(){
        drawerStore.close();
    }

    const links_lst = [
        ['/', 'Home'],
        //['/settings', 'Settings'],
        ['/tos', 'Terms of Service'],
        ['/privacypolicy', 'Privacy Policy'],
        ['/help', 'Help'],
        ['/feedback', 'Feedback']
    ];

</script>

<nav class="list-nav p-4 font-black">
    <ul>
        {#each links_lst as [link, name]}
            <li>
                <a href={link} on:click={drawerClose} class:active={$page.url.pathname === link}>{name}</a>
            </li>
        {/each}
    </ul>
</nav>

<style>
    .active {
        color: #FFFFFF;
        background-color: #9C293E;
    }

    .active:hover {
        background-color: #800000;
    }
</style>