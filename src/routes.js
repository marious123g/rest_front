import frame from "@/views/frame.vue";
import login from "@/views/login.vue";
import register from "@/views/register.vue";
import fogetPassword from "@/views/fogetPassword.vue"

import orderList from "@/components/common/OrderList.vue"
import orderDetail from "@/components/common/OrderDetail.vue"
import checkNotice from "@/components/common/CheckNotice.vue"

import DishesMainCourse from "@/components/dishes/DishesMainCourse.vue"
import serveDishes from "@/components/dishes/ServeDishes.vue"
import reserveDishes from "@/components/dishes/ReserveDishes.vue"

import manageDishes from "@/components/manage/ManageDishes.vue"
import manageNotice from "@/components/manage/ManageNotice.vue"
import manageStaff from "@/components/manage/ManageStaff.vue"
import manageCheckOut from "@/components/manage/ManageCheckOut.vue"
import manageData from "@/components/manage/ManageData.vue"

import DishesDrink from "@/components/dishes/DishesDrink";
import DishesSnack from "@/components/dishes/DishesSnack";
import user from "@/views/user";
import OrderDetail from "@/components/common/OrderDetail";
import test from "@/views/test";
var routes=[
    {
        path:"/test.html",
        component:test
    },
    {
        // this might be the url when access
        path:"/user",
        // this is the name of .vue
        component:user,
        children:[
            {
                path:"mainCourse.html",
                component:DishesMainCourse
            },
            {
                path:"drink.html",
                component:DishesDrink
            },
            {
                path: "snack.html",
                component: DishesSnack
            },
            {
                path: "orderDetail.html",
                component: OrderDetail
            }
        ]
    },

    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        component: login,
    },
    {
        path: "/register",
        component: register,
    },
    {
        path: "/fogetPassword",
        component: fogetPassword,
    },
    {
        path: "/frame",
        component: frame,
        children: [
            {
                path: "orderList",
                component: orderList,
            },
            {
                path: "orderDetail",
                component: orderDetail,
            },
            {
                path: "checkNotice",
                component: checkNotice,
            },
            // {
            //     path: "dishesMainCourse",
            //     component: dishesMainCourse,
            // },
            {
                path: "serveDishes",
                component: serveDishes,
            },
            {
                path: "reserveDishes",
                component: reserveDishes,
            },
            {
                path: "manageDishes",
                component: manageDishes,
            },
            {
                path: "manageNotice",
                component: manageNotice,
            },
            {
                path: "manageStaff",
                component: manageStaff,
            },
            {
                path: "manageCheckOut",
                component: manageCheckOut,
            },
            {
                path: "manageData",
                component: manageData,
            },
        ]
    },
]
export {routes};