import React, { useState } from "react";
import "./QuestionsList.css";


const timeAgo = (timestamp) => {
  const now = new Date();
  const createdDate = new Date(timestamp * 1000); 
  const diffInSeconds = Math.floor((now - createdDate) / 1000);

  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return `${diffInSeconds} second${diffInSeconds > 1 ? "s" : ""} ago`;
};

const QuestionsList = ({ questions, setFilter, activeFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState(activeFilter || "");

  const filters = ["interesting", "bountied", "hot", "week", "month"];

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter); 
    setFilter(filter); 
  };

  return (
    <div>
      <p className="top-q">Top Questions</p>
      <div className="filter-line">
        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter ${selectedFilter === filter ? "active" : ""}`} 
              onClick={() => handleFilterClick(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        <div>
          <button className="ask-question">ASK QUESTION</button>
        </div>
      </div>

      <div className="questions-list">
        {questions.length > 0 ? (
          questions.map((question) => (
            <div key={question.question_id} className="question-card">
              <h3>
                <a
                  href={question.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {question.title}
                </a>
              </h3>
              <div className="tags">
                {question.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="meta-info">
                <div>
                <span>
                  <img className="under-icon" src="/triangle.png" alt="" />
                   <span className="count">{question.score}</span>
                </span>
                <span>
                  <img className="under-icon" src="/message.png" alt="" />{" "}
                    <span className="count">{question.answer_count}</span>
                </span>
                <span>
                  <img className="under-icon" src="/eye.png" alt="" />{" "}
                    <span className="count">{question.view_count}</span> 
                </span>
                </div>
                
                <div className="time-display">
                <span>
                  <span className="time-ago">
                    Asked&nbsp;
                     {timeAgo(question.creation_date)}
                  </span>
                  : <span className="name">{question.owner.display_name}{" "}</span>
                </span>
                </div>
                
              </div>
            </div>
          ))
        ) : (
          <p>No questions found.</p>
        )}
      </div>
    </div>
  );
};

export default QuestionsList;
