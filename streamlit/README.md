# Smart ATS Resume Analyzer

### Problem Statement

In today's competitive job market, job seekers face challenges ensuring their resumes align with job descriptions, meeting the criteria of Applicant Tracking Systems (ATS). ATS filters often reject resumes that lack specific keywords or don't match job requirements, reducing the chances of securing interviews. This creates a need for a tool to help job seekers optimize their resumes for ATS compliance and highlight areas for improvement.

### Business Use Cases

1. Resume Optimization for ATS

    Assist job seekers in tailoring their resumes to specific job descriptions by identifying missing keywords and providing actionable feedback.

2. Personalized Resume Improvement

    Deliver detailed analysis and suggestions for enhancing resume content, improving the likelihood of securing interviews.

3. Efficient Resume Evaluation

    Streamline the process of evaluating resumes for job applicants, recruiters, or career counselors, ensuring effective job application strategies.

4. Enhancing Job Search Success

    Empower candidates with insights into how their resumes align with job postings, helping them stand out in a crowded job market.

5. Scalable Job Application Support

    Provide a scalable solution for career platforms, educational institutions, or HR consultancies to offer resume analysis as a service.

### Key Features

1. Resume-Job Description Match Analysis

    Calculates a match percentage between the provided resume and job description.

2. Keyword Identification

    Lists critical missing keywords to improve ATS compatibility.

3. Detailed Profile Summary

    Offers a comprehensive analysis of strengths and areas for improvement in the resume.

4. User-Friendly Interface

    A simple and intuitive interface powered by Streamlit, enabling seamless user interaction.

### How It Works
1. Upload Resume
    Upload your resume in PDF format.

2. Provide Job Description
    Paste the job description into the provided text area.

3. Analyze Resume
    The tool extracts text from the resume, processes it using Generative AI (Google's Gemini model), and provides actionable insights.

4. Review Results

    - Match Score: Displays a percentage match.
    - Missing Keywords: Lists important keywords missing from the resume.
    - Profile Summary: Provides detailed suggestions for resume improvement

### Project Setup

1. Clone the Repository
```bash
git clone <repository-url>
cd smart-ats-resume-analyzer
```

2. Create Virtual Environment
```bash
conda create -p env python=3.10 -y
```

3. Install Dependencies
```bash
pip install -r requirements.txt
```

4. Environment Configuration Create a .env file in the root directory:
```bash
GOOGLE_API_KEY =your_api_key_here
```

5. Run the Application
```bash
streamlit run app.py
```


### Future Enhancements

    - Multi-Format Resume Support: Extend support to other formats like Word (.docx).
    - Customizable Feedback: Allow users to specify job sectors for tailored suggestions.
    - Multilingual Support: Enable resume analysis in multiple languages.
    - Integration with Job Portals: Directly fetch job descriptions from popular job boards.
    - Analytics Dashboard: Provide aggregate insights into common gaps in resumes.