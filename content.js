let lastSubject = "";
let chatBox = null;
let header = null;
let convoArea = null;
let input = null;
let sendBtn = null;

function createChatBox() {
  chatBox = document.createElement("div");
  Object.assign(chatBox.style, {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "350px",
    height: "500px",
    background: "white",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
    zIndex: 99999,
  });

  // Top header
  header = document.createElement("div");
  Object.assign(header.style, {
    padding: "10px",
    background: "#00695c",
    color: "white",
    fontWeight: "bold",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  });
  header.innerText = "Waiting for an email to open...";

  // Conversation area
  convoArea = document.createElement("div");
  Object.assign(convoArea.style, {
    flex: "1",
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    background: "#fafafa",
  });

  // Input area
  const inputArea = document.createElement("div");
  Object.assign(inputArea.style, {
    display: "flex",
    borderTop: "1px solid #ccc",
  });

  input = document.createElement("textarea");
  Object.assign(input.style, {
    flex: "1",
    border: "none",
    padding: "10px",
    fontSize: "14px",
    resize: "none",
    outline: "none",
  });
  input.placeholder = "Type your reply...";

  sendBtn = document.createElement("button");
  Object.assign(sendBtn.style, {
    padding: "0 15px",
    border: "none",
    background: "#00695c",
    color: "white",
    cursor: "pointer",
  });
  sendBtn.innerText = "Reply & Send";

  inputArea.appendChild(input);
  inputArea.appendChild(sendBtn);

  chatBox.appendChild(header);
  chatBox.appendChild(convoArea);
  chatBox.appendChild(inputArea);
  document.body.appendChild(chatBox);

  sendBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    const replyBtn = document.querySelector("div[role=button][data-tooltip='Reply']");
    if (replyBtn) {
      replyBtn.click();
      setTimeout(() => {
        const editableDiv = document.querySelector("div[aria-label='Message Body']");
        if (editableDiv) {
          editableDiv.innerText = text;
          editableDiv.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }, 500);
    }

    input.value = "";
  });
}

function loadConversation() {
  const subjectEl = document.querySelector("h2.hP");

  if (!subjectEl) {
    // No email open
    if (lastSubject !== "none") {
      lastSubject = "none";
      header.innerText = "Waiting for an email to open...";
      convoArea.innerHTML = "";
    }
    return;
  }

  const subjectText = subjectEl.innerText.trim();
  if (subjectText === lastSubject) return;
  lastSubject = subjectText;

  header.innerText = subjectText;
  convoArea.innerHTML = "";

  const emailItems = document.querySelectorAll("div.adn"); 
  emailItems.forEach(item => {
    const senderEl = item.querySelector("span.gD, span.g2");
    const bodyEl = item.querySelector("div.a3s.aiL");

    if (!senderEl || !bodyEl) return;

    const sender = senderEl.innerText.trim();
    const messageText = bodyEl.innerText.trim();
    if (!messageText) return;

    const msgDiv = document.createElement("div");
    Object.assign(msgDiv.style, {
      padding: "8px 10px",
      borderRadius: "10px",
      maxWidth: "80%",
      wordWrap: "break-word",
      whiteSpace: "pre-wrap",
      alignSelf: sender.includes("PIYUSH KUMAR") ? "flex-end" : "flex-start",
      background: sender.includes("PIYUSH KUMAR") ? "#d1e7ff" : "#f1f1f1",
    });

    msgDiv.innerHTML = `<strong>${sender}:</strong><br>${messageText}`;
    convoArea.appendChild(msgDiv);
  });

  convoArea.scrollTop = convoArea.scrollHeight;
}

function init() {
  if (!chatBox) createChatBox();

  const observer = new MutationObserver(() => {
    loadConversation();
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

init();
