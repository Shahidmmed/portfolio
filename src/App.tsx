import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./pages/Main";
import { Helmet } from "react-helmet";

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Abdul Shahid | Sofware Engineer</title>
        <meta
          name="description"
          content="Abdul Shahid is a Sofware Engineer who builds effective responsive websites that are fast, simple to use, and constructed according to best engineering practices."
        />
        <meta name="keyword" content="portfolio, software engineer" />
      </Helmet>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
