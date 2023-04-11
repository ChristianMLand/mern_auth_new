import { useContext, createContext } from "react";
// create our empty context
const AppContext = createContext(null)
// a simple hook to get our data stored in context
export const useAppContext = () => useContext(AppContext);
export default AppContext;