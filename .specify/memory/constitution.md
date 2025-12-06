<!--
Sync Impact Report:
Version change: 1.0.0 -> 1.0.1
Modified principles:
- I. Technical Accuracy & Documentation (previously Content Structure & Organization)
- II. Clarity & Accessibility (previously Tone & Language)
- III. Hands-on Learning (previously Spec-Kit Plus & Claude Code Workflow)
- IV. Consistent Structure (previously Gemini Integration)
- V. Embodied Intelligence Focus (previously GitHub Pages Deployment)
Added sections:
- Key Standards
- Constraints
- Success Criteria
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md: ✅ updated
- .specify/templates/spec-template.md: ✅ updated
- .specify/templates/tasks-template.md: ✅ updated
- Command files: ✅ updated
Follow-up TODOs: None.
-->
# Hackathon I — Textbook for Physical AI & Humanoid Robotics Constitution

## Core Principles

### I. Technical Accuracy & Documentation
All technical content MUST be factually accurate and consistent with official documentation from ROS 2, Gazebo, Unity, and NVIDIA Isaac. References to official documentation are mandatory.

### II. Clarity & Accessibility
Explanations MUST be clear, concise, and beginner-friendly, making complex concepts accessible to a broad audience. Avoid jargon or define it explicitly when used.

### III. Hands-on Learning
Emphasis MUST be placed on practical, hands-on learning. Each theoretical concept SHOULD be accompanied by runnable code examples, laboratory exercises, and simulation-based activities.

### IV. Consistent Structure
Maintain a consistent structure, tone, and formatting across all chapters. This includes consistent use of headings, code blocks, and visual aids to enhance readability and learning.

### V. Embodied Intelligence Focus
The textbook MUST emphasize embodied intelligence and real-world robot control. Content should focus on how AI principles apply to physical robots and their interactions with the environment.

## Key Standards

- Content MUST follow the Modules 1–4 and weekly breakdown specified in the course outline.
- All code examples MUST be verified to run correctly on Ubuntu 22.04, ROS 2 Humble/Iron, and NVIDIA Isaac Sim.
- Each chapter MUST include clear learning objectives, theoretical explanations, runnable code examples, practical exercises, and a concise summary.
- All content MUST be authored using Docusaurus-compatible Markdown.
- The textbook MUST NOT contain outdated or deprecated APIs, libraries, or development practices.

## Constraints

- Output format: Docusaurus Markdown.
- Deployment target: GitHub Pages.
- Code examples MUST be validated for functionality and correctness (primarily Python with rclpy).
- Explanations MUST be concise and follow a structured pedagogical approach.

## Success Criteria

- Deliver a complete multi-module textbook including hands-on labs, exercises, and a capstone project.
- All provided code examples MUST be runnable and verifiable in simulation environments or on Jetson hardware.
- The Docusaurus site MUST build without any errors or warnings.
- The capstone project, demonstrating a humanoid robot workflow, MUST be fully documented and functional.

## Governance

This Constitution serves as the guiding document for the project. Any amendments to this Constitution MUST be proposed via a pull request, reviewed, and approved by the core author team. Non-compliance with these rules MAY result in content rejection or requests for revision.

**Version**: 1.0.1 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-06
