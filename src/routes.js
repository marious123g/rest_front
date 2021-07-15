// 1. write this
import frame from "@/views/frame";
import login from "@/views/login/login";
import order from "@/views/order/order";
import index from "./views/index";
import register from "@/views/register/register";
import admin from "@/views/admin/admin";
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
        component: index,
    },
    {
        path: "/register.html",
        component: register,
    },
    {
        path: "/admin.html",
        component: admin,
    }
]
export {routes};