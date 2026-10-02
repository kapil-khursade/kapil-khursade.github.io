export default function Skills() {
  const skillGroups = [
    {
      title: "Data Engineering",
      items: ["AWS Glue", "PySpark", "Apache Iceberg", "Amazon Redshift", "S3 Tables", "Lake Formation", "VPC Networking", "IAM"],
    },
    {
      title: "Backend & Data",
      items: ["Ruby on Rails", "Sidekiq", "PostgreSQL", "Python", "Node.js"],
    },
    {
      title: "Frontend & Cloud",
      items: ["React", "React Native", "Next.js", "AWS Foundational", "EventBridge"],
    },
  ];

  return (
        <section id="skills">
          <div className="wrap">
            <div className="section-head">
              <span className="section-num">04</span>
              <h2>Skills</h2>
            </div>
            <div className="skills-grid">
              {skillGroups.map((g) => (
                <div className="skill-group" key={g.title}>
                  <h3>{g.title}</h3>
                  <ul>
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}