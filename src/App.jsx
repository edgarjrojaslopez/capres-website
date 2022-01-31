import React from 'react';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ContentLayout from "./layouts/ContentLayout/ContentLayout";
import MainLayout from "./layouts/MainLayout/MainLayout";


function App() {
  return (
    <MainLayout className="text-blue-700 text-3xl">
      
        <Header />
      
      <ContentLayout>
        <h1 className="text-azulCapres-800">Capres Website</h1>
      </ContentLayout>
      
        <Footer />
      
    </MainLayout>
  );
}

export default App;
