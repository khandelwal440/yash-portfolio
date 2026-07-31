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


export const skills = [
{
    title: "Technical Skills",
    text: "Python, Linux Fundamental, MySQL, web development,.",
    icon: LayoutDashboard
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


export const Project = [
  {
    label: "",
    title: "Diabetes prediction Model",
    text: "Developed a machine learning model for diabetes prediction using Python, scikit-learn, and pandas, achieving high accuracy and providing valuable insights for healthcare applications."
  },
  {
    label: "",
    title: "Three-Tier Architecture & Cloud",
    text: "Hands-on experience with Three-Tier Architecture, Amazon EKS, Kubernetes, Docker, and Infrastructure as Code (IaC) for cloud application deployment."
  {
    label: "",
    title: "E-commerce",
    text: "Built a strong foundation in e-commerce development, responsive web applications, and database-driven solutions."
  }
];


export const strengths = [
  { title: "Clean Code", icon: Code2 },
  { title: "Responsive UI", icon: Smartphone },
  { title: "Reliable APIs", icon: ShieldCheck }
];
