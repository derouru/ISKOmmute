<script>
    import { getDrawerStore } from "@skeletonlabs/skeleton";

    const drawerStore = getDrawerStore();

    function drawerClose(){
        drawerStore.close();
    }
</script>

<nav class="list-nav p-4">
	<ul>
        <li><a href="/" on:click={drawerClose}>Home</a></li>
		<li><a href="/settings" on:click={drawerClose}>Settings</a></li>
		<li><a href="/tos" on:click={drawerClose}>Terms of Service</a></li>
		<li><a href="/privacypolicy" on:click={drawerClose}>Privacy Policy</a></li>
		<li><a href="/help" on:click={drawerClose}>Help</a></li>
	</ul>
</nav>