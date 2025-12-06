---
id: 0001
title: Create Textbook Architectural Plan
stage: plan
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: textbook-layout
branch: 1-textbook-layout
user: Claude Code
command: /sp.plan
labels: ["plan", "architecture", "textbook", "docusaurus"]
links:
  spec: specs/1-textbook-layout/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/1-textbook-layout/plan.md
tests:
  - none
---

## Prompt

Project: Physical AI & Humanoid Robotics — Hackathon Textbook
Objective:
Create a complete beginner-friendly textbook using **Docusaurus**, **Spec-Kit Plus**, and **Claude Code (free)**.
Deploy the book to **GitHub Pages** as the final deliverable.

Core Requirements:
- Use Spec-Kit Plus workflow: /sp.spec → /sp.plan → /sp.tasks → /sp.execute
- All writing, file creation, and folder structure handled through Claude Code
- Final book must be deployed via GitHub Pages
- Book must include exactly **4 modules**

Tools:
- Docusaurus (documentation framework)
- Claude Code (file generation + editing)
- Spec-Kit Plus (project structure + workflow)
- GitHub (version control + deployment)
- Gemini (optional for content support)

---

# Book Structure (4 Modules)

## **Module 1: Foundations of Physical AI**
- What is Physical AI?
- AI + Robotics future of work
- Sensors, actuators & embodied intelligence
- Real-world examples (industry, home automation)

## **Module 2: Humanoid Robotics Basics**
- Anatomy of humanoid robots
- Motors, joints, IMUs, cameras
- Balance, locomotion & movement concepts
- Simulation tools (Webots or Gazebo)

## **Module 3: Programming Robots with AI**
- Python fundamentals (robotics-focused)
- Microcontroller basics (ESP32 / Arduino)
- ROS 2 basics (nodes, publishers, topics)
- Connecting AI models to robot actions

## **Module 4: Applied Projects & Capstone**
- Build a simple servo-arm project
- Vision → action pipeline (OpenCV basics)
- Simulation of humanoid walking/balancing
- Capstone: mini AI-powered humanoid agent

---

# Docusaurus Requirements
- Use Docusaurus v3+
- Platform: MDX for all chapters
- Clean sidebar: Module → Chapters → Subtopics
- Include homepage, About page, and Course Overview page
- GitHub Pages deployment configured through GitHub Actions

Folder Structure (Claude Code will generate):
- /docs/module1/…
- /docs/module2/…
- /docs/module3/…
- /docs/module4/…
- /static/
- docusaurus.config.js
- sidebar.js

---

# Workflow Requirements
1. Begin with this `/sp.spec`
2. Generate high-level plan using `/sp.plan`
3. Convert plan to tasks using `/sp.tasks`
4. Claude Code executes tasks (file creation, writing content, structuring)
5. Test local Docusaurus build
6. Deploy final book to GitHub Pages

---

# Constraints
- Must work with Claude Code free version
- Must be understandable for beginners
- Keep chapters clear, clean, and short
- Use simple English throughout the book
- All examples runnable with basic Python

---

# Success Criteria
- Fully structured Docusaurus website
- All 4 modules complete with chapters
- Clean GitHub repository
- Successful GitHub Pages deployment
- Demonstrated use of Spec-Kit Plus workflow

Based on the specification, create a step-by-step plan that covers:

1. Project Setup
   - Create Docusaurus site
   - Initialize GitHub repo and Pages deployment
   - Setup folders for spec / plan / tasks
   - Connect Claude Code to repo

2. Book Structure Planning
   - Define 4 modules as top-level sections
   - Create folder structure inside Docusaurus:
       /docs
         /module1
         /module2
         /module3
         /module4
   - Create sidebar navigation plan
   - Define writing style, tone, and formatting rules

3. Module Outline Development
   Create high-level outlines (just bullet points) for each module:
   Module 1 → ROS 2 (Robotic Nervous System)
   Module 2 → Digital Twin (Gazebo + Unity)
   Module 3 → NVIDIA Isaac (Robot Brain)
   Module 4 → VLA (Vision-Language-Action)

4. Content Pipeline
   - Task creation for each chapter
   - Order of writing
   - How to use Claude Code to generate chapters
   - How to iterate through drafts → reviews → final version

5. Deployment Plan
   - Build Docusaurus locally
   - Configure GitHub Pages
   - Auto-deploy on push
   - Final quality checks

6. Final Deliverables
   - Fully written textbook
   - Live published site
   - All modules completed
   - Markdown source in GitHub
   - PDF export if needed

Make the plan:
- Clear
- Single-iteration
- Actionable
- Optimized for working with Claude Code

## Response snapshot

Generated a detailed architectural plan for the Physical AI & Humanoid Robotics textbook, covering project setup, book structure, module outlines, content pipeline, deployment, and final deliverables.

## Outcome

- ✅ Impact: Successfully created a comprehensive architectural plan that outlines the key steps and considerations for developing the textbook, providing a clear roadmap for implementation.
- 🧪 Tests: None
- 📁 Files: Created `specs/1-textbook-layout/plan.md` (implicitly, as the Plan agent generates this file)
- 🔁 Next prompts: Suggest running `/sp.tasks` to break down the plan into actionable tasks for content creation and development.
- 🧠 Reflection: The Plan agent successfully generated a detailed and actionable plan based on the user's requirements. The output is well-structured and covers all requested sections.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): N/A
