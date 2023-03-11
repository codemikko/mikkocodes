<script>
	import { config } from '$lib/config';

	export let title = 'Official Website';
	export let description = config.description;
	export let author = config.author;
	export let url = config.siteUrl;
	export let domain = config.domain;
	export let rtl = false;
	let titleFromUrl = url.split('/').pop().replace('-', ' ');
	export let img = `${url}/og?message=${rtl ? titleFromUrl : title}`;
	let userPresence = {};

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

<svelte:head>
	<title>{title} | {config.title}</title>
	<meta name="description" content={description} />
	<meta name="author" content={author} />
	<script src="https://kit.fontawesome.com/030cb1e2a7.js" crossorigin="anonymous"></script>

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={img} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={domain} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={img} />
</svelte:head>
