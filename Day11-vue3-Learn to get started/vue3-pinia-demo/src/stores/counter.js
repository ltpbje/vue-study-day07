import { defineStore } from "pinia"
import { computed, ref } from "vue"
export const userCounterStore = defineStore("counter", ()=>{
    //声明数据state－count
    const count  = ref(100)
    //声明操作数据的方法action（普通函数）
    function addCount(){
        count.value++
    }
    function subCount(){
        count.value--
    }

    //声明基于数据派生的计算属性getters（computed）
    const double = computed(()=>count.value*2)

    //声明数据state-msg
    const msg = ref("hello pinia") 

    return {
        count,
        addCount,
        subCount,
        msg,
        double
    }
    
})