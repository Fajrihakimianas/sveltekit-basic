// @ts-nocheck
export const featuredProductsData = [
	{
		id: 1,
		name: 'Premium Leather Seat Covers',
		brand: 'Toyota',
		price: 129.99,
		rating: 4.5,
		reviews: 12,
		image: 'https://placehold.co/400x300/007BFF/FFFFFF?text=Seat+Cover',
		alt: 'Premium Leather Seat Covers'
	},
	{
		id: 2,
		name: 'All-Weather Floor Mats',
		brand: 'Honda',
		price: 79.99,
		rating: 4.8,
		reviews: 89,
		image: 'https://placehold.co/400x300/343A40/FFFFFF?text=Floor+Mat',
		alt: 'All-Weather Floor Mats'
	},
	{
		id: 3,
		name: 'Luxury Dashboard Cover',
		brand: 'BMW',
		price: 49.99,
		rating: 4.2,
		reviews: 42,
		image: 'https://placehold.co/400x300/6F42C1/FFFFFF?text=Dash+Cover',
		alt: 'Luxury Dashboard Cover'
	}
];

export const allProductsData = [
	...featuredProductsData, // Include featured for more items
	{
		id: 4,
		name: 'Neoprene Seat Covers',
		brand: 'Toyota',
		price: 89.99,
		rating: 4.3,
		reviews: 42,
		image: 'https://placehold.co/400x300/17A2B8/FFFFFF?text=Neoprene+Cover',
		alt: 'Neoprene Seat Covers'
	},
	{
		id: 5,
		name: 'Leather Upholstery Kit',
		brand: 'BMW',
		price: 299.99,
		rating: 3.9,
		reviews: 3,
		image: 'https://placehold.co/400x300/DC3545/FFFFFF?text=Upholstery',
		alt: 'Leather Upholstery Kit'
	},
	{
		id: 6,
		name: 'Rubber Floor Mats',
		brand: 'Honda',
		price: 59.99,
		rating: 4.6,
		reviews: 78,
		image: 'https://placehold.co/400x300/FFC107/000000?text=Rubber+Mats',
		alt: 'Rubber Floor Mats'
	},
	{
		id: 7,
		name: 'Premium Seat Cover Set',
		brand: 'Chevrolet',
		price: 149.99,
		rating: 4.1,
		reviews: 1,
		image: 'https://placehold.co/400x300/28A745/FFFFFF?text=Seat+Set',
		alt: 'Premium Seat Cover Set'
	},
	{
		id: 8,
		name: 'Dashboard Cover',
		brand: 'Ford',
		price: 39.99,
		rating: 4.0,
		reviews: 45,
		image: 'https://placehold.co/400x300/FD7E14/FFFFFF?text=Dash+Cover+2',
		alt: 'Dashboard Cover'
	},
	{
		id: 9,
		name: 'Custom Upholstery Service',
		brand: 'Mercedes',
		price: 499.99,
		rating: 4.9,
		reviews: 7,
		image: 'https://placehold.co/400x300/6610F2/FFFFFF?text=Custom+Upholstery',
		alt: 'Custom Upholstery Service'
	}
];

export const categoriesData = [
	{
		name: 'Seat Covers',
		description: 'Custom fit seat covers for your vehicle',
		image: 'https://placehold.co/600x400/E0E0E0/B0B0B0?text=Seat+Covers',
		link: '/products/seat-covers'
	},
	{
		name: 'Upholstery',
		description: 'Premium upholstery materials and services',
		image: 'https://placehold.co/600x400/E0E0E0/B0B0B0?text=Upholstery',
		link: '/products/upholstery'
	},
	{
		name: 'Floor Mats',
		description: 'All-weather protection for your floors',
		image: 'https://placehold.co/600x400/007BFF/FFFFFF?text=Floor+Mats&font=roboto',
		link: '/products/floor-mats'
	},
	{
		name: 'Dashboard Covers',
		description: 'Protect your dashboard from sun damage',
		image: 'https://placehold.co/600x400/333333/FFFFFF?text=Dash+Covers&font=roboto',
		link: '/products/dashboard-covers'
	}
];
