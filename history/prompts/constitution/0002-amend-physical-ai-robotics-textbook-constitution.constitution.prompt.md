---
id: 0002
title: Amend Physical AI Robotics Textbook Constitution
stage: constitution
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: Claude Code
command: /sp.constitution
labels: ["constitution", "project-standards", "workflow", "textbook"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - none
---

## Prompt

/sp.constitution

Project: Hackathon I — Textbook for Physical AI & Humanoid Robotics

Core principles:
- Technical accuracy using ROS 2, Gazebo, Unity, and NVIDIA Isaac documentation
- Clear, beginner-friendly explanations
- Hands-on focus with runnable code, labs, and simulations
- Consistent structure, tone, and formatting across all chapters
- Emphasis on embodied intelligence and real-world robot control

Key standards:
- Follow Modules 1–4 and weekly breakdown from course outline
- All examples must run on Ubuntu 22.04, ROS 2 Humble/Iron, and Isaac Sim
- Each chapter must include objectives, theory, code, exercises, and summary
- Use Docusaurus-compatible Markdown for all content
- No outdated or deprecated APIs

Constraints:
- Output format: Docusaurus Markdown
- Deployment: GitHub Pages
- Code validated (Python + rclpy)
- Keep explanations concise and structured

Success criteria:
- Complete multi-module textbook with labs, exercises, and capstone project
- All examples runnable in simulation or Jetson hardware
- Docusaurus site builds without errors
- Capstone humanoid robot workflow fully documented and functional

## Response snapshot

Updated the project constitution in `.specify/memory/constitution.md` to reflect new core principles, key standards, constraints, and success criteria for the Physical AI & Humanoid Robotics textbook project.

## Outcome

- ✅ Impact: The project's foundational guidelines for content creation, technical implementation, and quality assurance have been updated to align with the detailed requirements for the Physical AI & Humanoid Robotics textbook.
- 🧪 Tests: None
- 📁 Files: Modified `.specify/memory/constitution.md`
- 🔁 Next prompts: Suggest running `/sp.specify` to define the first module of the textbook, or `/sp.plan` for a high-level architectural plan.
- 🧠 Reflection: Successfully updated the constitution based on comprehensive user input. The process demonstrated the ability to integrate detailed requirements into the existing template structure and manage versioning.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Consider enhancing the constitution update command to automatically suggest related `sp.specify` or `sp.plan` commands based on the nature of the constitution changes.
