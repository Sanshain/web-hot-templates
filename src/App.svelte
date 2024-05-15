<!-- wrong in runtime: -->

<!-- <script>
  import MaskedInput from 'svelte-masked-input';
</script>

<MaskedInput
    id="cc-exp"
    pattern="(1[0-2]|0[1-9])\/\d\d"
    placeholder="MM/YY"
    title="2-digit month and 2-digit year greater than 01/15"
    type="tel"
    validExample="11/18"
/> -->


<script lang="ts">
  import NumberFormat from 'svelte-number-format'
  let inputValue = ''

  $: console.log(inputValue)
</script>

<NumberFormat
  mask="+{7}(000)000-00-00"
  bind:value="{inputValue}"
  displayType="input"
/>