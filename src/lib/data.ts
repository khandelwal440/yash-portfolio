import { Code2, Database, Globe2, LayoutDashboard, ShieldCheck, Smartphone } from "lucide-react";

export const profile = {
  name: "Yash",
  role: "Software Developer & infra Build ",
  tagline: " building scalable infrastructure tools .",
  location: "India",
  email: "yashkhandelwal451@gmail.com",
  github: "https://github.com/khandelwal440",
  linkedin: "https://www.linkedin.com/",
  resume: "YASH Resume (1).pdf",
  summary:
    "building scalable infrastructre tools & software desiging ."
};
export const about = {
  intro:
    "I'm a Software Developer & Infrastructure Engineer who enjoys building scalable applications and automating cloud infrastructure—from writing clean code to deploying reliable production systems.",

  currentFocus:
    "Currently building cloud-native applications using modern web technologies while leveraging AWS, Kubernetes, Amazon EKS, Docker, and Infrastructure as Code (IaC) for scalable and secure deployments.",

  whatICareAbout:
    "I care about clean, maintainable code, reliable cloud infrastructure, automated deployment pipelines, and building systems that are secure, scalable, and easy to manage.",

  highlights: [
    {
      title: "Software Development",
      description:
        "Developing responsive, high-performance web applications using React, Next.js, TypeScript, and modern development practices.",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Designing and managing AWS cloud infrastructure with Amazon EKS, EC2, VPC, IAM, and Infrastructure as Code (Terraform/CloudFormation).",
    },
    {
      title: "DevOps & Automation",
      description:
        "Building CI/CD pipelines, containerizing applications with Docker, and automating deployments using Kubernetes and GitHub Actions.",
    },
    {
      title: "Scalable Architecture",
      description:
        "Implementing secure three-tier architectures, monitoring production environments, and optimizing application performance and reliability.",
    },
  ],
};


export const services = [
  {
    title: "Technical Skills",
    text: "Python, Linux Fundamental, MySQL, web development,.",
    icon: LayoutDashboard,
  },
  {
    title: "Devops & Cloud",
    text: "Git, Github,CI/CD Concepts, Docker, Kubernetes, AWS, .",
    icon: Database
  },
  {
    title: "Tools ",
    text: "VS Code,Docker, GitHub Actions,.",
    icon: Globe2
  }
];

export const skills = [
  "Python",
  "Linux",
  "MySQL",
  "React",
  "Next.js",
  "TypeScript",
  "Docker",
  "Kubernetes",
  "AWS",
  "GitHub Actions",
];

export const highlights = [
  { label: "Projects", value: "3+" },
  { label: "Technologies", value: "10+" },
  { label: "Cloud Focus", value: "AWS" },
];

export const projects = [
  {
    title: "Diabetes prediction Model",
    type: "Machine Learning",
    description: "Developed a machine learning model for diabetes prediction using Python, scikit-learn, and pandas, achieving high accuracy and providing valuable insights for healthcare applications.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80",
    stack: ["Python", "scikit-learn", "pandas"],
  },
  {
    title: "Three-Tier Architecture & Cloud",
    type: "Cloud Infrastructure",
    description: "Hands-on experience with Three-Tier Architecture, Amazon EKS, Kubernetes, Docker, and Infrastructure as Code (IaC) for cloud application deployment.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    stack: ["AWS", "EKS", "Kubernetes", "Docker"],
  },
  {
    title: "E-commerce",
    type: "Full Stack",
    description: "Built a strong foundation in e-commerce development, responsive web applications, and database-driven solutions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    stack: ["Next.js", "TypeScript", "MySQL"],
  },
];


export const strengths = [
  { title: "Clean Code", icon: Code2 },
  { title: "Responsive UI", icon: Smartphone },
  { title: "Reliable APIs", icon: ShieldCheck }
];

export const timeline = [
  {
    label: "Now",
    title: "Cloud-Native Development",
    text: "Building web applications and infrastructure with AWS, Kubernetes, Docker, and Infrastructure as Code.",
  },
  {
    label: "Focus",
    title: "Full-Stack Engineering",
    text: "Creating responsive, database-driven applications with modern web technologies.",
  },
  {
    label: "Foundation",
    title: "Automation & Delivery",
    text: "Improving reliability through CI/CD pipelines, GitHub Actions, and repeatable deployments.",
  },
];
