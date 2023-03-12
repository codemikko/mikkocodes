<script>
	import Head from '$lib/components/layout/Head.svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { config } from '$lib/config';
	import { user } from '$lib/config';
	import Title from '$lib/components/Title.svelte';

	export let data;
	const authors = data.authors;
</script>

<Head title="Contact" />

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<Title title="Contact" />
	</div>
	<div
		class="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center shadow-lg pb-14"
	>
		<div class="flex flex-col items-center py-6 ">
			<img src={user.siteAvatar} alt="logo" class="w-36" /><!--  Add a Contact type of logo -->
		</div>
		<div class="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
			Add something for them to contact me with
</div>

		</div>
		

	</div>

	
	

