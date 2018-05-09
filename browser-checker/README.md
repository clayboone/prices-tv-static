# Browser Checker

I have an idea for checking if the client is the TV or somebody browsing to the site on their phone or computer: We'll be using "ClickSimply Kiosk" as the browser and manually typing in the address on the Firestick/Fire TV.

So there're two critereon to check. I'll host the prices at the /prices-tv route. If the server doesn't see a referer header and the user-agent header is whatever ClickSimply Kiosk sets it to (this simple test server is to find out), then I can assume it's the actual TV. In any other case, we can assume it's a phone or other computing device, which means it has input and I can make buttons or other UI.