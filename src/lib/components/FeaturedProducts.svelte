<script lang="ts">
	import ProductCard from './ProductCard.svelte';
	import { featuredProductsData } from '$lib/data/products';
</script>

<section class="py-12 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="flex justify-between items-center mb-8">
			<h2 class="text-3xl font-semibold text-gray-800">Featured Products</h2>
			<a href="/products/all" class="text-blue-600 hover:text-blue-800 font-medium group">
				View all
				<span
					aria-hidden="true"
					class="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span
				>
			</a>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each featuredProductsData as product}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</section>
