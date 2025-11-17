document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('enable-toggle');
    const label = document.getElementById('toggle-label');

    // Get the saved state and set the toggle accordingly
    chrome.storage.sync.get('extensionEnabled', function (data) {
        toggle.checked = data.extensionEnabled !== false; // default to true
        label.textContent = toggle.checked ? 'Enabled' : 'Disabled';
    });

    // When the toggle is clicked
    toggle.addEventListener('change', function () {
        const isEnabled = toggle.checked;
        label.textContent = isEnabled ? 'Enabled' : 'Disabled';

        // Save the state
        chrome.storage.sync.set({ extensionEnabled: isEnabled });

        // Send a message to the active tab's content script
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            // Ensure we have a valid tab to send a message to
            if (tabs[0] && tabs[0].id) {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        action: 'toggleExtension',
                        enabled: isEnabled
                    },
                    (response) => {
                        // The callback is the key to handling the error.
                        // It checks chrome.runtime.lastError.
                        if (chrome.runtime.lastError) {
                            // This error is expected on non-Gmail pages where the content script
                            // is not injected. We can safely ignore it.
                            console.log("Email Chat View: Content script not active on this page, which is normal.");
                        } else {
                            // Optional: Log the response from the content script for debugging.
                            console.log("Email Chat View: Message sent and acknowledged by content script.", response);
                        }
                    }
                );
            }
        });
    });
});

