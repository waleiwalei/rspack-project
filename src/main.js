import Vue from 'vue';
import "./style.css";
import App from "./App.vue";

console.log('pack');
// class Demo {

//     value = '';
//     constructor(value) {
//         this.value = value;
//     }

//     getValue() {
//         console.log('this.value')
//         return this.value;
//     }
// }
// const demo = Demo('test');
// demo.getValue();

// let arr = [1, 2, 3, 4, 5];
// let ifInclude = arr.includes(1);
// console.log('arr.includes(1),', ifInclude);

// createApp(App).mount("#app");


new Vue({
    render: (h) => h(App),
}).$mount('#app');
