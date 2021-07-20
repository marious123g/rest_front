import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"
// import main_course from "@/components/main_course";
Vue.use(Vuex)
export default new Vuex.Store({
    // will I succeed?
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })],
    state: {
        snack_info:[
            {
                name:"snack1",
                num:0,
                price:10
            },
            {
                name:"snack2",
                num:0,
                price:11
            },
            {
                name:"snack3",
                num:0,
                price:12
            },
            {
                name:"snack4",
                num:0,
                price:14
            },
            {
                name:"snack5",
                num:0,
                price:15
            },
            {
                name:"snack6",
                num:0,
                price:18
            },
            {
                name:"snack7",
                num:0,
                price:19
            },
            {
                name:"snack8",
                num:0,
                price:20
            },
            {
                name:"snack9",
                num:0,
                price:23
            },
            {
                name:"snack10",
                num:0,
                price:25
            },
            {
                name:"snack11",
                num:0,
                price:33
            },

        ],
        drink_info:[
            {
                name:"drink1",
                num:0,
                price:10
            },
            {
                name:"drink2",
                num:0,
                price:11
            },
            {
                name:"drink3",
                num:0,
                price:12
            },
            {
                name:"drink4",
                num:0,
                price:14
            },
            {
                name:"drink5",
                num:0,
                price:15
            },
            {
                name:"drink6",
                num:0,
                price:18
            },
            {
                name:"drink7",
                num:0,
                price:19
            },
            {
                name:"drink8",
                num:0,
                price:20
            },
            {
                name:"drink9",
                num:0,
                price:23
            },
            {
                name:"drink10",
                num:0,
                price:25
            },
            {
                name:"drink11",
                num:0,
                price:33
            },

        ],
        main_course_info:[
            {
                name:"dish1",
                num:0,
                price:10
            },
            {
                name:"dish2",
                num:0,
                price:11
            },
            {
                name:"dish3",
                num:0,
                price:12
            },
            {
                name:"dish4",
                num:0,
                price:14
            },
            {
                name:"dish5",
                num:0,
                price:15
            },
            {
                name:"dish6",
                num:0,
                price:13
            },
            {
                name:"dish7",
                num:0,
                price:13
            },
            {
                name:"dish8",
                num:0,
                price:13
            },
            {
                name:"dish9",
                num:0,
                price:13
            },
            {
                name:"dish10",
                num:0,
                price:13
            },
            {
                name:"dish11",
                num:0,
                price:13
            },
            {
                name:"dish12",
                num:0,
                price:13
            },
            {
                name:"dish13",
                num:0,
                price:13
            }
        ],
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
        getMainCourseLength(state)
        {
            return state.main_course_info.length;
        },
        getDrinkLength(state)
        {
            return state.drink_info.length;
        },
        getSnackLength(state)
        {
            return state.snack_info.length;
        },
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

        changeDishToZero(state,dish)
        {
            for (let i=0;i<state.main_course_info.length;i++)
            {
                if(state.main_course_info[i].name===dish.name)
                {
                    state.main_course_info[i].num=0;
                }
            }
            for (let i=0;i<state.drink_info.length;i++)
            {
                if(state.drink_info[i].name===dish.name)
                {
                    state.drink_info[i].num=0;
                }
            }
            for (let i=0;i<state.snack_info.length;i++)
            {
                if(state.snack_info[i].name===dish.name)
                {
                    state.snack_info[i].num=0;
                }
            }


        },

        changeMainCourseToZero(state,dish)
        {
            for (let i=0;i<state.main_course_info.length;i++)
            {
                if(state.main_course_info[i].name===dish.name)
                {
                    state.main_course_info[i].num=0;
                }
            }

        },

        changeDrinkToZero(state,dish)
        {
            for (let i=0;i<state.drink_info.length;i++)
            {
                if(state.drink_info[i].name===dish.name)
                {
                    state.drink_info[i].num=0;
                }
            }

        },

        // 直接加入购物车
        addToCart(state, dish)
        {
            state.dishData.push(dish);
        },
        // 改变购物车数量
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
