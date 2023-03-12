<!-- EDIT LINES 2-20 BEFORE YOU EDIT THE REST OF THE TEMPLATE -->
<script>
	import Head from '$lib/components/layout/Head.svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	// import { config } from '$lib/config';
	// import { user } from '$lib/config';
	import Title from '$lib/components/Title.svelte';

	// export let data;
	// const authors = data.authors;
</script>

<Head title="Contact" />

<div
	class="text-gray-500 dark:text-neutral-600 container mx-auto min-h-screen pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12"
>
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<Title title="Contact" />
	</div>

	<!-- <div class="flex flex-col items-center py-6 ">
			<i class="fa-solid fa-file-contract" style="width: 44px; height: 92px;"></i>
		</div> -->
	<header class="space-y-2 my-12">
		<p>If you have any questions, feel free to contact me.</p>
	</header>
	<!-- Template Editing Starts Here -->

	<div class="grid grid-cols-2 gap-0">

		<a href="https://reflinked.mikko.codes/discordserv" target="_blank" rel="noreferrer">
		<div
			class="rounded-lg card-base rounded-md overflow-x-hidden transition-colors p-4 cursor-pointer items-center flex space-x-4 justify-between hover:bg-neutral-800 hover:bg-neutral-800"
		>
			<div class="overflow-x-hidden leading-relaxed space-y-2">
				<h2 class="font-medium text-black dark:text-white truncate">Discord</h2>
				<p class="text-black/50 dark:text-white/30 text-sm line-clamp-2">
					<span class="text-black/50 dark:text-white/30">Follow my Discord server</span>
				</p>
			</div>
			<span class="fab fa-discord text-2xl" />
		</div></a>

		<a href="https://reflinked.mikko.codes/twitter" target="_blank" rel="noreferrer">
		<div
			class="rounded-lg card-base rounded-md overflow-x-hidden transition-colors p-4 cursor-pointer items-center flex space-x-4 justify-between hover:bg-neutral-800"
		>
			<div class="overflow-x-hidden leading-relaxed space-y-2">
				<h2 class="font-medium text-black dark:text-white truncate">Twitter</h2>
				<p class="text-black/50 dark:text-white/30 text-sm line-clamp-2">
					<span class="text-black/50 dark:text-white/30">Follow me on Twitter</span>
				</p>
			</div>
			<span class="fab fa-twitter text-2xl" />
		</div>
</a>

		<a href="https://reflinked.mikko.codes/github" target="_blank" rel="noreferrer">
		<div
			class="rounded-lg card-base rounded-md overflow-x-hidden transition-colors p-4 cursor-pointer items-center flex space-x-4 justify-between hover:bg-neutral-800"
		>
			<div class="overflow-x-hidden leading-relaxed space-y-2">
				<h2 class="font-medium text-black dark:text-white truncate">CodePen</h2>
				<p class="text-black/50 dark:text-white/30 text-sm line-clamp-2">
					<span class="text-black/50 dark:text-white/30">See my other pens I've made and used</span>
				</p>
			</div>
			<span class="fa-brands fa-codepen text-2xl" />
		</div>
	</a>

		<a href="https://reflinked.mikko.codes/linkedin" target="_blank" rel="noreferrer">
		<div
			class="rounded-lg card-base rounded-md overflow-x-hidden transition-colors p-4 cursor-pointer items-center flex space-x-4 justify-between hover:bg-neutral-800"
		>
			<div class="overflow-x-hidden leading-relaxed space-y-2">
				<h2 class="font-medium text-black dark:text-white truncate">LinkedIn</h2>
				<p class="text-black/50 dark:text-white/30 text-sm line-clamp-2">
					<span class="text-black/50 dark:text-white/30">Connect with me on LinkedIn</span>
				</p>
			</div>
			<span class="fab fa-linkedin-in text-2xl" />
		</div>
		</a>

		<a href="https://reflinked.mikko.codes/fbmikkocodes" target="_blank" rel="noreferrer">
		<div
			class="rounded-lg card-base rounded-md overflow-x-hidden transition-colors p-4 cursor-pointer items-center flex space-x-4 justify-between hover:bg-neutral-800"
		>
			<div class="overflow-x-hidden leading-relaxed space-y-2">
				<h2 class="font-medium text-black dark:text-white truncate">Facebook Messenger</h2>
				<p class="text-black/50 dark:text-white/30 text-sm line-clamp-2">
					<span class="text-black/50 dark:text-white/30">Chat with me on Facebook Messenger</span>
				</p>
			</div>
			<span class="fab fa-facebook-messenger text-2xl" />
		</div>
		</a>

		<a href="https://reflinked.mikko.codes/proton-safeOn" target="_blank" rel="noreferrer">
			<div
				class="rounded-lg card-base rounded-md overflow-x-hidden transition-colors p-4 cursor-pointer items-center flex space-x-4 justify-between hover:bg-neutral-800"
			>
				<div class="overflow-x-hidden leading-relaxed space-y-2">
					<h2 class="font-medium text-black dark:text-white truncate">Email</h2>
					<p class="text-black/50 dark:text-white/30 text-sm line-clamp-2">
						<span class="text-black/50 dark:text-white/30">Send me an email</span>
					</p>
				</div>
				<span class="fas fa-envelope text-2xl" />
			</div>
		</a>

		<a href="https://reflinked.mikko.codes/github" target="_blank" rel="noreferrer">
			<div
				class="rounded-lg card-base rounded-md overflow-x-hidden transition-colors p-4 cursor-pointer items-center flex space-x-4 justify-between hover:bg-neutral-800"
			>
				<div class="overflow-x-hidden leading-relaxed space-y-2">
					<h2 class="font-medium text-black dark:text-white truncate">Github</h2>
					<p class="text-black/50 dark:text-white/30 text-sm line-clamp-2">
						<span class="text-black/50 dark:text-white/30">Check out my other repositories</span>
					</p>
				</div>
				<i class="fab fa-github text-2xl" />
			</div>
		</a>


		<a href="https://reflinked.mikko.codes/JjapjZp" target="_blank" rel="noreferrer">
			<div
				class="rounded-lg card-base rounded-md overflow-x-hidden transition-colors p-4 cursor-pointer items-center flex space-x-4 justify-between hover:bg-neutral-800"
			>
				<div class="overflow-x-hidden leading-relaxed space-y-2">
					<h2 class="font-medium text-black dark:text-white truncate">Get This Pen</h2>
					<p class="text-black/50 dark:text-white/30 text-sm line-clamp-2">
						<span class="text-black/50 dark:text-white/30">Do you like this pen? Grab it here</span>
					</p>
				</div>
				<i class="fa-solid fa-code-fork text-2xl" />
			</div>
		</a>
	</div>
	
</div>






<!-- svelte-ignore a11y-missing-attribute -->
<iframe
	src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2745.8185174076275!2d-78.9541436550812!3d35.07306377690059!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1678589520383!5m2!1sen!2sus"
	width="100%"
	height="300"
	style="border:0;"
	allowfullscreen="false"
	loading="lazy"
	referrerpolicy="no-referrer-when-downgrade"
/>
