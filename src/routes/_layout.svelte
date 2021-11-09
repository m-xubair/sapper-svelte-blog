<script>
	import Header from '../components/Header.svelte';
	import Banner from '../components/Banner.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>


<Header {segment}/>

<Banner />

<div class="content">
	<slot></slot>
</div>
<Footer />