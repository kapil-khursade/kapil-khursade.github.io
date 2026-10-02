import { useRef, useEffect } from "react";

export default function Hero() {
    const flowRef = useRef<HTMLDivElement>(null);

    // Re-trigger the pipeline fill-line animation whenever the hero scrolls into view
    useEffect(() => {
    const el = flowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            el.classList.add("is-visible");
        }
        },
        { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    }, []);

    const pipelineStages = [
    { num: "01", name: "Extract", detail: "EDI files landing\nin S3" },
    { num: "02", name: "Transform", detail: "AWS Glue + PySpark\ninto Iceberg tables" },
    { num: "03", name: "Load", detail: "Fact & dimension\ntables in Redshift" },
    { num: "04", name: "Serve", detail: "BI dashboards\nfor reporting" },
    ];

    return (
        <section className="hero">
          <div className="wrap">
            <p className="hero-eyebrow">Kapil · Pune, India</p>
            <h1>I build data pipelines that move data reliably, at scale.</h1>
            <p className="hero-lede">
              Data Engineer working on AWS ETL pipelines for BI data lake projects.
            </p>
            <div className="cta-row">
              <a href="#projects" className="btn btn-primary">See the pipelines</a>
              <a href="#contact" className="btn btn-secondary">Get in touch</a>
            </div>

            <div className="pipeline" ref={flowRef}>
              <p className="pipeline-caption">A typical pipeline I work on, end to end</p>
              <div className="pipeline-flow">
                {pipelineStages.map((stage) => (
                  <div className="stage" key={stage.num}>
                    <span className="stage-num">{stage.num}</span>
                    <div className="stage-name">{stage.name}</div>
                    <div className="stage-line" />
                    <div className="stage-detail">
                      {stage.detail.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

    )

}