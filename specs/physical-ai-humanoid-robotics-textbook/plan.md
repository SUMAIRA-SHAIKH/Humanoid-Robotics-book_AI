# High-Level Project Plan: Physical AI & Humanoid Robotics — Textbook

## Goal: Build a full Docusaurus textbook for “Physical AI & Humanoid Robotics” using Spec-Kit Plus + Claude Code.

## Plan:

### 1. Project Setup
- Create new Docusaurus project (`npx create-docusaurus`)
- Initialize Git repo and connect to GitHub
- Enable GitHub Pages deployment (gh-pages branch)
- Install Spec-Kit Plus folder structure (`/spec`, `/plan`, `/tasks`)
- Open repo inside Claude Code for iterative writing

### 2. Book Structure
- Use 4 main modules as top-level sections:
  Module 1: ROS 2 — Robotic Nervous System
  Module 2: Digital Twin — Gazebo & Unity
  Module 3: NVIDIA Isaac — AI Robot Brain
  Module 4: VLA — Vision-Language-Action
- Create Docusaurus folder layout:
  /docs/module1
  /docs/module2
  /docs/module3
  /docs/module4
- Add sidebar configuration for navigation
- Create a unified writing style (simple, structured, technical, beginner-friendly)

### 3. Module Outlines (High-Level)
- Module 1: ROS2 basics, nodes, topics, services, URDF, rclpy control
- Module 2: Gazebo physics, Unity visualization, sensor simulation
- Module 3: Isaac Sim, Isaac ROS, navigation, VSLAM, path planning
- Module 4: VLA pipeline, Whisper, GPT for planning, multimodal robot control

### 4. Writing Pipeline
- Break modules into chapters → tasks
- Each chapter output format: Markdown (Docusaurus compatible)
- Claude Code workflow:
  1. Generate chapter draft
  2. Refine with iterations
  3. Add code samples
  4. Add images/placeholders
  5. Save to repo
- Weekly chapter writing sequence:
  Week 1 → Module 1
  Week 2 → Module 2
  Week 3 → Module 3
  Week 4 → Module 4

### 5. Build & Deployment
- Run local build (`npm run build`)
- Fix build errors
- Deploy to GitHub Pages using GitHub Actions
- Validate navigation, formatting, links
- Final QA pass before submission

### 6. Final Deliverables
- Complete textbook in Docusaurus
- Live published website on GitHub Pages
- All modules + chapters complete
- Source code + markdown structured cleanly
- Optional: Generate PDF export if needed
