import React from "react";
import Header from "./components/ui/header/header";
import Sidebar from "./components/ui/navbar/sidebar/sidebar";
import Main from "./components/pages/main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsersProvider from "./hooks/useUsers";
import PostsProvider from "./hooks/usePosts";
import MessagesProvider from "./hooks/useMessages";
import ProfileProvider from "./hooks/useProfile";

const App = () => {
    return (
        <div className="container">
            <Header />
            <Sidebar />
            <UsersProvider>
                <PostsProvider>
                    <MessagesProvider>
                        <ProfileProvider>
                            <Main />
                        </ProfileProvider>
                    </MessagesProvider>
                </PostsProvider>
            </UsersProvider>
            <ToastContainer />
        </div>
    );
};

export default App;
