import React from "react";
import Header from "./components/ui/header/header";
import Sidebar from "./components/ui/navbar/sidebar/sidebar";
import PageContent from "./components/pages/pageContent";

const App = () => {
    return (
        <div className="container">
            <Header />
            <Sidebar />
            <PageContent />
        </div>
    );
};

export default App;
