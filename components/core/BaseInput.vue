<template>
  <div :class="$style.component">
    <input
      :class="$style.input"
      :type="type"
      :name="name"
      :value="value"
      @input="emitValue" >

    <label :class="$style.label">{{ label }}</label>

  </div>
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    /**
     * Label for the input
     *
     * @type {string}
     */
    label: {
      type: String,
      required: false,
      default: ''
    },
    /**
     * Name for the input
     *
     * @type {string}
     */
    name: {
      type: String,
      required: false,
      default: ''
    },

    /**
     * Input value
     *
     * @type {string, number}
     */
    value: {
      type: [String, Number],
      required: false,
      default: ''
    },

    /**
     * Input type
     *
     * @type {string}
     */
    type: {
      type: String,
      required: true,
      default: 'text',
    },
  },

  methods: {
    /**
     * Sends input event
     *
     * @param {string} val
     */
    emitValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style module>
.component {
  width: 100%;
  position: relative;
}

.input {
  width: 100%;
  outline: none;
  border: 1px solid #cbcbcb;
  padding: 0.75rem;
  color: #0a0a0a;
  margin-bottom: 2rem;
}

.input:focus {
  color: 1px solid #7dbe00;
}

.label {
  color: #979797;
  font-size: 0.8rem;
  background: #fff;
  position: absolute;
  top: -11px;
  left: 20px;
  padding: 0 0.25rem;
}

.icon {
  display: inline;
  position: absolute;
  right: 10px;
  top: 12px;
  font-size: 1.2em;
  color: #979797;
}
</style>
