<script>
	import { config, navLinks } from '$lib/config';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import { onMount } from 'svelte';

	let userPresence = {};
	const SPOTIFY_ICON =
		'https://res.cloudinary.com/mikkossite/image/upload/v1678519665/330382_music_spotify_icon_feacoc.png'; // set the path to your spotify icon
	const VSCODE_ICON = 'https://i.imgur.com/ChULWgq.png'; // set the path to your VSCode icon

	async function fetchPresence() {
		const res = await fetch('https://api.lanyard.rest/v1/users/625796542456004639');
		if (res.ok) {
			userPresence = await res.json();
		}
	}

	onMount(() => {
		fetchPresence();
		// poll the API every 10 seconds
		setInterval(fetchPresence, 10000);
	});
	// check if the user is currently listening to Spotify
	$: currentActivity = userPresence?.data?.spotify?.timestamps?.start;

	// get the details of the currently playing song
	$: currentSong = userPresence?.data?.spotify?.song;

	// check if the user is currently in VSCode
	$: inVSCode =
		userPresence?.data?.discord_status === 'dnd' &&
		userPresence?.data?.discord_activities?.find(
			(activity) => activity?.name === 'Visual Studio Code'
		);

	$: statusIcon = inVSCode ? VSCODE_ICON : currentActivity ? SPOTIFY_ICON : null;
</script>

<header class="flex items-center justify-between py-10">
	<div>
		<a href="/" aria-label={config.headerTitle}>
			<div class="flex items-center justify-between">
				<div class="mr-3">
					<img
						src="https://res.cloudinary.com/mikkossite/image/upload/v1678067012/icon-white-bg.ico_ov6os6.ico"
						alt="Logo"
						class="h-20 w-auto"
					/>
				</div>
				<div class="hidden text-4xl font-semibold sm:block font-title">
					{config.headerTitle}
				</div>
			</div>
		</a>
	</div>
	<div class="flex items-center text-base leading-5">
		<div class="hidden sm:block">
			{#each navLinks as link}
				<a href={link.href} class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
					>{link.title}</a
				>
			{/each}

			<ThemeSwitch />
			<MobileMenu />
		</div>
	</div>
</header>
<div class="flex justify-end -mr-px">
	{#if userPresence.data && userPresence.data.active_on_discord_desktop}
		{#if userPresence.data.listening_to_spotify}
			<div class="flex items-center space-x-2.5 rounded-md text-white mt-4 absolute">
				<p class="text-sm font-bold text-gray-500 block -mb-6" />
				<br />
				<img
					src={userPresence.data.spotify.album_art_url}
					alt="Album art"
					class="h-14 w-14 rounded-full flex-shrink-0 -mb-5"
				/>

				<div class="text-sm leading-tight">
					<a
						href="https://open.spotify.com/track/{userPresence.data.spotify.track_id}"
						target="_blank"
						rel="noreferrer"
					>
						<span class="block text-green-500">{userPresence.data.spotify.song}</span>
						<span class="block text-xs">{userPresence.data.spotify.artist}</span>
					</a>
					<p class="text-xs">{userPresence.data.spotify.album}</p>
				</div>
			</div>
		{:else}Playing an Ad ...{/if}
	{:else}...{/if}
</div>

{#if userPresence.data && userPresence.data.active_on_discord_desktop}
	{#if (userPresence.data.application_id = '782685898163617802')}
		<div class="flex items-center space-x-2.5 rounded-md text-white mt-4 absolute">
			<p class="text-sm font-bold text-gray-500 block -mb-6" />
			screem
		</div>{/if}{/if}
