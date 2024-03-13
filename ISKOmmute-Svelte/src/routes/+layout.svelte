<script lang="ts">
    import '../app.postcss';
    import { AppShell, AppBar, initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
    import { onMount, onDestroy } from 'svelte';
    import Navigation from '$lib/Navigation/Navigation.svelte';
    import { splashScreenStore } from '$lib/stores';
    import { fly, fade } from 'svelte/transition';

    // Exported data
    export let data;

    // Initialize stores
    initializeStores();
    const drawerStore = getDrawerStore();

    // Drawer functions
    function drawerOpen(): void {
        drawerStore.open({});
    }

    function drawerClose(): void {
        drawerStore.close();
    }

    // Splash screen state
    let showSplash: boolean;
    const unsubscribe = splashScreenStore.subscribe(value => {
        showSplash = value;
    });

    // Lifecycle hooks
    onMount(async () => {
        setTimeout(() => {
            splashScreenStore.set(false);
        }, 1000);
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

{#if showSplash}
	<!-- Splash screen -->
    <div class="splash-screen" style="display: flex; justify-content: center; align-items: center; height: 100vh;">
		<h1>Welcome to ISKOmmute!</h1>
	</div>
{:else}
	<div in:fade={{ duration: 400 }}>
		<Drawer>
			<div class="flex items-center p-4"> 
				<button class="fill-token w-3 h-3 cursor-pointer mr-4" on:click={drawerClose} aria-label="Close Drawer">
					<svg viewBox="0 0 50 80">
						<polygon points="45.63,75.8 0,40 45.63,4.2 50,8.6 9.37,40 50,71.4 "/>
					</svg>
				</button>
				<h2>More Options</h2>
			</div>
			<hr />
			<Navigation />
			
		</Drawer>

		<!-- App Shell -->
		<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-32">
			<svelte:fragment slot="header">
				<!-- App Bar -->
				<AppBar>
					<svelte:fragment slot="lead">
						<div class="flex items-center">
							<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
								<span>
									<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
										<rect width="100" height="20" />
										<rect y="30" width="100" height="20" />
										<rect y="60" width="100" height="20" />
									</svg>
								</span>
							</button>
							<strong class="text-xl uppercase">ISKOmmute</strong>
						</div>
					</svelte:fragment>
				</AppBar>
			</svelte:fragment>

			<!-- Left Sidebar Slot -->
			<svelte:fragment slot="sidebarLeft">
				<Navigation />
			</svelte:fragment>

			<!-- Page Route Content -->
			{#key data.url}
				<div 
					in:fly={{ x: -200, duration: 400, delay: 400}}
					out:fly={{ x: 200, duration: 400}}
				>
					<slot />
				</div>
			{/key}
		</AppShell>
	</div>
{/if}

<style>
    :global(.skeleton-drawer) {
        height: 100vh;
        overflow: auto;
    }
</style>