---
mode: 'agent'
model: GPT-4o
tools: ['githubRepo', 'codebase']
description: 'Generate a new React form component'
---

Your goal is to generate a new React Build a small React web app that simulates a simplified version of an AI studio. This app is for a brand Modelia that creates custom fashion designs based on user-uploaded images and text prompts. If ChatGPT and Zara had wild, beautiful, fashion-fueled AI sex, Modelia would be the baby.
Meet the team!
We are on a mission to change how the fashion industry connects with people through stunning visuals.
Modelia is the first AI platform built from the ground up for fashion visuals. We turn boring flatlays and mannequins into scroll-stopping, campaign-ready images and videos; complete with AI-generated models, outfits, backgrounds, and motion. No studios, no models, no production headaches. Just jaw-dropping content, instantly.
Our clients are using Modelia to boost conversion, cut costs, and build brands that look like a million bucks (without spending it). We’ve even launched the world’s first Outfit Generator: upload a top, a bottom, and an accessory… and boom: runway-worthy looks generated on the spot.

Requirements

- Upload & Preview

* Upload a PNG/JPG (≤10MB). Show a preview.
* If the file is too large, downscale it client-side to ≤1920px before sending.

- Prompt & Style

* Input field for a text prompt.
* Dropdown with at least 3 style options (e.g. Editorial, Streetwear, Vintage).
* Show a live summary (image + prompt + style).

- Generate (Mock API)

* Button to “Generate” that calls a mocked API you implement:
* POST body: { imageDataUrl, prompt, style }
* Response: { id, imageUrl, prompt, style, createdAt } after ~1–2s
* In 20% of cases, return a simulated error { message: "Model overloaded" }
* Show a loading spinner.
* On error: retry automatically with exponential backoff (max 3 attempts).
* Allow user to Abort an in-flight request.

- History

* Save the last 5 generations in localStorage (id, imageUrl, prompt, style, createdAt).
* Clicking a history item restores it in the main preview.

- Accessibility

* The app should be keyboard navigable with visible focus states and ARIA where needed.
