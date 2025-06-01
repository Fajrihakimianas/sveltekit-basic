<script lang="ts">
	let vehicleType: 'car' | 'motorcycle' = 'car';
	let selectedBrand = 'All Brands';
	// Dummy brands for demonstration
	const carBrands = ['All Brands', 'Toyota', 'Honda', 'BMW', 'Ford', 'Chevrolet', 'Mercedes'];
	const motorcycleBrands = [
		'All Brands',
		'Honda',
		'Yamaha',
		'Kawasaki',
		'Suzuki',
		'Harley-Davidson'
	];

	$: currentBrands = vehicleType === 'car' ? carBrands : motorcycleBrands;

	function setVehicleType(type: 'car' | 'motorcycle') {
		vehicleType = type;
		selectedBrand = 'All Brands'; // Reset brand on type change
	}
</script>

<section class="py-12 bg-gray-50">
	<div class="container mx-auto px-4">
		<h2 class="text-2xl font-semibold text-gray-800 mb-6">Find accessories for your vehicle</h2>
		<div
			class="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4"
		>
			<div>
				<label for="label" class="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
				<div class="flex border border-gray-300 rounded-md">
					<button
						on:click={() => setVehicleType('car')}
						class="px-6 py-2 text-sm font-medium rounded-l-md w-1/2 md:w-auto
                               {vehicleType === 'car'
							? 'bg-blue-600 text-white'
							: 'bg-white text-gray-700 hover:bg-gray-50'}"
					>
						Car
					</button>

					<button
						on:click={() => setVehicleType('motorcycle')}
						class="px-6 py-2 text-sm font-medium rounded-r-md w-1/2 md:w-auto
                               {vehicleType === 'motorcycle'
							? 'bg-blue-600 text-white'
							: 'bg-white text-gray-700 hover:bg-gray-50'}"
					>
						Motorcycle
					</button>
				</div>
			</div>
			<div class="flex-grow">
				<label for="brand-select" class="block text-sm font-medium text-gray-700 mb-1"
					>Select Brand</label
				>
				<select
					id="brand-select"
					bind:value={selectedBrand}
					class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
				>
					{#each currentBrands as brand}
						<option value={brand}>{brand}</option>
					{/each}
				</select>
			</div>
			<!-- Search button could be added here if this form submits -->
		</div>
	</div>
</section>
