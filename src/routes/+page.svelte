<br>
데이터 베이스에서 가져온 자료는 여기 있다:
{#each data2 as i}
<div>
  <div>{i}</div>
</div>
{/each}

  <div><button on:click={onClick}>데이터 베이스에 포함하기 위하여 여기를 누르세요</button></div>





<script>
  import { createEventDispatcher } from 'svelte';
import data from '../fbase.js';
import {collection, addDoc} from 'firebase/firestore'
const data1= collection(data, 'daeshin_phone_201') 

const data_test = [{
  age: 19,
  name: 'kim',
  sex: 'male'
},
{
  age: 19,
  name: 'kim',
  sex: 'male'
}]

// Object.keys(data1).forEach(key => {
//   console.log(`${key}: ${data1[key]} : ${10/2}`);
// });

let data2 = Object.keys(data1) 
console.log(data1)

const data_create = {
  age: 48,
  name: 'Kim dong eun'
}

const onClick = () => {
  addDoc(data1,data_create)
} 
</script>

