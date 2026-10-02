export default function Experience() {
    const experience = [
    {
        date: "Apr 2025 — Present",
        role: "Data Engineer",
        org: "Silicon Stack Pvt. Ltd.",
        desc: "Building AWS ETL pipelines for BI data lake projects — designing PySpark Glue jobs, resolving cross-account permissions, and getting production data reliably from raw files into warehouse tables.",
        tags: ["AWS Glue", "PySpark", "Apache Iceberg", "Redshift", "S3 Tables"],
    },
    {
        date: "Before Apr 2025",
        role: "Software Developer",
        org: "Invictus Business Solutions",
        desc: "Built BI systems end to end — backend services, background job processing, and mobile interfaces for internal reporting tools.",
        tags: ["Ruby on Rails", "Sidekiq", "PostgreSQL", "React Native"],
    },
    ];

    return (
        <section id="experience">
            <div className="wrap">
            <div className="section-head">
                <span className="section-num">02</span>
                <h2>Experience</h2>
            </div>
            <div className="timeline">
                {experience.map((item) => (
                <div className="tl-item" key={item.org}>
                    <span className="tl-date">{item.date}</span>
                    <div className="tl-role">{item.role}</div>
                    <div className="tl-org">{item.org}</div>
                    <p className="tl-desc">{item.desc}</p>
                    <div className="tag-row">
                    {item.tags.map((t) => (
                        <span className="tag" key={t}>{t}</span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    )
}