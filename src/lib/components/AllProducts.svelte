<script lang="ts">
	import ProductCard from './ProductCard.svelte';
	import { allProductsData } from '$lib/data/products';
</script>

<section class="py-12">
	<div class="container mx-auto px-4">
		<div class="flex justify-between items-center mb-8">
			<h2 class="text-3xl font-semibold text-gray-800">All Products</h2>
			<button
				class="text-gray-700 hover:text-blue-600 font-medium border border-gray-300 px-4 py-2 rounded-md text-sm flex items-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-4 h-4 mr-2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.5 6h9.75M10.5 12h9.75m-9.75 6h9.75M3.75 6H7.5m3 12h.008v.008H10.5v-.008zm0-6h.008v.008H10.5v-.008zm0-6h.008v.008H10.5V6z"
					/>
				</svg>
				Filters
			</button>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
			<!-- Note: design shows 3 columns for All Products, adjust lg:grid-cols-X as needed -->
			{#each allProductsData as product}
				<ProductCard {product} />
			{/each}
		</div>
		<!-- Pagination could be added here -->
	</div>
</section>
