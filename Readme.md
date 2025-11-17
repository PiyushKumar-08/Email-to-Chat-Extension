# 💬 Email to Chat Extension

<p align="center">
  <strong>Tired of messy email threads? This browser extension refactors your email conversations into a clean, easy-to-read, WhatsApp-like chat interface.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Chrome_Extension-v8-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Chrome Extension">
</p>

<p align="center">
  <img src="Screenshot 2025-09-05 162928.png" alt="Email to Chat Extension Demo" width="600"/>
</p>

## 📖 About The Project

Reading long email chains can be confusing and time-consuming. This project was born from the need to make email conversations as simple and intuitive as modern messaging apps.

This browser extension scans the email thread on your page and dynamically rebuilds it as a simple, two-column chat view, clearly distinguishing between the sender and the recipient.

## ✨ Key Features

* **Clean Chat Interface:** Automatically converts cluttered email threads into a familiar chat bubble format.
* **Smart Sender Detection:** Clearly identifies and styles messages from different participants.
* **Lightweight & Fast:** Runs instantly on page load with no external dependencies, using a `MutationObserver` to catch dynamic content.
* **Simple & Secure:** All processing is done 100% locally in your browser. No data is ever collected, stored, or sent to a server.

## 🛠️ Built With

This extension is built with pure, front-end web technologies:

* **JavaScript (ES6+):** For all the DOM manipulation and logic.
* **HTML5:** For the popup structure.
* **CSS3:** For styling the chat bubbles and interface.
* **Chrome Extension APIs:** (`manifest.json`, `content_scripts`)

## 🚀 How to Install (for Local Development)

Want to try it out or contribute?

1.  **Clone the repo:**
    ```sh
    git clone [https://github.com/PiyushKumar-08/Email-to-Chat-Extension.git]
    ```
2.  **Open Chrome Extensions:**
    * Open Google Chrome and navigate to `chrome://extensions`
3.  **Enable Developer Mode:**
    * Turn on the **"Developer mode"** toggle in the top-right corner.
4.  **Load the extension:**
    * Click on **"Load unpacked"** and select the entire project folder.
5.  **You're all set!** Open an email thread to see it in action.

## 👤 Contact


Piyush Kumar - [@PiyushKumar-08](https://github.com/PiyushKumar-08)
