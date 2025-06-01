<script lang="ts">
	import { categoriesData } from '$lib/data/products';
</script>

<section class="py-12">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-semibold text-gray-800 mb-8">Product Categories</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each categoriesData as category}
				<div
					class="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
				>
					<img src={category.image} alt={category.name} class="w-full h-48 object-cover" />
					<div class="p-6">
						<h3 class="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
						<p class="text-gray-600 text-sm mb-4">{category.description}</p>
						<a
							href={category.link}
							class="text-blue-600 hover:text-blue-800 font-medium text-sm group"
						>
							Browse products
							<span
								aria-hidden="true"
								class="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span
							>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
