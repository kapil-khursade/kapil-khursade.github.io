import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Responsive from './subComponent/Responsive';

function skills() {

    const skills = [
        { name: "Ruby", proficiency: 80 },
        { name: "JavaScript", proficiency: 85 },
        { name: "Java", proficiency: 70 },
        { name: "Python", proficiency: 40 },
        { name: "HTML", proficiency: 90 },
        { name: "CSS", proficiency: 80 },
        { name: "React", proficiency: 75 },
        { name: "React", proficiency: 75 },
        { name: "Bootstrap", proficiency: 70 },
        { name: "MySQL", proficiency: 70 },
        { name: "PostgreSQL", proficiency: 75 },
        ];

        const resObjForCardHeight = {
          'Desktop': 'vh-100',
          'Tablet': 'p-2',
          'Mobile': 'p-2'
        }  
      
        return (
            <Container
                id="skills"
                className={`text-center d-flex justify-content-center align-items-center ${Responsive(resObjForCardHeight)}`}
            >
            <Card className="">
              <Card.Header className="text-center mb-4">My Skills</Card.Header>
              <Card.Body className="row">
                {skills.map((skill, index) => (
                  <div key={index} className="col-md-6 mb-3">
                    <div className="d-flex justify-content-between">
                      <span>{skill.name}</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.proficiency}%` }}
                        aria-valuenow={skill.proficiency}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </Card.Body>
              </Card>
            </Container>
          );
}

export default skills