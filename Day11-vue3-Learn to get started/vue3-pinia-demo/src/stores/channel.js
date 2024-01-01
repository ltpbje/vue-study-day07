import { defineStore } from "pinia"
import {ref} from 'vue'
import axios from 'axios'
export const getChannelStore = defineStore("getChannelStore",()=> {
    const channelList = ref([])
    const getChannelList =async ()=>{
        const {data:{data}} = await axios.get('http://geek.itheima.net/v1_0/channels')
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')
        channelList.value = data.channels
        console.log(1,res)
        console.log(data.channels)
    }
    
    return {
        getChannelList,
        channelList
    }
})