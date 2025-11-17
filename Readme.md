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
  <img src="https://private-user-images.githubusercontent.com/113303813/515333904-8ae79444-fe14-4c1a-b0d5-500d6e0ae51e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM0MDQzOTYsIm5iZiI6MTc2MzQwNDA5NiwicGF0aCI6Ii8xMTMzMDM4MTMvNTE1MzMzOTA0LThhZTc5NDQ0LWZlMTQtNGMxYS1iMGQ1LTUwMGQ2ZTBhZTUxZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExN1QxODI4MTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02NGFmZjA2ZmIxZTBlNjIzMGQxNTU1MTU2ZTMyZDMyZWU1MmE3MjM4MzdlYWU4MTdjMTY3ODA1MDJhZDM0OTAzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.F6GYTOHGWb9ewuzLT-9Vymp9uix8TDSevLh-bEx6N0I" alt="Email to Chat Extension Demo" width="600"/>
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