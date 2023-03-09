<script>
	import Tag from '$lib/components/Tag.svelte';
	import Title from '$lib/components/Title.svelte';
	import { page } from '$app/stores';
	import fuzzySearch from '$utils/search.js';

	export let title = '';
	export const link_type = '';
	export const demo = '';
	export const blog = '';
	export const github = '';
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

			<div class="pl-4">
				{#if tags.length}
					<div class="flex flex-wrap class:border-l-2={search}">
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
								<div class="space-y-9">
									<div>
										<h2 class="text-2xl font-bold leading-8 tracking-tight">
											<a href={`/blog/${project.slug}`} class="text-gray-900 dark:text-gray-100">
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
									{#if project.image}
										<div class=" w-5/6 pb-1">
											<img
												alt={project.title}
												src={project.image}
												class="w-3/5 h-auto drop-shadow-xl"
											/>
										</div>
									{/if}
									<div class="prose max-w-none text-gray-500 dark:text-gray-400">
										{project.description}
									</div>

									{#if project.demo || project.github || project.blog}
										<div class="flex items-center justify-center space-x-2">
											{#if project.demo}
												<a
													href={project.demo}
													class="button text-sm bg-orange-500 shadow-lg shadow-orange-500/50 pb-1 pt-1 pr-4 pl-4 accent-current/0 rounded-lg"
												>
													<i class="fa-solid fa-link" /> Demo
												</a>
											{/if}
											{#if project.github}
												<a
													href={project.github}
													class={'button text-sm bg-blue-500 shadow-lg shadow-blue-500/50 pb-1 pt-1 pr-4 pl-4 accent-current/0 rounded-lg' +
														(project.demo && !project.blog ? ' ml-0' : '')}
													style={project.demo && !project.blog ? 'margin-left: 0;' : ''}
												>
													<i class="fa-brands fa-github" /> GitHub
												</a>
											{/if}
											{#if project.blog}
												<a
													href={project.blog}
													class={'button text-sm bg-blue-500 shadow-lg shadow-blue-500/50 pb-1 pt-1 pr-4 pl-4 accent-current/0 rounded-lg' +
														(project.demo && !project.github ? ' ml-0' : '')}
													style={project.demo && !project.github ? 'margin-left: 0;' : ''}
												>
													<i class="fa-solid fa-link" /> Blog
												</a>
											{/if}
										</div>
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
