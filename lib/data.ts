export const personal = {
  name: "Iswarya S",
  title: "Senior DevOps Engineer",
  tagline:
    "Automating CI/CD, cloud infrastructure, and container orchestration at scale — turning manual ops into shipped software.",
  location: "Chennai, India",
  email: "iswaryasuresh2001@gmail.com",
  phone: "+91 98943 69486",
  links: {
    linkedin: "#",
    github: "#",
    resume: "/resume.pdf",
  },
};

export const stats = [
  { label: "Years of Experience", value: "4+" },
  { label: "Deployment Time Reduced", value: "90%" },
  { label: "Monthly Cost Savings", value: "~50%" },
  { label: "Hackathon Wins", value: "1st 🏆" },
];

export const about = `Results-driven DevOps Engineer with 4 years of experience (including 6 months of internship) automating CI/CD pipelines, container orchestration, and cloud infrastructure. Expertise in AWS, Docker, Terraform, and Jenkins to drive scalable, secure deployments. Proven track record in cost optimization (50%+ savings) and innovation, including leading an award-winning project at the India DevOps Hackathon. Passionate about enhancing system reliability, reducing deployment times by 90%, and fostering cross-team collaboration in fast-paced environments.`;

export const skills: { category: string; items: string[] }[] = [
  { category: "Cloud Platforms", items: ["AWS"] },
  { category: "Containers & Orchestration", items: ["Docker", "Amazon ECS"] },
  { category: "Infrastructure as Code", items: ["Terraform", "Ansible"] },
  { category: "CI/CD & DevSecOps", items: ["Jenkins", "Git", "GitLeaks", "Anchore", "SAST/DAST"] },
  { category: "Scripting & Automation", items: ["Python", "Bash"] },
  { category: "Monitoring & Logging", items: ["Datadog", "ELK Stack"] },
  { category: "Operating Systems", items: ["Linux"] },
  { category: "Methodologies", items: ["Agile", "Virtualization"] },
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  groups: { title?: string; bullets: string[] }[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Senior DevOps Engineer",
    company: "Applied Data Finance",
    location: "Velachery, Chennai",
    period: "Jun 2022 – Present",
    groups: [
      {
        title: "ADF-Devbox — Award-Winning Scalable Dev Environment Automation (India DevOps Hackathon Winner, Bangalore — 1st Place)",
        bullets: [
          "Designed and automated a single-instance ADF-Devbox setup using Terraform, Jenkins, Ansible, and Python to containerize 20+ core applications; enabled on-demand launches via Jenkins jobs with app selection — scaled from 40–60 static instances to 1000+ spot instances/month, reducing time-to-market by 90% (~20 min vs. 1+ days).",
          "Optimized for cost & reliability with AWS Spot Instance Advisor (10–15% premium bidding), multi-AZ failover, auto-stop/terminate scripts, and EFS/EBS data backup on interruption — achieved ~50% monthly savings ($4,655 static → $2,200–$2,700 spot avg.) over 1+ year, monitored via Datadog.",
          "Enforced VPN-only access, NAT Gateway egress, domain segregation; automated AMI patching with AWS Image Builder; integrated GitLeaks, Anchore, SAST/DAST in CI — boosted AWS Security Hub compliance to 100% for ECR images.",
        ],
      },
      {
        title: "Containerization & Deployment",
        bullets: [
          "Dockerized multiple Python and Java internal applications and deployed via Docker in non-prod/prod with fine-tuned pipelines and optimized base images.",
          "Built custom Docker base images for Python/Java/Golang apps; automated image patching, OS upgrades, and ECR promotion across environments.",
          "Rolled out PDSCAN across all production servers and ECS environments to detect sensitive PII data — strengthening compliance and risk mitigation.",
        ],
      },
      {
        title: "Orchestration & Infrastructure as Code",
        bullets: [
          "Built complete AWS ECS clusters using Terraform with reusable modules for CI Spot instances and ASG scaling; enabled blue-green deployments with rollback and self-healing.",
          "Configured ECS service autoscaling with zero-downtime deployments under varying workloads.",
          "Automated AMI creation across environments via EC2 Image Builder, streamlining quarterly patching.",
        ],
      },
      {
        title: "CI/CD & DevSecOps Pipelines",
        bullets: [
          "Built and managed Jenkins pipelines for Docker and ECS apps, integrating security scanning, deployment validation, and environment promotion.",
          "Integrated SAST, DAST, and dependency scanning into CI/CD flows, reducing vulnerabilities pre-deploy.",
          "Configured ECS blue-green and rolling updates with automated rollback.",
        ],
      },
      {
        title: "Automation & Process Optimization",
        bullets: [
          "Built Python/Bash automation for environment cleanup, instance management, log rotation, cron setup, and monitoring — saving hours weekly.",
          "End-to-end DevOps automation from infra provisioning to CI/CD and cloud security enforcement.",
        ],
      },
      {
        title: "Monitoring, Logging & Troubleshooting",
        bullets: [
          "Deployed ELK stack for multiple applications; configured Datadog dashboards/alerts for ECS, EC2, and service metrics.",
          "Automated alert tuning, log aggregation, and ECS container health tracking — minimizing false positives, ensuring high availability.",
        ],
      },
    ],
  },
  {
    role: "DevOps Engineer Intern",
    company: "Applied Data Finance",
    location: "Velachery, Chennai",
    period: "Jan 2022 – Jun 2022",
    groups: [
      {
        bullets: [
          "Acquired hands-on expertise in Docker, Jenkins (CI/CD), and automation tools; integrated into Python/Java apps — accelerated deployments and reduced manual effort.",
          "Implemented PDSCAN on production servers to scan for sensitive PII data, enhancing data security and compliance.",
        ],
      },
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Applied Data Finance",
    location: "Velachery, Chennai",
    period: "Jun 2021 – Dec 2021",
    groups: [
      {
        bullets: [
          "Improved code quality through unit testing with JUnit and Mockito — comprehensive coverage of code paths and edge cases, ensuring reliability.",
        ],
      },
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  problem: string;
  solution: string[];
  impact: string[];
  stack: string[];
  badge?: string;
};

export const projects: Project[] = [
  {
    name: "ADF-Devbox",
    tagline: "Spot-instance powered unified dev environment — 1000+ launches/month, 90% faster.",
    badge: "🏆 Hackathon Winner",
    problem:
      "Engineering teams faced resource contention and 1+ day setup delays across 40–60 static instances, with high monthly AWS spend and inconsistent environments.",
    solution: [
      "Single-instance ADF-Devbox provisioned via Terraform + Ansible, containerizing 20+ core apps.",
      "Jenkins-driven on-demand launches with app selection, multi-AZ failover, and AWS Spot Instance Advisor bidding.",
      "Auto-stop/terminate after business hours; EFS/EBS backups on Spot interruption.",
      "Hardened with VPN-only access, NAT egress, AMI patching via Image Builder, and GitLeaks/Anchore/SAST/DAST in CI.",
    ],
    impact: [
      "Setup time: 1+ days → ~20 minutes (90% reduction).",
      "Cost: $4,655/mo static → $2,200–$2,700/mo spot (~50% savings).",
      "AWS Security Hub compliance: 100% for ECR container images.",
      "1st place — India DevOps Hackathon 2024, Bangalore.",
    ],
    stack: ["AWS", "Terraform", "Jenkins", "Ansible", "Python", "Docker", "ECS", "Datadog", "Image Builder"],
  },
  {
    name: "PII-Analyzer with AI/LLM",
    tagline: "Multi-modal sensitive data detection across logs, PDFs, images, audio, and video.",
    problem:
      "Traditional regex-based PII scanners (PDSCAN/Presidio-style) miss context, generate false positives, and fail on unstructured/multi-modal data — putting compliance and audit posture at risk.",
    solution: [
      "Hybrid pipeline: deterministic regex/NER for fast wins + LLM classifier for ambiguous, contextual cases.",
      "Multi-modal ingestion — log files, PDFs, JPG/PNG (OCR), audio (speech-to-text), and video (frame + transcript) normalized into a common text stream.",
      "Embeddings-based context windowing to disambiguate names, IDs, and account numbers from surrounding text.",
      "Presidio-compatible analyzer/recognizer interface for drop-in adoption; redaction & risk-scoring outputs.",
      "Containerized as a microservice with batch + streaming modes; pluggable LLM providers (OpenAI / Anthropic / local).",
    ],
    impact: [
      "Significantly reduced false positives vs. pure-regex baseline on unstructured logs.",
      "Extended PII coverage to previously-blind formats (images, audio, video).",
      "Enables compliance teams to scan heterogeneous corpora from a single API.",
    ],
    stack: ["Python", "LLMs (OpenAI / Anthropic)", "LangChain", "Presidio", "Regex/NER", "OCR", "Whisper", "Embeddings", "Docker"],
  },
  {
    name: "Airflow Migration Tool — Pentaho → Airflow",
    tagline: "Automated converter that turns Pentaho jobs/transformations into production-ready Airflow DAGs.",
    problem:
      "Hand-porting hundreds of Pentaho .ktr/.kjb workflows (and ad-hoc .py scripts) to Airflow is slow, error-prone, and blocks modernization to a code-first orchestrator.",
    solution: [
      "Parser for Pentaho .ktr (transformations), .kjb (jobs), and inline .py scripts — extracts steps, dependencies, parameters, and connection metadata into an intermediate IR.",
      "Dependency graph builder that translates Pentaho hops & job entries into Airflow task dependencies (>>, TaskGroups).",
      "Jinja2-based code generator emitting idiomatic Airflow DAGs with proper operators (BashOperator, PythonOperator, SQL/JDBC operators) and connection placeholders.",
      "Validation pass + dry-run to catch unsupported steps and surface manual-review items with line-level annotations.",
      "CLI + batch mode for migrating an entire repository in one shot.",
    ],
    impact: [
      "Cuts Pentaho → Airflow migration effort from weeks to hours per workflow.",
      "Produces consistent, review-ready DAGs with clear TODOs for non-trivial steps.",
      "Unblocks adoption of a code-first, version-controlled orchestration platform.",
    ],
    stack: ["Python", "XML / lxml", "AST", "Jinja2", "Apache Airflow", "Click (CLI)"],
  },
];

export const awards = [
  {
    title: "India DevOps Hackathon Winner — 1st Place",
    where: "Bangalore, 2024",
    detail:
      "Recognized for the ADF-Devbox project — excelling in cost reduction, automation, and scalable DevOps innovation.",
  },
];

export const education = [
  {
    degree: "B.Tech in Information Technology",
    school: "Sri Krishna College of Engineering and Technology, Coimbatore",
    period: "Jan 2018 – Jan 2022",
    detail: "First Class with Distinction · CGPA 9.22",
  },
  {
    degree: "HSC (Biology)",
    school: "Krishnasamy Matriculation Memorial Higher Secondary School",
    period: "2016 – 2018",
    detail: "92%",
  },
  {
    degree: "SSLC",
    school: "Krishnasamy Matriculation Memorial Higher Secondary School",
    period: "2016",
    detail: "98%",
  },
];

export const languages = [
  { name: "Tamil", level: "Advanced" },
  { name: "English", level: "Proficient" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];
