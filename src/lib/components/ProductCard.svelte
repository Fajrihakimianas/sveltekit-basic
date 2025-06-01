<script lang="ts">
	// @ts-nocheck
	export let product: {
		id: number;
		name: string;
		brand: string;
		price: number;
		rating: number;
		reviews: number;
		image: string;
		alt: string;
	};

	function addToCart() {
		console.log(`Added ${product.name} to cart.`);
		// Actual cart logic would go here
	}

	// Simple star rating display
	function getStarDisplay(rating: number) {
		const fullStars = Math.floor(rating);
		const halfStar = rating % 1 >= 0.5;
		let stars = '★'.repeat(fullStars);
		if (halfStar) stars += '✬'; // Could use a half star SVG or different char
		stars += '☆'.repeat(5 - Math.ceil(rating));
		return stars;
	}
</script>

<div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
	<a href={`/product/${product.id}`} class="block">
		<img
			src={product.image}
			alt={product.alt || product.name}
			class="w-full h-48 object-cover hover:opacity-90 transition-opacity"
		/>
	</a>
	<div class="p-4 flex flex-col flex-grow">
		<h3 class="text-lg font-semibold text-gray-800 mb-1 truncate" title={product.name}>
			<a href={`/product/${product.id}`} class="hover:text-blue-600">{product.name}</a>
		</h3>
		<p class="text-xs text-gray-500 mb-2">Brand: {product.brand}</p>
		<div class="flex items-center mb-2 text-sm">
			<span class="text-yellow-500 mr-1">{getStarDisplay(product.rating)}</span>
			<span class="text-gray-600">({product.reviews} reviews)</span>
		</div>
		<p class="text-xl font-bold text-gray-900 mb-3 mt-auto">${product.price.toFixed(2)}</p>
		<button
			on:click={addToCart}
			class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="w-4 h-4 inline-block mr-1 -mt-0.5"
			>
				<path
					d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.66 2.119a.75.75 0 01.161 1.487l-1.488 6.825a1.75 1.75 0 01-1.734 1.319H6.788a1.75 1.75 0 01-1.735-1.32L3.732 4.783A.75.75 0 013 4.19V2.75A.75.75 0 012.25 2H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
				/>
			</svg>
			Add to Cart
		</button>
	</div>
</div>
