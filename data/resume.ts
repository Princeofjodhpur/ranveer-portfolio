// Resume data - sourced from Ranveer Singh Sankhala's resume
export const resumeData = {
  personal: {
    name: "Ranveer Singh Sankhala",
    title: "QA Engineer | Automation Test Engineer",
    tagline: "Ensuring Software Excellence Through Precision Testing",
    email: "ranveersinghsankhala@gmail.com",
    phone: "+91-9509204928",
    location: "India",
    linkedin: "https://linkedin.com/in/ranveer-singh-sankhala",
    github: "https://github.com/ranveersinghsankhala",
    whatsapp: "https://wa.me/919509204928",
    summary:
      "Detail-oriented QA Engineer with 2+ years of experience in manual and automation testing. Proficient in Playwright, Selenium, and API testing using Postman. Passionate about delivering high-quality software by identifying critical bugs early in the development cycle, with strong expertise in agile environments.",
  },
  skills: {
    automation: [
      { name: "Playwright", level: 95 },
      { name: "Selenium WebDriver", level: 90 },
      { name: "TestNG", level: 85 },
      { name: "JUnit", level: 80 },
      { name: "Cypress", level: 75 },
    ],
    api: [
      { name: "Postman", level: 92 },
      { name: "REST API Testing", level: 90 },
      { name: "API Automation", level: 85 },
    ],
    programming: [
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "Java", level: 78 },
      { name: "Python", level: 70 },
    ],
    tools: [
      { name: "JIRA", level: 92 },
      { name: "Git/GitHub", level: 88 },
      { name: "Jenkins", level: 75 },
      { name: "Docker", level: 70 },
      { name: "Azure DevOps", level: 72 },
    ],
    testing: [
      "Manual Testing",
      "Automation Testing",
      "Functional Testing",
      "Regression Testing",
      "API Testing",
      "Performance Testing",
      "Cross-Browser Testing",
      "Mobile Testing",
      "Smoke & Sanity Testing",
      "UAT",
      "BDD/TDD",
      "Agile/Scrum",
    ],
  },
  experience: [
    {
      company: "Current Company",
      role: "QA Automation Engineer",
      duration: "2023 – Present",
      location: "India",
      highlights: [
        "Developed and maintained 200+ automated test cases using Playwright with TypeScript, reducing regression testing time by 60%",
        "Designed end-to-end test automation framework from scratch implementing Page Object Model (POM) design pattern",
        "Performed API testing using Postman and automated REST API test suites with JavaScript",
        "Collaborated with cross-functional teams in an Agile/Scrum environment, participating in sprint planning and retrospectives",
        "Identified and reported 150+ critical bugs, contributing to a 40% improvement in product quality",
        "Integrated automated test suites with CI/CD pipelines using Jenkins and GitHub Actions",
        "Conducted cross-browser and cross-platform testing ensuring compatibility across Chrome, Firefox, Safari, and Edge",
      ],
    },
    {
      company: "Previous Company",
      role: "QA Engineer (Manual & Automation)",
      duration: "2022 – 2023",
      location: "India",
      highlights: [
        "Executed comprehensive manual testing including functional, regression, smoke, and UAT testing",
        "Created detailed test plans, test cases, and test reports using JIRA and Confluence",
        "Performed exploratory testing to uncover edge-case defects not covered by test scripts",
        "Built initial automation scripts using Selenium WebDriver with Java",
        "Worked closely with developers and product managers to understand requirements and ensure test coverage",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science / Information Technology",
      institution: "University / College Name",
      year: "2022",
      grade: "7.5+ CGPA",
    },
  ],
  certifications: [
    {
      name: "Playwright Automation Testing",
      issuer: "Udemy / Online Platform",
      year: "2023",
      icon: "🎭",
    },
    {
      name: "ISTQB Foundation Level",
      issuer: "ISTQB",
      year: "2022",
      icon: "✅",
    },
    {
      name: "API Testing with Postman",
      issuer: "Postman / Online",
      year: "2023",
      icon: "🚀",
    },
  ],
  projects: [
    {
      title: "E-Commerce Test Automation Suite",
      description:
        "Built a comprehensive Playwright automation framework for an e-commerce platform covering 300+ test scenarios including cart, checkout, payment flows, and user authentication.",
      tech: ["Playwright", "TypeScript", "GitHub Actions", "Allure Reports"],
      highlights: [
        "Reduced manual testing effort by 70%",
        "Integrated with CI/CD pipeline for automated regression",
      ],
      icon: "🛒",
    },
    {
      title: "API Testing Framework",
      description:
        "Designed a robust REST API testing framework using Postman and Newman for automated API validation, including authentication, CRUD operations, and error handling scenarios.",
      tech: ["Postman", "Newman", "JavaScript", "Jenkins"],
      highlights: [
        "100% API endpoint coverage",
        "Automated daily regression runs",
      ],
      icon: "🔗",
    },
    {
      title: "Cross-Browser Testing Pipeline",
      description:
        "Implemented a Selenium Grid-based cross-browser testing setup enabling parallel execution across multiple browsers and platforms, reducing test execution time by 50%.",
      tech: ["Selenium", "Java", "TestNG", "Docker", "Selenium Grid"],
      highlights: ["Parallel execution on 5+ browsers", "50% faster test runs"],
      icon: "🌐",
    },
  ],
  stats: [
    { label: "Years Experience", value: "2+", icon: "⚡" },
    { label: "Test Cases Written", value: "500+", icon: "✍️" },
    { label: "Bugs Reported", value: "300+", icon: "🐛" },
    { label: "Automation Coverage", value: "80%", icon: "🤖" },
  ],
};
