<script>
	import Head from '$lib/components/layout/Head.svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { config } from '$lib/config';
	import { user } from '$lib/config';
	import Title from '$lib/components/Title.svelte';

	export let data;
	const authors = data.authors;
</script>

<Head title="About" />

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<Title title="About" />
	</div>
	<div
		class="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center shadow-lg pb-14"
	>
		<div class="flex flex-col items-center py-6 ">
			<img src={user.siteAvatar} alt="logo" class="w-36" />
			<div class="flex space-x-2 pt-4">
				<SocialIcon icon="mail" url={`mailto:${config.email}`} />
				<SocialIcon icon="github" url={config.github} />
				<SocialIcon icon="linkedin" url={config.linkedin} />
				<SocialIcon icon="twitter" url={config.twitter} />
			</div>
		</div>
		<div class="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
			As a frontend developer, I am a skilled technologist who applies my passion for technology to
			create innovative and creative snippets and components for my clients. My love for technology
			keeps me motivated and excited about what I do, and I am always learning to stay on top of the
			latest trends and best practices in my field. I am an expert in my craft, and I use my
			expertise to empower my clients with the latest frontend technologies.
			<p />
			<p />

			My vision is to establish myself as a respected frontend consultant based on my passion and expertise, and to build a portfolio of successful projects and clients across the world. I aim to be a smart, self-motivated, and driven individual doing what I love.
			<div class="relative">
  <a href="https://codepen.io/MikkoCodes" target="_blank" rel="noopener noreferrer" class="absolute -bottom-16 left-96 inline-block py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" style="text-decoration:none; color:white;">Some of My Doodles</a>
</div>

		</div>
		

	</div>

	{#if authors.length === 0}
		<a
			href="https://github.com/sponsors/codemikko"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-block py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
			style="position: fixed; bottom: 0; right: 0;"
		>
			Sponsor me on GitHub
		</a>
	{:else if authors.length < 6}
		<div class="mt-16 flex flex-col items-end border-t pt-6 gap-0 shadow-lg pb-8">
			<div class="space-y-2 py-8 md:space-y-5">
				<Title h2 title="My Top Contributors" />
				<div class="grid xl:grid-cols-3 grid-cols-2 gap-4">
					{#each authors as author}
						<div class="lg:flex flex-row space-x-3">
							<div class="grow-0 shrink-0 basis-auto w-full lg:w-1/3">
								<img src={author.avatar} alt={author.name} class="w-full rounded-xl mb-4 lg:mb-0" />
							</div>
							<div class="grow-0 shrink-0 basis-auto w-full lg:w-2/3">
								<h5 class="text-lg font-bold">{author.name}</h5>
								<p class="text-gray-500 mb-2">{author.occupation}</p>
								<div class="flex">
									<SocialIcon small icon="mail" url={`mailto:${author.email}`} />
									<SocialIcon small icon="twitter" url={author.twitter} />
									<SocialIcon small icon="linkedin" url={author.linkedin} />
									<SocialIcon small icon="github" url={author.github} />
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<a href="https://github.com/sponsors/codemikko" target="_blank" rel="noopener noreferrer" class="relative bottom-0 -right-12 m-0 font-semibold rounded-lg shadow-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 s-PalH6l0zoH1z py-2 mr-32 px-4">Become a Contributor</a>
		</div>
	{:else}
		<div class="space-y-2 py-8 md:space-y-5">
			<Title h2 title="My Top Contributors" />
			<div class="grid xl:grid-cols-3 grid-cols-2 gap-4">
				{#each authors as author}
					<div class="lg:flex flex-row space-x-3">
						<div class="grow-0 shrink-0 basis-auto w-full lg:w-1/3">
							<img src={author.avatar} alt={author.name} class="w-full rounded-xl mb-4 lg:mb-0" />
						</div>
						<div class="grow-0 shrink-0 basis-auto w-full lg:w-2/3">
							<h5 class="text-lg font-bold">{author.name}</h5>
							<p class="text-gray-500 mb-2">{author.occupation}</p>
							<div class="flex">
								<SocialIcon small icon="mail" url={`mailto:${author.email}`} />
								<SocialIcon small icon="twitter" url={author.twitter} />
								<SocialIcon small icon="linkedin" url={author.linkedin} />
								<SocialIcon small icon="github" url={author.github} />
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>

