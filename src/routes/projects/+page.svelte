<script>
  import Head from '$lib/components/layout/Head.svelte';
  import Projects from '$lib/components/Projects.svelte';

  export let data;
  const projects = data.projects;
  const description = data.projects;
  const tags = data.tags;
</script>

<Head title="Projects" />

<Projects title="All Projects" {projects} {description} {tags} />