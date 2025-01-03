import React from 'react';
import Header from '../dashboard/_components/Header';

const ResumeAnalyzerPage = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <h1>Resume Analyzer</h1>
        <iframe
          src="http://localhost:8501" // URL of your Streamlit app
          style={{
            width: "100%",
            height: "800px",
            border: "none",
          }}
        />
      </div>
    </div>
  );
};

export default ResumeAnalyzerPage;
