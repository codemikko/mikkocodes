<script>
  import { getSortedPostsData } from '../utils/posts.js';
  import ProjectCard from '../components/ProjectCard.svelte';

  // Fetch all project posts sorted by date
  const projects = getSortedPostsData('projects');

</script>

<main>
  {#each projects as project}
    <ProjectCard {project} />
  {/each}
</main>
