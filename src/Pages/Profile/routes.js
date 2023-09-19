import Information from "./Information"
import Order from "./Order"

const routes = [
    {
        path: '/',
        element: <Information />,
    },
    {
        path: 'Order',
        element: <Order />,
    },
    // {
    //     path: 'Password',
    //     element: <ForgotPasswordUser />,
    // },
    // {
    //     path: 'Information',
    //     element: <Information/>,
    // },
]
export default routes