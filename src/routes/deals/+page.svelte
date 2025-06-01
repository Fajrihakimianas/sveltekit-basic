<!-- src/routes/examples/basic-steps/+page.svelte -->
<script>
	import Steps from '$lib/components/Steps.svelte';

	let currentStep = 1;

	const steps = [
		{
			title: 'Account Setup',
			description: 'Create your account with basic information',
			icon: '👤'
		},
		{
			title: 'Verification',
			description: 'Verify your email and phone number',
			icon: '✉️'
		},
		{
			title: 'Profile Setup',
			description: 'Complete your profile information',
			icon: '📝'
		},
		{
			title: 'Complete',
			description: 'Your account is ready to use',
			icon: '🎉'
		}
	];

	function nextStep() {
		if (currentStep < steps.length - 1) {
			currentStep++;
		}
	}

	function prevStep() {
		if (currentStep > 0) {
			currentStep--;
		}
	}
</script>

<div class="page">
	<h1>Account Setup Process</h1>
	<br />
	<div class="grid md:grid-cols-3 gap-5">
		<Steps {steps} current={currentStep} showProgress={true} />

		<div class="md:col-span-2">
			<div class="step-content p-4">
				{#if currentStep === 0}
					<h2>Account Setup</h2>
					<p>Please enter your basic account information...</p>
					<!-- Account setup form here -->
				{:else if currentStep === 1}
					<h2>Email Verification</h2>
					<p>We've sent a verification code to your email...</p>
					<!-- Verification form here -->
				{:else if currentStep === 2}
					<h2>Profile Information</h2>
					<p>Complete your profile to get started...</p>
					<!-- Profile form here -->
				{:else if currentStep === 3}
					<h2>Welcome!</h2>
					<p>Your account has been successfully created.</p>
					<!-- Success message here -->
				{/if}
			</div>

			<div class="navigation">
				<button onclick={prevStep} disabled={currentStep === 0}> Previous </button>
				<button onclick={nextStep} disabled={currentStep === steps.length - 1}> Next </button>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.page {
		margin: 0 auto;
		padding: 2rem;
	}

	.step-content {
		background: #fafafa;
		border-radius: 8px;
		min-height: 200px;
	}

	.navigation {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}

	.navigation button {
		padding: 8px 16px;
		border: 1px solid #d9d9d9;
		border-radius: 4px;
		background: white;
		cursor: pointer;
	}

	.navigation button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
