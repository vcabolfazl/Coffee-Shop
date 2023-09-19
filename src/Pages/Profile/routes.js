import Information from "./Information"
import Order from "./Order"
import ForgotPasswordUser from "./forgotPassword"

const routes = [
    {
        path: '/',
        element: <Information />,
    },
    {
        path: 'Order',
        element: <Order />,
    },
    {
        path: 'Password',
        element: <ForgotPasswordUser />,
    },
]
export default routes