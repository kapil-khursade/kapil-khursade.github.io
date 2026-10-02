export default function About() {

    const stats = [
    { label: "Current role", value: "Data Engineer, Silicon Stack" },
    { label: "Since", value: "April 2025" },
    { label: "Education", value: "B.Tech, Mechanical Engineering — Shivaji University" },
    { label: "Certifications", value: "Full Stack Developer (Masai School), AWS Foundational" },
    ];

    return (
        <section id="about">
            <div className="wrap">
            <div className="section-head">
                <span className="section-num">01</span>
                <h2>About</h2>
            </div>
            <div className="about-grid">
                <div className="about-body">
                <p>
                    I started out in <strong>Mechanical Engineering</strong> before moving into 
                    software a background that shows up as a habit of thinking in systems and tolerances rather than
                    just code. I completed a Full Stack Developer certification at Masai School, then spent
                    time at <strong>Invictus Business Solutions</strong> building full-stack applications end to end.
                </p>
                <p>
                    Today at <strong>Silicon Stack Pvt. Ltd.</strong>, most of my work sits in the AWS data stack: 
                    Glue and PySpark for transformation,
                    Apache Iceberg for table formats, and Redshift as the warehouse layer. I like the parts of
                    the job that are unglamorous but load-bearing permissions, VPC connectivity, schema
                    drift the things that make a pipeline actually trustworthy in production.
                </p>
                </div>
                <ul className="stat-list">
                {stats.map((s) => (
                    <li key={s.label}>
                    <span className="stat-label">{s.label}</span>
                    <span className="stat-value">{s.value}</span>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </section>)
    }