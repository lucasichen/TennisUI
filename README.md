# Welcome to Alfred
## 🎾 From Frustration to Innovation: My Journey Creating a Bot Booking Service 🤖

Have you ever found yourself waking up before dawn just to secure a booking for your favorite activity? That was the reality for my parents, who had to set their alarms for 7:30 AM sharp every week just to reserve tennis courts in our local club. The competition was fierce, with numerous members vying for the same slots. Witnessing their struggle, I embarked on a journey to simplify this process through automation.

![tennis_ui](https://github.com/lucasichen/TennisUI/assets/71472753/2f5cb385-2a72-4b36-b7ea-d5886111f39e)

# My Story

## ✨ The Spark of Innovation

It all began with a simple question: "Why not automate this?" Inspired by the need to alleviate the early morning rush and the competitive nature of booking coveted courts, I set out to develop a solution that would streamline the process for everyone involved.

## 💡 Turning Vision into Reality

Embracing the concept of phased releases, a lesson learned during my co-op experience, I opted for an iterative approach rather than attempting to build a finished product all at once.

### 🚀 Phase 1: Starting off
In Phase 1, I created an automated bot that would navigate the booking website and secure slots at 7:30 AM, leveraging GitLab's pipeline to initiate the script each morning. While effective, the reliance on a hardcoded JSON file for my parents' booking schedule posed challenges for adaptability.

### 📅 Phase 2: Introducing a UI
In Phase 2, I addressed this limitation by introducing a user-friendly UI, developed in React, allowing my parents to manage their schedule autonomously. The rollout of Phase 2 marked a significant milestone, empowering my parents to take control of their bookings with ease.

### 📊 Phase 3: Elevating the Service
However, the journey didn't end there. In Phase 3, I elevated the service further by eliminating the hardcoded JSON file and integrating a database, enabling seamless communication between the frontend, backend, and bot service. Additionally, I integrated SMS messaging via Twilio to provide real-time notifications of booking status, eliminating the need for manual verification and enhancing user experience. 📊📲

### 🤝 Phase 3.5: Hiring a intern
Phase 3.5 presented an invaluable learning opportunity as my brother, also a coder, joined the project during his winter break. Together, we fine-tuned algorithms, optimized code, and implemented database-driven configurations, further enhancing the efficiency and adaptability of the system. 

### 🔐 Phase 4: Focus on Security
Phase 4 saw a focus on security, with efforts to integrate authentication and authorization mechanisms using Auth0 logins and M2M tokens for service communication, ensuring the protection of user data and system integrity. 🔐

## 🌟 Celebrating Successes

With each phase, the project evolved, driven by a commitment to innovation, collaboration, and continuous improvement. While bug fixes remain an ongoing task in Phase 5 and beyond, the journey thus far has been a testament to the power of perseverance and dedication in overcoming challenges and achieving success.

### Built With
* React Js (Frontend)
* Express Js (Backend)
* Firebase (Database)
* Playwright (Bot service)
* Auth0 (Authentication service)
