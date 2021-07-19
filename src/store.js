import Vue from "vue";
import Vuex from "vuex";
// import main_course from "@/components/main_course";
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        // 购物车数据
        dishData:[
            // {
            //     name:"test",
            //     price:"114",
            //     amount:"514",
            // }
        ],
// 总价
        totalPrice: 0
    },
    // 对state计算，不能更改
    getters:{

        getDishDataLength(state)
        {
            return state.dishData.length;
        },
        getTotalPrice (state) {
            let temp=0;
            for (let i=0;i<state.dishData.length;i++)
            {
                temp+=(state.dishData[i].price)*(state.dishData[i].amount);
            }
            return temp;
        },

    },
    // 只有，只有，只有mutations中的方法可以对state中的数据进行改变
    mutations: {

        // 直接加入购物车
        addToCart(state, dish)
        {
            state.dishData.push(dish);
        },
        // 改变数量
        changeAmount(state,dish)
        {
            console.log(dish);
            for (let i=0;i<state.dishData.length;i++)
            {
                // 现在是周日白天12：39，我调了半个小时，结果发现是dish.name写成了name，但是他就是不报错，哎，就是玩
                // 弱类型语言真是让人无语
                if(state.dishData[i].name===dish.name)
                {
                    console.log("找到已存在记录："+state.dishData[i]);
                    // 数量没有减少到0
                    if(dish.num!==0)
                    {
                        console.log("应该修改为: "+dish.num);
                        state.dishData[i].amount=dish.num;
                        console.log("实际: "+state.dishData[i].amount)
                    }
                    else
                    {
                        // 消除记录
                        console.log("删除这条记录,菜名："+state.dishData[i].name);
                        state.dishData.splice(i,1);
                        console.log("已删除");
                    }

                }
            }
        },
        deleteCartDish(state,name)
        {
            for (let i=0;i<state.dishData.length;i++)
            {
                if(state.dishData[i].name===name)
                {
                    console.log("删除这条记录,菜名："+state.dishData[i].name);
                    state.dishData.splice(i,1);
                    console.log("已删除");
                }
            }
        },
        getTotalPrice (state) {
            let temp=0;
            for (let i=0;i<state.dishData.length;i++)
            {
                temp+=(state.dishData[i].price)*(state.dishData[i].amount);
            }
            state.totalPrice=temp;
        },


    },
    actions: {
        increase (context, price) {
            context.commit('increment', price)
        }
    }

})
