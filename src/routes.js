// 1. write this
import frame from "@/views/frame.vue";
import login from "@/views/login.vue";
import order from "@/views/order.vue";
import register from "@/views/register.vue";
import admin from "@/views/admin.vue";
import DishesMainCourse from "@/components/dishes/DishesMainCourse";
import test from "@/views/test";
import test1 from "@/views/test1";
import DishesDrink from "@/components/dishes/DishesDrink";
import DishesSnack from "@/components/dishes/DishesSnack";
import user from "@/views/user";

var routes=[
    // 2. add this
    // one url indicates one page
    {
      path: "/frame",
      component: frame
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
            }
        ]
    },
    {
        path:"/login.html",
        component: login,
    },
    {
      path: "/order.html",
      component: order,
    },
    {
        path: "/",
        component: login,
    },
    {
        path: "/register.html",
        component: register,
    },
    {
        path: "/admin.html",
        component: admin,
    },
    {
        path: "/DishesMainCourse.html",
        component: DishesMainCourse,
    },
    {
        path: "/test.html",
        component: test,
    },
    {
        path: "/test1.html",
        component: test1,
    },
    {
        path: "/drink.html",
        component: DishesDrink,
    },
    {
        path: "/snack.html",
        component: DishesSnack,
    }
]
export {routes};