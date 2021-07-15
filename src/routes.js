// 1. write this
import frame from "@/views/frame.vue";
import login from "@/views/login.vue";
import order from "@/views/order.vue";
import register from "@/views/register.vue";
import admin from "@/views/admin.vue";
import customer from "@/components/customer";

var routes=[
    // 2. add this
    // one url indicates one page
    {
        // this might be the url when access
        path:"/frame.html",
        // this is the name of .vue
        component:frame,
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
        path: "/customer.html",
        component: customer,
    }
]
export {routes};