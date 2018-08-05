<template>
  <div class="Button">
    <button
      :class="styleClass"
      type="buttonType"
    >
      <slot/>
    </button>
  </div>
</template>

<script>

// import loggerMixin from '../../mixins/loggerMixin';


export default {
	name: 'BaseButton',
	props: {
    styleClass: {
      type: String,
      default: 'f6 link dim br2 ph3 pv2 mb2 dib white bg-black'
    },
    buttonType: {
      type: String,
      default: 'button'
    },
		/**
		 * The color for the button.
		 */
		color: {
			type: String,
			default: '#333'
		},
		/**
		 * The size of the button
		 * `small, normal, large`
		 */
		size: {
			type: String,
			default: 'normal'
		},
		/**
		 * Gets called when the user clicks on the button
		 * @ignore
		 */
		onClick: {
			type: Function,
			default: (event) => {
				console.log('You have clicked me!', event.target);
			},
      required: false
		}
	},
	computed: {
		fontSize(){
			let size;
			switch (this.size) {
				case 'small':
					size = '10px';
					break;
				case 'normal':
					size = '14px';
					break;
				case 'large':
					size = '18px';
					break;
			}
			return size;
		}
	}
}
</script>

<docs>
  ```vue
<BaseButton styleClass="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-red"> Button Text </BaseButton>

  ```
</docs>

<style >
/* default button */
button {
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out,
              transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
}

</style>
