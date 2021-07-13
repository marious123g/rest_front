// 1. write this
import test from "./views/test.vue"
import login from "@/views/login/login";

var routes=[
    // 2. add this
    // one url indicates one page
    {
        // this might be the url when access
        path:"/test.html",
        // this is the name of .vue
        component:test,
    },
    {
        path:"/login.html",
        component: login,
    }
]
export {routes};