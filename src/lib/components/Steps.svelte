<!-- src/lib/components/Steps.svelte -->
<script>
	import { createEventDispatcher } from 'svelte';

	export let current = 0; // Current active step (0-based)
	export let status = 'process'; // 'wait', 'process', 'finish', 'error'
	export let direction = 'vertical'; // 'horizontal' or 'vertical'
	export let size = 'default'; // 'default' or 'small'
	export let clickable = false; // Allow clicking on steps
	export let showProgress = true; // Show progress line
	/**
	 * @type {string | any[]}
	 */
	export let steps = []; // Array of step objects

	const dispatch = createEventDispatcher();

	// @ts-ignore
	function handleStepClick(stepIndex) {
		if (clickable) {
			dispatch('stepClick', { step: stepIndex, stepData: steps[stepIndex] });
		}
	}

	// @ts-ignore
	function getStepStatus(stepIndex) {
		if (stepIndex < current) return 'finish';
		if (stepIndex === current) return status;
		return 'wait';
	}

	// @ts-ignore
	function getStepIcon(step, stepIndex) {
		const stepStatus = getStepStatus(stepIndex);

		if (step.icon) return step.icon;
		if (stepStatus === 'finish') return '✓';
		if (stepStatus === 'error') return '✕';
		return stepIndex + 1;
	}

	$: progressPercentage = steps.length > 1 ? (current / (steps.length - 1)) * 100 : 0;
</script>

<div
	class="steps"
	class:steps-horizontal={direction === 'horizontal'}
	class:steps-vertical={direction === 'vertical'}
	class:steps-small={size === 'small'}
	class:steps-clickable={clickable}
>
	<!-- Progress Line -->
	{#if showProgress && direction === 'horizontal'}
		<div class="steps-progress">
			<div class="steps-progress-bar" style="width: {progressPercentage}%"></div>
		</div>
	{/if}

	<!-- Steps -->
	{#each steps as step, index}
		{@const stepStatus = getStepStatus(index)}
		{@const isLast = index === steps.length - 1}

		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<div
			class="step"
			class:step-wait={stepStatus === 'wait'}
			class:step-process={stepStatus === 'process'}
			class:step-finish={stepStatus === 'finish'}
			class:step-error={stepStatus === 'error'}
			class:step-clickable={clickable}
			role={clickable ? 'button' : 'listitem'}
			tabindex={clickable ? 0 : -1}
			on:click={() => handleStepClick(index)}
			on:keydown={(e) => e.key === 'Enter' && handleStepClick(index)}
		>
			<!-- Step Icon -->
			<div class="step-icon">
				<span class="step-icon-content">
					{getStepIcon(step, index)}
				</span>
			</div>

			<!-- Step Content -->
			<div class="step-content">
				{#if step.title}
					<div class="step-title">{step.title}</div>
				{/if}
				{#if step.description}
					<div class="step-description">{step.description}</div>
				{/if}
				{#if step.subTitle}
					<div class="step-subtitle">{step.subTitle}</div>
				{/if}
			</div>

			<!-- Connector Line (Vertical) -->
			{#if direction === 'vertical' && !isLast}
				<div class="step-connector">
					<div
						class="step-connector-line"
						class:step-connector-finish={stepStatus === 'finish'}
					></div>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.steps {
		display: flex;
		position: relative;
		background: #f5f5f5;
		padding: 24px;
		border-radius: 16px;
		height: 1028px;
	}

	/* Horizontal Layout */
	.steps-horizontal {
		flex-direction: row;
		align-items: flex-start;
	}

	.steps-horizontal .step {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		position: relative;
	}

	/* Vertical Layout */
	.steps-vertical {
		flex-direction: column;
	}

	.steps-vertical .step {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		margin-bottom: 16px;
		position: relative;
	}

	.steps-vertical .step-content {
		margin-left: 16px;
		flex: 1;
	}

	/* Progress Bar (Horizontal) */
	.steps-progress {
		position: absolute;
		top: 16px;
		left: 50px;
		right: 50px;
		height: 2px;
		background: #f0f0f0;
		z-index: 1;
	}

	.steps-progress-bar {
		height: 100%;
		background: #1890ff;
		transition: width 0.3s ease;
	}

	/* Step Icon */
	.step-icon {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 2;
		background: white;
		border: 2px solid #d9d9d9;
		font-weight: 500;
		font-size: 14px;
		transition: all 0.3s ease;
	}

	.steps-small .step-icon {
		width: 24px;
		height: 24px;
		font-size: 12px;
	}

	/* Step Content */
	.step-content {
		margin-top: 8px;
	}

	.steps-vertical .step-content {
		margin-top: 0;
	}

	.step-title {
		font-size: 14px;
		font-weight: 600;
		color: #414651;
		margin-bottom: 4px;
		transition: color 0.3s ease;
	}

	.steps-small .step-title {
		font-size: 14px;
	}

	.step-description {
		font-size: 14px;
		color: #8c8c8c;
		line-height: 1.5;
	}

	.steps-small .step-description {
		font-size: 12px;
	}

	.step-subtitle {
		font-size: 12px;
		color: #8c8c8c;
		margin-top: 2px;
	}

	/* Connector (Vertical) */
	.step-connector {
		position: absolute;
		left: 15px;
		top: 32px;
		width: 2px;
		height: calc(100% + 16px);
	}

	.step-connector-line {
		width: 100%;
		height: 100%;
		background: #f0f0f0;
		transition: background 0.3s ease;
	}

	/* Step States */
	.step-wait .step-icon {
		border-color: #d9d9d9;
		color: #8c8c8c;
	}

	.step-wait .step-title {
		color: #8c8c8c;
	}

	.step-process .step-icon {
		border-color: #1890ff;
		background: #1890ff;
		color: white;
	}

	.step-process .step-title {
		color: #1890ff;
	}

	.step-finish .step-icon {
		border-color: #52c41a;
		background: #52c41a;
		color: white;
	}

	.step-finish .step-title {
		color: #262626;
	}

	.step-connector-finish {
		background: #52c41a !important;
	}

	.step-error .step-icon {
		border-color: #ff4d4f;
		background: #ff4d4f;
		color: white;
	}

	.step-error .step-title {
		color: #ff4d4f;
	}

	/* Clickable Steps */
	.steps-clickable .step-clickable {
		cursor: pointer;
	}

	.steps-clickable .step-clickable:hover .step-icon {
		border-color: #40a9ff;
	}

	.steps-clickable .step-clickable:hover .step-title {
		color: #40a9ff;
	}

	/* Focus States */
	.step:focus {
		outline: 2px solid #1890ff;
		outline-offset: 2px;
		border-radius: 4px;
	}
</style>
