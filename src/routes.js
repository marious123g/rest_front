import frame from "@/views/frame.vue";
import login from "@/views/login.vue";
import register from "@/views/register.vue";
import fogetPassword from "@/views/fogetPassword.vue"

import orderList from "@/components/common/OrderList.vue"
import orderDetail from "@/components/common/OrderDetail.vue"
import checkNotice from "@/components/common/CheckNotice.vue"
import changePassword from "@/components/common/ChangePassword.vue"
import personInfo from "@/components/common/PersonInfo.vue"

import dishesMainCourse from "@/components/dishes/DishesMainCourse.vue"
import dishesDrink from "@/components/dishes/DishesDrink.vue";
import dishesSnack from "@/components/dishes/DishesSnack.vue";

import serveDishes from "@/components/dishes/ServeDishes.vue"
import reserveDishes from "@/components/dishes/ReserveDishes.vue"

import manageDishes from "@/components/manage/ManageDishes.vue"
import manageNotice from "@/components/manage/ManageNotice.vue"
import manageStaff from "@/components/manage/ManageStaff.vue"
import manageData from "@/components/manage/ManageData.vue"

var routes=[
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
                path:"changePassword",
                component:changePassword
            },
            {
                path:"personInfo",
                component:personInfo
            },
            {
                path:"mainCourse",
                component:dishesMainCourse
            },
            {
                path:"drink",
                component:dishesDrink
            },
            {
                path: "snack",
                component: dishesSnack
            },
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
                path: "manageData",
                component: manageData,
            },
        ]
    },
]
export {routes};
