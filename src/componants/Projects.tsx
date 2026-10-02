export default function Projects() {
  const pipelineProjects = [
  {
    title: "Automotive BI",
    meta: "AWS-native data lake for a large automotive brand",
    desc: "Built PySpark Glue jobs parsing EDI files into Apache Iceberg staging tables and loading them into Redshift fact and dimension tables. Along the way: resolved Lake Formation cross-catalog permission issues, fixed a VPC connectivity gap with an S3 Tables interface endpoint, and moved EventBridge-to-Glue triggers onto Glue Workflows for reliable parameter passing.",
    flow: [
      { label: "Source", text: "EDI files in S3 vai SFTP" },
      { label: "Processing", text: "S3 Tables Iceberg staging tables  → PySpark Glue jobs" },
      { label: "Warehouse", text: "Redshift fact & dimension tables" },
    ],
    tags: ["AWS Glue", "PySpark", "Apache Iceberg", "Redshift", "Lake Formation", "EventBridge"],
  },
  {
    title: "Footware Brand BI And Reconciliation",
    meta: "Full stack data engieering application",
    desc: "Built a reconciliation pipeline for a footwear brand, ingesting CSV files from vendors into S3, processing them with Sidekiq Cron jobs. Along with build Full stack reconciliation application for the brand to track and resolve mismatches between vendor claims and internal records.",
    flow: [
      { label: "Source", text: "Raw CSV source data in S3" },
      { label: "Processing", text: "Sidekiq Cron jobs" },
      { label: "Warehouse", text: "PostgreSQL" },
    ],
    tags: ["Ruby on Rails", "Sidekiq", "Cron Jobs", "S3", "PostgreSQL"],
  },
];

const otherProjects = [
  {
    title: "ETL Operations Dashboard",
    desc: "A Next.js monitoring tool built on top of the Automotive BI operations tables tracks file load trends, daily and monthly summaries, and dealer-level insights.",
    tags: ["Next.js", "S3 Tables", "Athena", "AWS Cognito", "AWS Lambda", "AWS Amplify"],
  },
  {
    title: "Scan App",
    desc: "A reconciliation app for vendors raising e-commerce claims: media uploads to S3 paired with barcode scanning to match claims against records.",
    tags: ["React Native", "AWS S3", "Barcode Scanning", "API Integration", "Media Uploads"],
  },
  {
    title: "E-Commerce Reconciliation",
    desc: "A BI reconciliation pipeline built around CSV and XLSX file ingestion, with Sidekiq and cron jobs handling scheduled processing, Claim raising and tracking.",
    tags: ["Ruby on Rails", "Sidekiq", "Cron Jobs", "PostgreSQL"],
  },
  {
    title: "AC Control App",
    desc: "A proof-of-concept mobile app exploring a new product idea end to end, built in React Native.",
    tags: ["React Native", "API Integration", "Interactive UI", "Geo-Fencing", "Push Notifications"],
  },
];

  return (
        <section id="projects">
          <div className="wrap">
            <div className="section-head">
              <span className="section-num">03</span>
              <h2>Projects</h2>
            </div>

            {pipelineProjects.map((p) => (
              <div className="project" key={p.title}>
                <div className="project-head">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-meta">{p.meta}</p>
                  <p className="project-desc">{p.desc}</p>
                </div>
                <div className="flow-mini">
                  {p.flow.map((f) => (
                    <div key={f.label}>
                      <span className="flow-mini-label">{f.label}</span>
                      <div className="flow-mini-text">{f.text}</div>
                    </div>
                  ))}
                </div>
                <div className="project-footer">
                  <div className="tag-row">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="other-projects-head">
              <h3>Also shipped</h3>
            </div>
            <div className="other-projects-grid">
              {otherProjects.map((p) => (
                <div className="other-project" key={p.title}>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <div className="tag-row">
                    {p.tags.map((t) => (
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