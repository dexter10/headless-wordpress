<script setup lang="ts">

// Boilerplate:

// Constants

// Declare emtpy variables

// const init = function() {};
// init();

const route = useRoute();
const uri = route.params.uri + '/';

// Page not found, set correct status code on SSR
// if (!(page as any).value && process.server) {
//     const event = useRequestEvent()
//     event.res.statusCode = 404
// }


// Post query (for single nuxt-graphql-client queries use useGql() & GqlInstance())
const GqlInstance = useGql()
const postData: any = await GqlInstance('Post', { uri: uri })

// Destructure postData
const post = postData.nodeByUri;

console.log(post);


// Declare date transform function from plugins/format-date.ts to avoid namespace conflicts with date formats between WP and Nuxt.
const formatDate = useNuxtApp().$formatDate;

// Example of measuring page load time with JavaScript
// const loadTime = window.PerformanceEventTiming.domContentLoadedEventEnd - window.performance.timing.navigationStart;


// Better way of checking if object or object property exists (cannot be 0, otherwise use nullish coalescing - ??):
// Short circuit
// const seoInfo = post || default value;

// Further example of checking if object/property exists:
// #1 see that the [] is used for the dynamic property
// #2 see that the optional chaining is used to set the value to undefined if the property doesn't exist (to the left)
// const open = restaurant.openingHours[day]?.open ?? 'default value';


// Better way of checking function/method exists before calling:
// obj.method && obj.method()
// And checking and running if it does exist:
// console.log(restaurant.order?.(1, 2) ?? 'Method does not exist');


// OR and ?? assignment operators as TEST:
// object.property ||= 'some default value, i.e., 10';

// If possible value is 0, null and undefined, use nullish assignment operator
// object.property &&= 'some default value, i.e., 10';

// ?? Almost always used together with optional chaining
// Example to test if array is empty
// console.log(users?.name ?? 'User name is empty');

// TIP - Get first and last in array for <div> in columns:
// array.at(0) - For first element
// arra.at(-1) - For last element

// Menu - destructuring:
// const { prop: {deeperprop1, deeperprop2: renamed, deeperprop3}} = deepobj;

// TIP Bonus:

// Push key/value to object using for...of and

// const game = {
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels']
// }

// const scorers: { [key: string]: number } = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers);

// Jeroen's destructuring
// const policies = [
//   { id: 1, test: 'yes', ourBaseCost: 99, consumerCost: 200, name: 'foo' },
// ];

// First parameter is the excluded object, second is the rest.
// Return the rest as an array
// const policiesWithoutBaseCost = policies.map(
//   ({ ourBaseCost, ...rest }) => rest
// );
// console.log(policiesWithoutBaseCost);

// const { ourBaseCost, ...policyWithoutBaseCost } = policies[0];

// console.log(ourBaseCost, policyWithoutBaseCost);

// TIP TIP TIP - nodelists to array AND using callback to do something

// const movementsUI = Array.from(
//   document.querySelectorAll('.movements__value'),
//   (el) => {
//     if (el != null && el.textContent != null) return Number(el.textContent.replace('€', ''))
//   }
// );

// 99 {id: 1, consumerCost: 200, name: 'foo'}

</script>

<template>
  <div>
    <TheHeader></TheHeader>
    <main class="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
      <h1>{{ post.title }}</h1>
      <div class="text-2xl mt-4">{{ formatDate(post.date) }}</div>
      <article class="mt-4 space-y-2" v-html="post.content"></article>
    </main>
  </div>
</template>