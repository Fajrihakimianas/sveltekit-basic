<script lang="ts">
	let email = '';
	function handleSubscribe() {
		console.log('Subscribing:', email);
		email = ''; // Clear input
	}
</script>

<footer class="bg-gray-800 text-gray-300 pt-12 pb-8">
	<div class="container mx-auto px-4">
		<!-- Top Info Bar -->
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 pb-8 border-b border-gray-700"
		>
			<div class="flex items-center space-x-3">
				<!-- Icon Placeholder -->
				<span class="text-blue-400 text-2xl">💳</span>
				<div>
					<h4 class="font-semibold text-white">Secure Payment</h4>
					<p class="text-sm">All major cards accepted</p>
				</div>
			</div>
			<div class="flex items-center space-x-3">
				<span class="text-blue-400 text-2xl">🛡️</span>
				<div>
					<h4 class="font-semibold text-white">SSL Secured</h4>
					<p class="text-sm">Your data is protected</p>
				</div>
			</div>
			<div class="flex items-center space-x-3">
				<span class="text-blue-400 text-2xl">🚚</span>
				<div>
					<h4 class="font-semibold text-white">Fast Shipping</h4>
					<p class="text-sm">Delivery in 2-5 business days</p>
				</div>
			</div>
			<div class="flex items-center space-x-3">
				<span class="text-blue-400 text-2xl">💬</span>
				<div>
					<h4 class="font-semibold text-white">24/7 Support</h4>
					<p class="text-sm">We're here to help</p>
				</div>
			</div>
		</div>

		<!-- Links and Newsletter -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div>
				<h3 class="text-xl font-bold text-blue-500 mb-4">AutoGear</h3>
				<p class="text-sm leading-relaxed">
					Premium automotive accessories for cars and motorcycles. Quality products at competitive
					prices.
				</p>
			</div>

			<div>
				<h4 class="text-lg font-semibold text-white mb-4">Shop</h4>
				<ul class="space-y-2">
					<li>
						<a href="/car-accessories" class="hover:text-blue-400 text-sm">Car Accessories</a>
					</li>
					<li>
						<a href="/motorcycle-gear" class="hover:text-blue-400 text-sm">Motorcycle Gear</a>
					</li>
					<li><a href="/new-arrivals" class="hover:text-blue-400 text-sm">New Arrivals</a></li>
					<li><a href="/special-offers" class="hover:text-blue-400 text-sm">Special Offers</a></li>
				</ul>
			</div>

			<div>
				<h4 class="text-lg font-semibold text-white mb-4">Support</h4>
				<ul class="space-y-2">
					<li><a href="/contact-us" class="hover:text-blue-400 text-sm">Contact Us</a></li>
					<li><a href="/faqs" class="hover:text-blue-400 text-sm">FAQs</a></li>
					<li><a href="/shipping-info" class="hover:text-blue-400 text-sm">Shipping Info</a></li>
					<li><a href="/returns-policy" class="hover:text-blue-400 text-sm">Returns Policy</a></li>
				</ul>
			</div>

			<div>
				<h4 class="text-lg font-semibold text-white mb-4">Newsletter</h4>
				<p class="text-sm mb-3">Subscribe to get special offers and updates.</p>
				<form on:submit|preventDefault={handleSubscribe} class="flex">
					<input
						type="email"
						bind:value={email}
						placeholder="Your email"
						required
						class="bg-gray-700 text-white px-3 py-2 rounded-l-md focus:ring-blue-500 focus:border-blue-500 border border-gray-600 w-full text-sm"
					/>
					<button
						type="submit"
						class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md text-sm font-medium"
					>
						Subscribe
					</button>
				</form>
			</div>
		</div>

		<!-- Copyright -->
		<div class="mt-10 pt-8 border-t border-gray-700 text-center text-sm flex justify-between">
			<p>© {new Date().getFullYear()} AutoGear. All rights reserved.</p>
			<div class="space-x-4">
				<a href="/privacy-policy" class="hover:text-blue-400">Privacy Policy</a>
				<span>|</span>
				<a href="/terms-of-service" class="hover:text-blue-400">Terms of Service</a>
			</div>
		</div>
	</div>
</footer>
