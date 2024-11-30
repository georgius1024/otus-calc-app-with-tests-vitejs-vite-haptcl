<script setup>
import Button from './Button.vue';
import { ref } from 'vue';
const dirty = ref(false);
const operandA = ref('0');
const operandB = ref('');
const operator = ref('');

const typeDigit = (c) => {
  if (!dirty.value) {
    operandA.value = c;
    dirty.value = true;
  } else {
    operandA.value += c;
  }
};
const backspace = () => {
  operandA.value = operandA.value.slice(0, -1);
};
const typeOperation = (char) => {
  if (!dirty) {
    return;
  }
  operandB.value = operandA.value;
  operandA.value = '';
  operator.value = char;
  dirty.value = false;
};
const clear = () => {
  operandA.value = '0';
  operandB.value = '';
  operator.value = '';
  dirty.value = false;
};
const calc = () => {
  operandA.value =
    eval(`${operandB.value}${operator.value}${operandA.value}`) || '0';
  operandB.value = '';
  operator.value = '';
  dirty.value = false;
};
const display = () => {
  return [operandB.value, operator.value, operandA.value]
    .filter((e) => Boolean(e))
    .join('\n');
};
</script>
<template>
  <div className="App">
    <div className="display" data-testid="display">{{ display() }}</div>
    <div className="row">
      <Button char="1" @click="typeDigit('1')" />
      <Button char="2" @click="typeDigit('2')" />
      <Button char="3" @click="typeDigit('3')" />
      <Button char="*" @click="typeOperation('*')" />
    </div>
    <div className="row">
      <Button char="4" @click="typeDigit('4')" />
      <Button char="5" @click="typeDigit('5')" />
      <Button char="6" @click="typeDigit('6')" />
      <Button char="/" @click="typeOperation('/')" />
    </div>
    <div className="row">
      <Button char="7" @click="typeDigit('7')" />
      <Button char="8" @click="typeDigit('8')" />
      <Button char="9" @click="typeDigit('9')" />
      <Button char="+" @click="typeOperation('+')" />
    </div>
    <div className="row">
      <Button char="=" @click="calc" />
      <Button char="C" @click="clear" />
      <Button char="0" @click="typeDigit('0')" />
      <Button char="-" @click="typeOperation('-')" />
    </div>
  </div>
</template>
