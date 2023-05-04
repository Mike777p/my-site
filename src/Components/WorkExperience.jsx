import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import Wrapper from "../Assets/Wrappers/WorkExperienceWrapper";
import LondonEnglishVetnam23 from "../Assets/Images/LondonEnglishVetnam23.jpg"
import DTP from "../Assets/Images/DTP.jpeg"
import JLR from "../Assets/Images/JLR.jpeg"
import AA from "../Assets/Images/AA.jpeg"

const JobExperience = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobData = [
    {
      title: 'Freelance Software Engineer, Content Creator and Educator',
      company: 'Mikee7Media',
      logo: LondonEnglishVetnam23,
      startDate: '2022',
      endDate: 'Present',
      description:
        'Currently working online as a freelance software engineer. Also I am teaching coding and English to students from all over the world. Being a freelance remote worker I am self-motivated and efficient in the technology and practices of communicating effectively online. ',
    },
    {
      title: 'English Teacher',
      company: 'DTP',
      logo: DTP,
      startDate: '2019',
      endDate: '2022',
      description:
        "During the pandemic I was traveling and decided to stay in South East Asia and teach English. I taught in classrooms and online to students of all ages. It was an amazing experience I'll never forget",
    },
    {
        title: 'JLR (Jaguar Land Rover) - Team Manager',
        company: 'AA (Automobile Association)',
        logo: JLR,
        startDate: '2017',
        endDate: '2019',
        description:
          'Effectively supervised a national team of 25 engineers, focusing on performance optimization and stakeholder communication. My guidance on best practices and comprehensive performance reporting led to increased KPI’s performance.',
      },
    {
        title: 'Team Manager',
        company: 'AA (Automobile Association)',
        logo: AA,
        startDate: '2014',
        endDate: '2017',
        description:
          'Effectively led and coordinated a team of 25 roadside engineers, overseeing performance reviews, goal-setting, recruitment, and disciplinary actions.',
      },
      {
        title: 'Technical Specialist',
        company: 'AA (Automobile Association)',
        logo: AA,
        startDate: '2012',
        endDate: '2014',
        description:
          'Provided technical expertise to a team of 25 roadside engineers, either by phone or in person. Created and conducted technical training to a team including health and safety, on the job best practices, and technical improvement.',
      }
  ];

  const handleClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <Wrapper>
        <h2>Work Experience</h2>
      <div className="timeline">
        {jobData.map((job, index) => (
          <div key={index} className="timeline-item" onClick={() => handleClick(job)}>
            <div className="timeline-item-content">
              <div className="company-logo">
                <img src={job.logo} alt={`${job.company} logo`} />
              </div>
              <div className="job-info">
                <h3>{job.title}</h3>
                <p className="time">
                  {job.company} <FaMapMarkerAlt /> Start Year: {job.startDate} - End Year: {job.endDate}
                </p>
              </div>
              <div className={selectedJob === job ? "job-details active" : "job-details"}>
                <h3>{job.title}</h3>
                <p>
                  {job.company} <FaMapMarkerAlt /> Start Year: {job.startDate} - End Year: {job.endDate}
                </p>
                <img src={job.logo} alt={`${job.company} logo`} />
                <p>{job.description}</p>
                <button onClick={() => setSelectedJob(null)}>Close</button>
              </div>
            </div>
            <div className="timeline-item-separator"></div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default JobExperience;
