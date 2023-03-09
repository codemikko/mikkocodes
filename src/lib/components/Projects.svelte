<script>
	import Tag from '$lib/components/Tag.svelte';
	import Title from '$lib/components/Title.svelte';
	import SearchBox from '$lib/components/SearchBox.svelte';
	import { page } from '$app/stores';
	import fuzzySearch from '$utils/search.js';

	export let title = '';
	export let link_type = '';
	export let demo = '';
	export let blog ='';
	export let github ='';
	export let subtitle = '';
	export let projects = [];
	export let tags = [];
	export let search = true;
	export let h2 = false;
	export let count = 0;

	if (count) {
		projects = projects.slice(0, count);
	}

	$: filter = $page.url.searchParams.get('query');
	$: currentProjects = filter ? fuzzySearch(projects, filter) : projects;
</script>

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<div class="grid lg:grid-cols-2 gap-4">
			<div>
				<Title {title} {subtitle} {h2} />
			</div>

			<div class="pl-4" class:border-l-2={search}>
				{#if search}
					<SearchBox />
				{/if}

				{#if tags.length}
					<div class="flex flex-wrap">
						{#each tags as tag}
							<div class="mr-5">
								<Tag text={tag.text} size="text-xs" />
								<a
									href={`/tags/${tag.slug}`}
									class="-ml-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-300"
								>
									{` (${tag.count})`}
								</a>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
	{#if !currentProjects.length}
		No project found.
	{:else}
		<ul>
			{#each projects as project}
				<li class="py-12">
					<article>
						<div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
							<div
								class="text-sm font-medium leading-5 text-gray-500 xl:text-right xl:col-span-1"
							/>
							<div class="space-y-5 xl:col-span-3">
								<div class="space-y-6">
									<div>
										<h2 class="text-2xl font-bold leading-8 tracking-tight">
											<a
												href={`/blog/${project.slug}`}
												class="text-gray-900 dark:text-gray-100"
											>
												{project.title}
											</a>
										</h2>
										<ul class="flex space-x-8 text-sm text-slate-500">
											{#if project.date}
												<li>
													<time datetime={project.date}
														>{new Date(project.date).toLocaleDateString()}</time
													>
												</li>
											{/if}
										</ul>
										<div class="flex flex-wrap">
											{#each project.tags as tags}
												<Tag text={tags} />
											{/each}
										</div>
									</div>
									<div class="prose max-w-none text-gray-500 dark:text-gray-400">
										{project.description}
									</div>


									{#if link_type === 'demo'}
											<a href={demo} class="button text-sm bg-orange-500 shadow-lg shadow-orange-500/50 pb-1 pt-1 pr-4 pl-4 accent-current/0 rounded-lg">
												<i class="fa-solid fa-link" /> Demo
											</a>
											{:else if link_type === 'github'}
											<a href={github} class="button text-sm bg-blue-500 shadow-lg shadow-blue-500/50 pb-1 pt-1 pr-4 pl-4 accent-current/0 rounded-lg">
												<i class="fa-brands fa-github" /> GitHub
											</a>
											{:else if link_type === 'blog'}
											<a href={blog} class="button text-sm bg-purple-500 shadow-lg shadow-purple-500/50 pb-1 pt-1 pr-4 pl-4 accent-current/0 rounded-lg">
												<i class="fa-solid fa-link" /> Blog
											</a>
									{/if}



								</div>
							</div>
						</div>
					</article>
				</li>
			{/each}
		</ul>
	{/if}
</div>
