import { Provider } from 'react-redux'
import store from "./store";
import type { props } from "../type";

function AppProvider({ children }: props) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default AppProvider