import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import QuestionsList from "./components/QuestionsList";
import RightSidebar from "./components/RightSidebar";
import "./App.css";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState("hot");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchQuestions = () => {
    try {
      let apiUrl = "";

      
      switch (filter) {
        case "hot":
          apiUrl = `https://api.stackexchange.com/2.3/questions?order=desc&sort=hot&site=stackoverflow&callback=handleResponse`;
          break;
        case "interesting":
          apiUrl = `https://api.stackexchange.com/2.3/questions/featured?order=desc&site=stackoverflow&callback=handleResponse`;
          break;
        case "bountied":
          apiUrl = `https://api.stackexchange.com/2.3/questions/featured?order=desc&site=stackoverflow&callback=handleResponse`; // Bountied questions fall under 'featured'
          break;
        case "week": {
          const fromDate = Math.floor(Date.now() / 1000) - 7 * 24 * 60 * 60; // Last 7 days
          const toDate = Math.floor(Date.now() / 1000);
          apiUrl = `https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&fromdate=${fromDate}&todate=${toDate}&site=stackoverflow&callback=handleResponse`;
          break;
        }
        case "month": {
          const fromDate = Math.floor(Date.now() / 1000) - 30 * 24 * 60 * 60; // Last 30 days
          const toDate = Math.floor(Date.now() / 1000);
          apiUrl = `https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&fromdate=${fromDate}&todate=${toDate}&site=stackoverflow&callback=handleResponse`;
          break;
        }
        default:
          apiUrl = `https://api.stackexchange.com/2.3/questions?order=desc&sort=hot&site=stackoverflow&callback=handleResponse`;
      }

      
      if (searchQuery.trim()) {
        apiUrl = `https://api.stackexchange.com/2.3/search?order=desc&sort=relevance&intitle=${searchQuery}&site=stackoverflow&callback=handleResponse`;
      }

      
      const script = document.createElement("script");
      script.src = apiUrl;
      script.async = true;

      
      window.handleResponse = (data) => {
        setQuestions(data.items || []);
        
        document.body.removeChild(script);
        delete window.handleResponse; 
      };

      
      script.onerror = () => {
        console.error("Error loading JSONP script");
        document.body.removeChild(script);
      };

      document.body.appendChild(script);
    } catch (error) {
      console.error("Error fetching questions:", error.message);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [filter]);

  const handleSearch = () => {
    fetchQuestions();
  };

  return (
    <div className="app-container">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <div className="content-container">
        <Sidebar />
        <div className="main-content">
          <QuestionsList
            questions={questions}
            setFilter={setFilter}
            activeFilter={filter}
          />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default App;
