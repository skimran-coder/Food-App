import { Provider } from "react-redux";
import store from "./utils/Redux/store";
import Header from "./ui/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./ui/components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
