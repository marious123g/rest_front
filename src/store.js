import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"
import axios from "axios";
// import main_course from "@/components/main_course";
Vue.use(Vuex)
export default new Vuex.Store({
    // will I succeed?
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })],
    state: {
        // 放这吧 省事
        user_name:"",
        user_group:"",
        aside_status:"",
        aside_mode:"",
        table_id:0,
        person_num:0,
        // 菜们
        snack_info:[],
        drink_info:[],
        main_course_info:[],
        // 购物车数据
        dishData:[],
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
        clearCart(state)
        {
          //  面板清零
          for (let i=0;i<state.main_course_info.length;i++)
              state.main_course_info[i].num=0;
          for (let i=0;i<state.drink_info.length;i++)
              state.drink_info[i].num=0;
          for (let i=0;i<state.snack_info.length;i++)
              state.snack_info[i].num=0;
        //  购物车列表清空
            state.dishData=[];
        },
        getTotalPrice (state)
        {
            let temp=0;
            for (let i=0;i<state.dishData.length;i++)
            {
                temp+=(state.dishData[i].price)*(state.dishData[i].amount);
            }
            state.totalPrice=temp;
        },
        updateMainCourse(state,main_course_list)
        {
            state.main_course_info=main_course_list;
        },
        updateDrink(state,drink_list)
        {
            state.drink_info=drink_list;
        },
        updateSnack(state,snack_list)
        {
            state.snack_info=snack_list;
        },

        updateUserName(state,name)
        {
            state.user_name=name;
        },
        updateUserGroup(state,group)
        {
            state.user_group=group;
        },
        updateAsideStatus(state,status)
        {
            state.aside_status=status;
        },
        updateAsideMode(state,mode)
        {
            state.aside_mode=mode;
        },
        updateTableId(state,id)
        {
            state.table_id=id;
        },
        updatePersonNum(state,num)
        {
            state.person_num=num;
        },
        confirmOrder(state)
        {
            console.log(state.dishData)
            // 以requestParam提交的本质是写在url里
            // 把param直接放在url里面，我真他娘的是个人才
            // 传用户名、桌号、人数、总价
            let url="/addOrder?userName="+state.user_name
                +"&tableId="+state.table_id
                +"&person="+state.person_num
                +"&cost=" +state.totalPrice;

            console.log(url);
            axios.post(url,state.dishData).then((resp)=>{
                console.log(resp.data)
            })
            alert("下单成功")
        },

    },
    actions: {

    }

})
