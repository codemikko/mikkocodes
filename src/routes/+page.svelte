<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';
	import { user } from '../lib/config.js';
	import { onMount } from 'svelte';

	let userPresence = {};
	const SPOTIFY_ICON = '/src/spotify.png'; // set the path to your spotify icon
	const VSCODE_ICON = '/src/vscode.png'; // set the path to your VSCode icon

	async function fetchPresence() {
		const res = await fetch('https://api.lanyard.rest/v1/users/625796542456004639');
		if (res.ok) {
			userPresence = await res.json();
			console.log(userPresence); // add this line for debugging
		}
	}

	onMount(() => {
		fetchPresence();
		// poll the API every 5 seconds
		setInterval(fetchPresence, 5000);
	});

	export let data;
	let posts = data.posts;

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

	// get the text to display based on whether the user is listening to Spotify or coding in VSCode
	$: statusText = inVSCode
		? 'Currently coding a storm'
		: currentActivity
		? `Listening to ${currentSong}`
		: 'Online';

	// get the icon to display based on whether the user is listening to Spotify or coding in VSCode
	$: statusIcon = inVSCode ? VSCODE_ICON : currentActivity ? SPOTIFY_ICON : null;
</script>

<div class="space-y-2 pb-">
	<div class="flex space-y-2 pb- sm:pb-32 py-36">
		<div class="rounded-full mb-4 md:mb-0">
			<div class="flex items-end">
				<div
					smart-image="true"
					class="rounded-full h-30 w-30 md:h-50 md:w-40"
					style="background-image: url({user.siteAvatar}); background-position: center center; background-size: cover;"
				>
					<img
						src={user.siteAvatar}
						alt="avatar"
						loading="lazy"
						class="invisible"
						title="Mikko's Avatar"
					/>
					<!---->
				</div>
				<span class="ml-0">
					Im on<img src={statusIcon} class="w-5 h-5" alt="status icon" />
				</span>
			</div>
		</div>

		<div
			class="rounded-md flex flex-col-reverse -my-20 mx-4 py-10 justify-between md:flex-row md:items-center md:w-8/12"
		>
			<div class="space-y-2">
				<div class="font-semibold text-xl text-neutral-700 md:text-3xl dark:text-neutral-200">
					<h1>Self taught</h1>
					<h1>
						<a
							href="https://www.w3schools.com/whatis/whatis_fullstack_js.asp"
							target="_blank"
							rel="noreferrer noopener"
							class="cursor-help description-link text-blue-700 dark:text-neutral-500">Full-stack</a
						>
						web developer
					</h1>
				</div>
				<p class="text-neutral-300">
					Hi there, my name is Michael, you can call me Mikko. I am a self taught web developer who
					builds complex web apps using frameworks such as
					<a
						href="https://vuejs.org/"
						target="_blank"
						rel="noreferrer noopener"
						class="description-link text-green-600 dark:text-neutral-500"
						style="border-bottom: 2px solid #4fc08d;">Vue.js</a
					>,
					<a
						href="https://reactjs.org/"
						target="_blank"
						rel="noreferrer noopener"
						class="description-link text-blue-700 dark:text-neutral-500"
						style="border-bottom: 2px solid #61dafb;">React.js</a
					>

					and
					<a
						href="https://tailwindcss.com/"
						target="_blank"
						rel="noreferrer noopener"
						class="description-link text-blue-700 dark:text-neutral-500"
						style="border-bottom: 2px solid #2196f3;">Tailwind CSS</a
					>.
				</p>

				<!-- todo: Work on this for realtime in details -->
				{#if userPresence.data}
					{#if userPresence.data.active_on_discord_desktop || userPresence.data.active_on_discord_mobile || userPresence.data.clientID === 'f1c5806b-7bba-4e66-ae58-2f26c7ad6cee'}
						{#if userPresence.data.listening_to_spotify}
							{@html decodeURI(userPresence.data.spotify.track_url)}
							<div class="flex items-center space-x-2 rounded-md text-white mt-4 space-y-6">
								<p class="text-sm font-bold text-gray-500 block -mb-6">Listening too:</p>
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
						{:else}
							<div class="flex items-center space-x-2 rounded-md text-green-500 mt-4 space-y-6">
								<div class="h-5 w-5 rounded-full flex-shrink-0 bg-green-500 -mb-5" />
								<div title="Online" class="text-sm leading-tight truncate">😋nline</div>
							</div>
						{/if}
					{:else}
						<div class="flex items-center space-x-2 rounded-md text-neutral-500 mt-4 space-y-6">
							<div class="bg-gray-500 dark:bg-gray-500 -mb-5" />
							<div title="😭ffline" class="text-sm leading-tight truncate">
								<h2>💤 Offline ᶻ 𝗓 𐰁 👈🏾</h2>
							</div>
						</div>
					{/if}
				{/if}
			</div>
		</div>
	</div>
</div>

<section id="technologies" class="mt-6">
	<h3 class="text-lg text-gray-300 dark:text-neutral-500 px-4 font-medium uppercase">
		Technologies I use
	</h3>
	<div class="flex flex-col space-y-6 mt-8">
		<section>
			<h5
				class="border-b border-gray-400/10 dark:border-neutral-600/10 text-neutral-800 dark:text-neutral-400/70 text-lg mx-4 mb-4 pb-2 font-medium"
			>
				Development
			</h5>
			<div class="grid px-4 md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
				<div
					class="dark:bg-neutral-600/10 bg-gray-100 hover:bg-gray-200/50 text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden dark:hover:bg-neutral-600/15 text-white"
				>
					<div
						class="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center"
						style="background-color: rgba(49, 120, 198, 0.125);"
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="flex-shrink-0 h-5 w-5"
							><path d="M0 0h24v24H0V0z" fill="#fff" />
							<path
								d="M0 12v12h24V0H0v12zm19.34-.956c.61.152 1.075.423 1.502.865.221.236.549.667.575.77.008.03-1.036.73-1.669 1.123-.022.015-.114-.083-.217-.236-.309-.45-.632-.644-1.128-.678-.727-.05-1.2.332-1.192.967a.88.88 0 00.103.45c.16.332.457.53 1.39.934 1.718.739 2.453 1.226 2.91 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.171-1.878-.647-2.442-1.272-.221-.244-.651-.88-.625-.926.011-.015.11-.076.221-.141l.892-.514.69-.4.145.213c.201.31.643.732.91.873.766.404 1.817.346 2.335-.118.221-.202.312-.412.312-.72 0-.279-.033-.4-.178-.61-.187-.266-.568-.49-1.65-.96-1.239-.533-1.772-.864-2.26-1.39a3.167 3.167 0 01-.659-1.2c-.091-.34-.114-1.189-.042-1.531.255-1.2 1.158-2.031 2.462-2.279.422-.08 1.406-.05 1.82.054v-.002zm-5.633 1.001l.007.983H10.59v8.876H8.381v-8.876H5.257v-.964l.027-.99c.01-.015 1.912-.022 4.217-.019l4.194.012.012.978z"
								fill="#007ACC"
							/></svg
						>
					</div>
					<span class="flex-1 dark:text-neutral-300 truncate">TypeScript</span>
				</div>
				<div
					class="dark:bg-neutral-600/10 bg-gray-100 hover:bg-gray-200/50 text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden dark:hover:bg-neutral-600/15 text-white"
				>
					<div
						class="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center"
						style="background-color: rgba(66, 184, 131, 0.125);"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							class="flex-shrink-0 h-5 w-5"
							><path
								d="M256 144.03l-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z"
								fill="#35495E"
							/>
							<path
								d="M409.4 47.92L256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z"
								fill="#41B883"
							/></svg
						>
					</div>
					<span class="flex-1 dark:text-neutral-300 truncate">Vue.js</span>
				</div>
				<div
					class="dark:bg-neutral-600/10 bg-gray-100 hover:bg-gray-200/50 text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden dark:hover:bg-neutral-600/15 text-white"
				>
					<div
						class="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center"
						style="background-color: rgba(97, 218, 251, 0.125);"
					>
						<svg
							viewBox="0 0 25 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="flex-shrink-0 h-5 w-5"
							><g fill="#61DAFB" width="25" height="25"
								><path
									d="M23.866 12.448c0-1.474-1.886-2.871-4.776-3.737.667-2.885.37-5.18-.936-5.915a2.065 2.065 0 00-1.038-.254v1.012c.213 0 .385.04.528.118.63.353.904 1.7.69 3.433-.05.426-.134.875-.236 1.334a22.89 22.89 0 00-2.941-.495 22.239 22.239 0 00-1.928-2.268c1.51-1.374 2.928-2.127 3.892-2.127V2.538c-1.274 0-2.942.889-4.628 2.43-1.686-1.532-3.354-2.412-4.628-2.412v1.011c.96 0 2.381.749 3.891 2.114a21.536 21.536 0 00-1.913 2.263 22.053 22.053 0 00-2.946.5 13.426 13.426 0 01-.24-1.316c-.219-1.733.05-3.08.676-3.438.138-.082.32-.118.532-.118V2.56a2.1 2.1 0 00-1.047.254c-1.301.734-1.593 3.025-.922 5.9-2.88.871-4.757 2.264-4.757 3.733 0 1.474 1.885 2.871 4.776 3.737-.667 2.885-.37 5.18.936 5.915.3.172.653.254 1.042.254 1.274 0 2.942-.89 4.628-2.431 1.686 1.533 3.354 2.412 4.627 2.412a2.1 2.1 0 001.047-.254c1.302-.734 1.594-3.025.922-5.9 2.872-.867 4.748-2.264 4.748-3.733zm-6.032-3.025a20.154 20.154 0 01-.625 1.791 24.54 24.54 0 00-1.274-2.15c.658.096 1.292.214 1.9.359zm-2.121 4.83a24.076 24.076 0 01-1.117 1.733 24.64 24.64 0 01-4.178.004 23.454 23.454 0 01-2.085-3.529 24.092 24.092 0 012.075-3.542 24.617 24.617 0 014.179-.004c.384.54.76 1.116 1.12 1.723.353.595.673 1.198.964 1.805a25.182 25.182 0 01-.958 1.81zm1.496-.59c.25.608.463 1.216.639 1.806a21.18 21.18 0 01-1.908.363 25.047 25.047 0 001.269-2.168zm-4.697 4.84c-.431-.436-.862-.92-1.288-1.451.417.018.843.031 1.274.031.435 0 .866-.009 1.287-.031-.417.53-.847 1.015-1.274 1.45zm-3.447-2.671a21.334 21.334 0 01-1.9-.359c.172-.585.385-1.188.626-1.791.19.362.39.725.607 1.088.218.363.44.717.667 1.062zm3.423-9.439c.431.435.862.92 1.288 1.451a29.29 29.29 0 00-1.274-.031c-.435 0-.866.009-1.288.031.417-.53.848-1.016 1.274-1.451zM9.06 9.064a24.949 24.949 0 00-1.269 2.164 19.156 19.156 0 01-.64-1.805c.608-.14 1.247-.263 1.91-.359zm-4.192 5.679c-1.64-.685-2.7-1.583-2.7-2.295s1.06-1.615 2.7-2.295a14.47 14.47 0 011.283-.458c.264.889.612 1.814 1.043 2.762a21.186 21.186 0 00-1.029 2.749c-.458-.141-.894-.295-1.297-.463zm2.492 6.481c-.63-.354-.903-1.7-.69-3.433.051-.427.134-.875.236-1.334.908.218 1.9.386 2.942.495a22.242 22.242 0 001.927 2.267c-1.51 1.375-2.928 2.128-3.891 2.128a1.125 1.125 0 01-.524-.123zm10.988-3.456c.218 1.733-.05 3.08-.676 3.438-.139.082-.32.118-.533.118-.959 0-2.38-.748-3.89-2.114a21.527 21.527 0 001.912-2.263 22.048 22.048 0 002.946-.499c.107.458.19.898.241 1.32zm1.784-3.025a14.44 14.44 0 01-1.283.458 21.491 21.491 0 00-1.043-2.762c.427-.944.77-1.864 1.029-2.749.458.141.894.295 1.301.463 1.64.685 2.701 1.583 2.701 2.295-.005.712-1.065 1.615-2.705 2.295z"
								/>
								<path
									d="M12.498 14.52c1.169 0 2.117-.927 2.117-2.072s-.948-2.073-2.117-2.073c-1.17 0-2.117.928-2.117 2.073s.947 2.073 2.117 2.073z"
								/></g
							></svg
						>
					</div>
					<span class="flex-1 dark:text-neutral-300 truncate">React.js</span>
				</div>
				<div
					class="dark:bg-neutral-600/10 bg-gray-100 hover:bg-gray-200/50 text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden dark:hover:bg-neutral-600/15 text-white"
				>
					<div
						class="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center"
						style="background-color: rgba(227, 76, 38, 0.063);"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="#dd4b25"
							class="flex-shrink-0 h-5 w-5"
							><path
								d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"
							/></svg
						>
					</div>
					<span class="flex-1 dark:text-neutral-300 truncate">HTML5</span>
				</div>
				<div
					class="dark:bg-neutral-600/10 bg-gray-100 hover:bg-gray-200/50 text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden dark:hover:bg-neutral-600/15 text-white"
				>
					<div
						class="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center"
						style="background-color: rgba(56, 178, 172, 0.125);"
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="flex-shrink-0 h-5 w-5"
							><path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M6.333 9.933C7.088 6.911 8.978 5.4 12 5.4c4.533 0 5.1 3.4 7.367 3.967 1.511.377 2.833-.189 3.966-1.7-.755 3.022-2.644 4.533-5.666 4.533-4.534 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.967 1.7zm-5.666 6.8C1.422 13.711 3.31 12.2 6.333 12.2c4.534 0 5.1 3.4 7.367 3.967 1.51.377 2.833-.19 3.967-1.7C16.91 17.489 15.022 19 12 19c-4.533 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.966 1.7z"
								fill="url(#prefix__paint0_linear)"
							/>
							<defs
								><linearGradient
									id="prefix__paint0_linear"
									x1=".667"
									y1="-6.689"
									x2="23.333"
									y2="31.089"
									gradientUnits="userSpaceOnUse"
									><stop stop-color="#2383AE" />
									<stop offset="1" stop-color="#6DD7B9" /></linearGradient
								></defs
							></svg
						>
					</div>
					<span class="flex-1 dark:text-neutral-300 truncate">Tailwind CSS</span>
				</div>
				<div
					class="dark:bg-neutral-600/10 bg-gray-100 hover:bg-gray-200/50 text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden dark:hover:bg-neutral-600/15 text-white"
				>
					<div
						class="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center"
						style="background-color: rgba(51, 153, 51, 0.125);"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#6FA660"
							viewBox="0 0 512 512"
							class="flex-shrink-0 h-5 w-5"
							><path
								d="M429.76 130.07L274.33 36.85a37 37 0 00-36.65 0L82.24 130.06A38.2 38.2 0 0064 162.83V349a38.26 38.26 0 0018.24 32.8L123 406.14l.23.13c20.58 10.53 28.46 10.53 37.59 10.53 32.14 0 52.11-20.8 52.11-54.29V182a8.51 8.51 0 00-8.42-8.58h-22.38a8.51 8.51 0 00-8.42 8.58v180.51a15 15 0 01-6.85 13.07c-5.9 3.6-14.47 2.84-24.14-2.15l-39.06-23.51a1.1 1.1 0 01-.48-.92V165.46a1.32 1.32 0 01.59-1.06l151.84-93a.82.82 0 01.73 0l151.93 93a1.34 1.34 0 01.55 1.1V349a1.28 1.28 0 01-.45 1l-152.06 90.65a1.22 1.22 0 01-.8 0l-38.83-23.06a7.8 7.8 0 00-7.83-.41l-.34.2c-10.72 6.35-13.6 8-23.54 11.62-1.62.59-5.43 2-5.76 5.77s3.29 6.45 6.51 8.32l51.9 31.87a35.67 35.67 0 0018.3 5.07h.58a35.87 35.87 0 0017.83-5.07l155.43-93.13A38.37 38.37 0 00448 349V162.83a38.21 38.21 0 00-18.24-32.76z"
							/>
							<path
								d="M307.88 318.05c-37.29 0-45.24-10.42-47.6-27.24a8.43 8.43 0 00-8.22-7.32h-19.8a8.44 8.44 0 00-8.26 8.58c0 14.58 5.12 62.17 83.92 62.17 24.38 0 44.66-5.7 58.63-16.49S388 311.26 388 292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89 0-5.47 0-18.28 35.46-18.28 25.23 0 38.74 3.19 43.06 20a8.35 8.35 0 008.06 6.67h19.87a8.24 8.24 0 006.16-2.86 8.91 8.91 0 002.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06 0-73.55 20.75-73.55 55.5 0 38.1 28.49 48.87 71.29 53.33 50 5.17 50 12.71 50 19.37.03 10.38-4.28 24.23-41.55 24.23z"
							/></svg
						>
					</div>
					<span class="flex-1 dark:text-neutral-300 truncate">Node.js</span>
				</div>
				<div
					class="dark:bg-neutral-600/10 bg-gray-100 hover:bg-gray-200/50 text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden dark:hover:bg-neutral-600/15 text-white"
				>
					<div
						class="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center"
						style="background-color: rgba(207, 100, 154, 0.063);"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="#cf649a"
							class="ionicon flex-shrink-0 h-5 w-5"
							><path
								d="M511.78 328.07c-1.47-11.92-7.51-22.26-18-30.77a3.58 3.58 0 00-.43-.44l-.53-.38-.17-.12-5.57-4-.19-.14-.71-.5a3.5 3.5 0 00-.83-.35c-17.62-10.49-46.79-17.84-91.42-2.09-10.65-17.92-11.86-32.28-4.73-54.28 1.27-3.83.09-6.36-3.71-8-7.64-3.25-18.1-1.59-25.52.37-3.46.9-5.54 2.86-6.2 5.83-4.7 22-18.36 42.1-31.57 61.5l-.78 1.14c-8.14-17.26-6.45-30.63-.78-47.38 1.13-3.34.24-5.56-2.89-7.22-8.74-4.51-21.85-1.41-27.07.13-6.62 1.93-13.72 19.82-21.65 41.24-2 5.39-3.72 10-4.75 12.15-2.45 5-4.79 10.7-7.27 16.75-5.6 13.69-11.91 29.1-20.93 38.78-3.28-7.25 1.88-18.68 6.89-29.77 5.93-13.11 11.53-25.5 5.08-33.41a11.82 11.82 0 00-8.33-4.32 13.26 13.26 0 00-6.15 1c.67-5.65.7-10.11-.95-15.5-2.36-7.69-8.49-12-16.93-11.77-19.22.56-35.48 14.88-45.75 26.8-6.84 8-22 14.1-35.31 19.45-5.26 2.23-10.26 4.23-14.43 6.23-6.65-5.62-15.1-11.29-24-17.28-25-16.78-53.33-35.81-54.31-61.61-1.4-38.11 42-65.14 79.88-84.43 28.71-14.6 53.67-24.28 76.31-29.57 31.8-7.43 58.66-5.93 79.82 4.44 11.58 5.67 17 18 13.56 30.68-9 32.95-46.29 55.53-78.18 65.69-19.21 6.12-35.56 8.68-50 7.84-18.1-1.05-32.88-10.13-39.2-14a21.18 21.18 0 00-3.2-1.8l-.29-.07a3.21 3.21 0 00-3.19 1c-1.3 1.55-.84 4-.37 5.24 6.15 16.07 18.85 26.22 37.74 30.17a92.09 92.09 0 0018.78 1.79c44.21 0 100.62-25.49 121.34-46.48 14.13-14.3 24.42-29 28.68-54.35 4.45-26.55-13.55-45-31.89-53.5-44.57-20.57-95.19-12.44-129.81-2-40.5 12.21-82.4 34.41-114.94 60.93-40.12 32.67-54.62 63-43.12 90.25 11.81 27.93 40.61 45.4 68.46 62.3 9 5.45 17.56 10.64 25.27 16-2.32 1.13-4.69 2.28-7.1 3.43-23.38 11.33-49.9 24.08-64.61 45.15-10.68 15.35-12.68 30.63-5.94 45.42 3.6 7.87 10 13.21 18.89 15.87A50 50 0 0053 432c17.31 0 36.36-7 46.73-13.47 18.32-11.5 30.19-26.94 35.29-45.89 4.54-16.86 3.45-33.61-3.15-48.56l22.45-11.32c-10.83 36-2.53 57.5 6.59 69.36 3.36 4.37 9.42 7 16.19 7.12s13-2.43 16.52-6.77c6.66-8.25 11.58-17.9 16.11-27.55-.24 6.3.06 12.68 2.21 18.09 1.93 4.87 5.11 8.1 9.21 9.34 4.36 1.33 9.47.21 14.39-3.15 22.17-15.17 37.33-51.58 49.51-80.85 1.73-4.16 3.39-8.16 5-11.9a152.5 152.5 0 0012.5 31.07c1.18 2.14 1.08 3.08-.52 4.84-2.41 2.64-5.77 5.83-9.33 9.21-10.78 10.23-24.2 23-26 34.23-.7 4.5 2.4 8.6 7.21 9.53 14.47 2.88 31.9-1.33 46.64-11.25 13.4-9 18.44-21.55 15-37.19-3.33-15.06 4.27-33.76 22.59-55.62 3 12.53 7 22.66 12.52 31.53l-.15.12c-13.34 11.65-31.62 27.6-28.78 46.95a13.35 13.35 0 005.58 9.22 14.22 14.22 0 0011.2 2.06c17.47-3.67 30.62-11.06 40.18-22.57s6.07-24.27 2.85-34.17c25-6.78 47.26-6.61 68.1.5 11.7 4 20.09 10.57 24.93 19.64 6.09 11.41 2.8 21.94-9.29 29.65-3.71 2.37-5.5 3.82-5.61 5.65a2.65 2.65 0 001 2.23c1.4 1.15 5.72 3.15 15.49-3 9-5.65 14.28-13.34 15.63-23a39 39 0 00-.01-8.01zm-399.73 25.06l-.1 1.28c-1.56 14.64-9 27.4-22.15 38-8.26 6.66-17.23 10.75-25.25 11.53-5.6.54-9.67-.22-12.09-2.27-1.81-1.53-2.78-3.82-3-7-1.64-25.48 38.32-50.8 60.81-59.13a51.39 51.39 0 011.78 17.59zm102.35-71.86c-3.7 21.09-14.49 60.9-31.45 76.35-.81.74-1.49 1-1.8.93s-.55-.44-.8-1c-5.66-13.12-3.57-35.28 5-52.69 6.59-13.42 16-22.31 26.52-25a5.29 5.29 0 011.34-.19 1.58 1.58 0 011 .27 1.64 1.64 0 01.19 1.33zm83.49 76.88c-3.19 3.33-7.56 2.88-6.53 1.66l16.24-17.24c-1.31 5.93-5.18 10.84-9.71 15.58zm67.37-14.91a14.07 14.07 0 01-4.93 1.39c-.46-9.07 8.33-19.28 17-26.09 2.33 9.46-2.44 19.46-12.07 24.7z"
							/></svg
						>
					</div>
					<span class="flex-1 dark:text-neutral-300 truncate">Sass</span>
				</div>
				<div
					class="dark:bg-neutral-600/10 bg-gray-100 hover:bg-gray-200/50 text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden dark:hover:bg-neutral-600/15 text-white"
				>
					<div
						class="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center"
						style="background-color: rgba(0, 199, 183, 0.125);"
					>
						<img
							src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/svelte-icon.png"
							alt="svelte"
							class="fill-black/75 dark:fill-white/90"
							width="18"
							height="18"
						/>
					</div>
					<span class="flex-1 dark:text-neutral-300 truncate">Svelte</span>
				</div>
			</div>
		</section>
		<section>
			<h5
				class="border-b border-gray-400/10 dark:border-neutral-600/10 text-neutral-800 dark:text-neutral-600/70 text-lg mx-4 mb-4 pb-2 font-medium"
			>
				Apps
			</h5>
			<div class="grid px-4 md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
				<div
					class="dark:bg-neutral-600/10 bg-gray-100 hover:bg-gray-200/50 text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden dark:hover:bg-neutral-600/15 text-white"
				>
					<div
						class="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center"
						style="background-color: rgba(1, 101, 169, 0.125);"
					>
						<svg
							viewBox="0 0 100 100"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="flex-shrink-0 h-5 w-5"
							><mask id="prefix__a" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M70.912 99.317a6.223 6.223 0 004.96-.19l20.589-9.907A6.25 6.25 0 00100 83.587V16.413a6.25 6.25 0 00-3.54-5.632L75.874.874a6.226 6.226 0 00-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 00-5.318.236l-5.506 5.009a4.168 4.168 0 00-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 00.004 6.162l5.506 5.01a4.162 4.162 0 005.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 002.143 1.4zM75.015 27.3L45.11 50l29.906 22.701V27.3z"
									fill="#fff"
								/></mask
							>
							<g mask="url(#prefix__a)"
								><path
									d="M96.461 10.796L75.857.876a6.23 6.23 0 00-7.107 1.207l-67.451 61.5a4.167 4.167 0 00.004 6.162l5.51 5.009a4.167 4.167 0 005.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 00-3.539-5.63z"
									fill="#0065A9"
								/>
								<g filter="url(#prefix__filter0_d)"
									><path
										d="M96.461 89.204l-20.604 9.92a6.229 6.229 0 01-7.107-1.207l-67.451-61.5a4.167 4.167 0 01.004-6.162l5.51-5.009a4.167 4.167 0 015.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 01-3.539 5.63z"
										fill="#007ACC"
									/></g
								>
								<g filter="url(#prefix__filter1_d)"
									><path
										d="M75.858 99.126a6.232 6.232 0 01-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 017.108-1.21l20.6 9.908A6.25 6.25 0 01100 16.413v67.174a6.25 6.25 0 01-3.541 5.633l-20.601 9.906z"
										fill="#1F9CF0"
									/></g
								>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M70.851 99.317a6.224 6.224 0 004.96-.19L96.4 89.22a6.25 6.25 0 003.54-5.633V16.413a6.25 6.25 0 00-3.54-5.632L75.812.874a6.226 6.226 0 00-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 00-5.317.236l-5.507 5.009a4.168 4.168 0 00-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 00.004 6.162l5.507 5.009a4.162 4.162 0 005.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 002.143 1.4zM74.954 27.3L45.048 50l29.906 22.701V27.3z"
									fill="url(#prefix__paint0_linear)"
									opacity=".25"
								/></g
							>
							<defs
								><filter
									id="prefix__filter0_d"
									x="-8.394"
									y="15.829"
									width="116.727"
									height="92.246"
									filterUnits="userSpaceOnUse"
									color-interpolation-filters="sRGB"
									><feFlood flood-opacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
									/> <feOffset /> <feGaussianBlur stdDeviation="4.167" />
									<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
									<feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow" />
									<feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" /></filter
								>
								<filter
									id="prefix__filter1_d"
									x="60.417"
									y="-8.076"
									width="47.917"
									height="116.151"
									filterUnits="userSpaceOnUse"
									color-interpolation-filters="sRGB"
									><feFlood flood-opacity="0" result="BackgroundImageFix" />
									<feColorMatrix
										in="SourceAlpha"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
									/> <feOffset /> <feGaussianBlur stdDeviation="4.167" />
									<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
									<feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow" />
									<feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" /></filter
								>
								<linearGradient
									id="prefix__paint0_linear"
									x1="49.939"
									y1=".258"
									x2="49.939"
									y2="99.742"
									gradientUnits="userSpaceOnUse"
									><stop stop-color="#fff" />
									<stop offset="1" stop-color="#fff" stop-opacity="0" /></linearGradient
								></defs
							></svg
						>
					</div>
					<span class="flex-1 dark:text-neutral-300 truncate">VS Code</span>
				</div>
			</div>
		</section>
		<section>
			<h5
				class="border-b border-gray-400/10 dark:border-neutral-600/10 text-neutral-800 dark:text-neutral-600/70 text-lg mx-4 mb-4 pb-2 font-medium"
			>
				Services
			</h5>
			<div class="grid px-4 md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
				<div
					class="dark:bg-neutral-600/10 bg-gray-100 hover:bg-gray-200/50 text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden dark:hover:bg-neutral-600/15 text-white"
				>
					<div
						class="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center"
						style="background-color: rgba(232, 234, 234, 0.063);"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							class="flex-shrink-0 h-5 w-5"
							><path
								d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
								class="fill-black/75 dark:fill-white/90"
							/></svg
						>
					</div>
					<span class="flex-1 dark:text-neutral-300 truncate">GitHub</span>
				</div>
				<div
					class="dark:bg-neutral-600/10 bg-gray-100 hover:bg-gray-200/50 text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden dark:hover:bg-neutral-600/15 text-white"
				>
					<div
						class="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center"
						style="background-color: rgba(255, 202, 40, 0.125);"
					>
						<svg
							viewBox="0 0 32 32"
							xmlns="http://www.w3.org/2000/svg"
							class="flex-shrink-0 h-5 w-5"
							><path
								fill="#ffc24a"
								d="M5.8 24.6l.17-.237 8.02-15.214.017-.161-3.535-6.64a.656.656 0 00-1.227.207z"
							/>
							<path
								fill="#ffa712"
								d="M5.9 24.42l.128-.25 7.937-15.056-3.526-6.666a.6.6 0 00-1.133.206z"
							/>
							<path
								fill="#f4bd62"
								d="M16.584 14.01l2.632-2.7-2.633-5.021a.678.678 0 00-1.195 0l-1.407 2.682V9.2z"
							/>
							<path
								fill="#ffa50e"
								d="M16.537 13.9l2.559-2.62-2.559-4.88a.589.589 0 00-1.074-.047l-1.414 2.729-.042.139z"
							/>
							<path
								fill="#f6820c"
								d="M5.802 24.601l.077-.078.279-.113 10.26-10.222.13-.354-2.559-4.878-8.187 15.645z"
							/>
							<path
								fill="#fde068"
								d="M16.912 29.756l9.288-5.179-2.654-16.331a.635.635 0 00-1.075-.346L5.8 24.6l9.233 5.155a1.927 1.927 0 001.878 0"
							/>
							<path
								fill="#fcca3f"
								d="M26.115 24.534L23.483 8.326a.557.557 0 00-.967-.353L5.9 24.569l9.131 5.1a1.912 1.912 0 001.863 0z"
							/>
							<path
								fill="#eeab37"
								d="M16.912 29.6a1.927 1.927 0 01-1.878 0l-9.158-5.078-.076.078 9.233 5.155a1.927 1.927 0 001.878 0l9.289-5.178-.023-.14z"
							/></svg
						>
					</div>
					<span class="flex-1 dark:text-neutral-300 truncate">Firebase</span>
				</div>
				<div
					class="dark:bg-neutral-600/10 bg-gray-100 hover:bg-gray-200/50 text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden dark:hover:bg-neutral-600/15 text-white"
				>
					<div
						class="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center"
						style="background-color: rgba(0, 199, 183, 0.125);"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 40 40"
							class="flex-shrink-0 h-5 w-5"
							><path
								d="M28.589 14.135l-.014-.006c-.008-.003-.016-.006-.023-.013a.11.11 0 01-.028-.093l.773-4.726 3.625 3.626-3.77 1.604a.083.083 0 01-.033.006h-.015a.104.104 0 01-.02-.017 1.716 1.716 0 00-.495-.381zm5.258-.288l3.876 3.876c.805.806 1.208 1.208 1.355 1.674.022.069.04.138.054.209l-9.263-3.923a.728.728 0 00-.015-.006c-.037-.015-.08-.032-.08-.07 0-.038.044-.056.081-.071l.012-.005 3.98-1.684zm5.127 7.003c-.2.376-.59.766-1.25 1.427l-4.37 4.369-5.652-1.177-.03-.006c-.05-.008-.103-.017-.103-.062a1.706 1.706 0 00-.655-1.193c-.023-.023-.017-.059-.01-.092 0-.005 0-.01.002-.014l1.063-6.526.004-.022c.006-.05.015-.108.06-.108a1.73 1.73 0 001.16-.665c.009-.01.015-.021.027-.027.032-.015.07 0 .103.014l9.65 4.082zm-6.625 6.801l-7.186 7.186 1.23-7.56.002-.01a.136.136 0 01.006-.029c.01-.024.036-.034.061-.044l.012-.005a1.85 1.85 0 00.695-.517c.024-.028.053-.055.09-.06a.09.09 0 01.029 0l5.06 1.04zm-8.707 8.707l-.81.81-8.955-12.942a.424.424 0 00-.01-.014c-.014-.019-.029-.038-.026-.06.001-.016.011-.03.022-.042l.01-.013c.027-.04.05-.08.075-.123l.02-.035.003-.003c.014-.024.027-.047.051-.06.021-.01.05-.006.073-.001l9.921 2.046a.164.164 0 01.076.033c.013.013.016.027.019.043a1.757 1.757 0 001.028 1.175c.028.014.016.045.003.078a.238.238 0 00-.015.045c-.125.76-1.197 7.298-1.485 9.063zm-1.692 1.691c-.597.591-.949.904-1.347 1.03a2 2 0 01-1.206 0c-.466-.148-.869-.55-1.674-1.356L8.73 28.73l2.349-3.643a.15.15 0 01.04-.047c.025-.018.061-.01.091 0a2.434 2.434 0 001.638-.083c.027-.01.054-.017.075.002a.19.19 0 01.028.032L21.95 38.05zM7.863 27.863L5.8 25.8l4.074-1.738a.084.084 0 01.033-.007c.034 0 .054.034.072.065a2.91 2.91 0 00.13.184l.013.016c.012.017.004.034-.008.05l-2.25 3.493zm-2.976-2.976l-2.61-2.61c-.444-.444-.766-.766-.99-1.043l7.936 1.646a.84.84 0 00.03.005c.049.008.103.017.103.063 0 .05-.059.073-.109.092l-.023.01-4.337 1.837zM.831 19.892a2 2 0 01.09-.495c.148-.466.55-.868 1.356-1.674l3.34-3.34a2175.525 2175.525 0 004.626 6.687c.027.036.057.076.026.106a2.776 2.776 0 00-.395.528.16.16 0 01-.05.062c-.013.008-.027.005-.042.002H9.78L.831 19.891zm5.68-6.403l4.491-4.491c.422.185 1.958.834 3.332 1.414 1.04.44 1.988.84 2.286.97.03.012.057.024.07.054.008.018.004.041 0 .06a2.003 2.003 0 00.523 1.828c.03.03 0 .073-.026.11l-.014.021-4.56 7.063a.138.138 0 01-.043.05c-.024.015-.058.008-.086.001a2.274 2.274 0 00-.543-.074c-.164 0-.342.03-.522.063h-.001c-.02.003-.038.007-.054-.005a.21.21 0 01-.045-.051l-4.808-7.013zm5.398-5.398l5.814-5.814c.805-.805 1.208-1.208 1.674-1.355a2 2 0 011.206 0c.466.147.869.55 1.674 1.355l1.26 1.26-4.135 6.404a.155.155 0 01-.041.048c-.025.017-.06.01-.09 0a2.097 2.097 0 00-1.92.37c-.027.028-.067.012-.101-.003-.54-.235-4.74-2.01-5.341-2.265zm12.506-3.676l3.818 3.818-.92 5.698v.015a.135.135 0 01-.008.038c-.01.02-.03.024-.05.03a1.83 1.83 0 00-.548.273.154.154 0 00-.02.017c-.011.012-.022.023-.04.025a.114.114 0 01-.043-.007l-5.818-2.472-.011-.005c-.037-.015-.081-.033-.081-.071a2.198 2.198 0 00-.31-.915c-.028-.046-.059-.094-.035-.141l4.066-6.303zm-3.932 8.606l5.454 2.31c.03.014.063.027.076.058a.106.106 0 010 .057c-.016.08-.03.171-.03.263v.153c0 .038-.039.054-.075.069l-.011.004c-.864.369-12.13 5.173-12.147 5.173-.017 0-.035 0-.052-.017-.03-.03 0-.072.027-.11a.76.76 0 00.014-.02l4.482-6.94.008-.012c.026-.042.056-.089.104-.089l.045.007c.102.014.192.027.283.027.68 0 1.31-.331 1.69-.897a.16.16 0 01.034-.04c.027-.02.067-.01.098.004zm-6.246 9.185l12.28-5.237s.018 0 .035.017c.067.067.124.112.179.154l.027.017c.025.014.05.03.052.056 0 .01 0 .016-.002.025L25.756 23.7l-.004.026c-.007.05-.014.107-.061.107a1.729 1.729 0 00-1.373.847l-.005.008c-.014.023-.027.045-.05.057-.021.01-.048.006-.07.001l-9.793-2.02c-.01-.002-.152-.519-.163-.52z"
								class="fill-black/75 dark:fill-white/90"
							/></svg
						>
					</div>
					<span class="flex-1 dark:text-neutral-300 truncate">Netlify</span>
				</div>
				<div
					class="dark:bg-neutral-600/10 bg-gray-100 hover:bg-gray-200/50 text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden dark:hover:bg-neutral-600/15 text-white"
				>
					<div
						class="p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center"
						style="background-color: rgba(0, 199, 183, 0.125);"
					>
						<img
							src="https://www.svgrepo.com/show/327408/logo-vercel.svg"
							alt="svelte"
							class="fill-black/75 dark:fill-white/90"
							width="18"
							height="18"
						/>
					</div>
					<span class="flex-1 dark:text-neutral-300 truncate">Vercel</span>
				</div>
			</div>
		</section>
	</div>
</section>

<h2 class="text-gray-800 dark:text-neutral-500 px-4 text-lg font-medium">
	<div class="space-y-2 mt-32 sm:pb-0 uppercase">Latest Posts</div>
	<Blogs class="text-neutral-300" {posts} search={false} count={3} />
</h2>
