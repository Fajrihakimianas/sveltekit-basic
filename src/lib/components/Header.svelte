<script lang="ts">
	let searchTerm = '';
	const cartItemCount = 2; // Mock cart item count
</script>

<header class="bg-slate-50 shadow-sm">
	<div class="container mx-auto px-4 py-3 flex items-center justify-between">
		<a href="/" class="text-2xl font-bold text-blue-600">AutoGear</a>

		<nav class="hidden md:flex space-x-6 items-center">
			<a href="/" class="text-gray-700 hover:text-blue-600">Home</a>
			<a href="/car-accessories" class="text-gray-700 hover:text-blue-600">Car Accessories</a>
			<a href="/motorcycle-gear" class="text-gray-700 hover:text-blue-600">Motorcycle Gear</a>
			<a href="/deals" class="text-gray-700 hover:text-blue-600">Deals</a>
		</nav>

		<div class="flex items-center space-x-4">
			<div class="relative hidden sm:block">
				<input
					type="search"
					bind:value={searchTerm}
					placeholder="Search products..."
					class="px-3 py-1.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
				/>
				<!-- Search icon can be added here -->
			</div>
			<button aria-label="User Account" class="text-gray-600 hover:text-blue-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
					/>
				</svg>
			</button>
			<button aria-label="Shopping Cart" class="relative text-gray-600 hover:text-blue-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
					/>
				</svg>
				{#if cartItemCount > 0}
					<span
						class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
					>
						{cartItemCount}
					</span>
				{/if}
			</button>
			<!-- Mobile Menu Button -->
			<button class="md:hidden text-gray-600 hover:text-blue-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
	</div>
	<!-- Mobile menu dropdown can be implemented here -->
</header>
