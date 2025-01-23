# Hue Attack Alert

A simple Tampermonkey script that integrates with Philips Hue lights to alert you of incoming attacks in the browser game [Grepolis](https://grepolis.com). When an attack is detected, the script sends a request to your Hue Bridge, changing the lights to red.

---

## Features

- Automatically detects incoming attacks in Grepolis.
- Changes Philips Hue lights to red to notify you of attacks.

---

## Requirements

1. A Philips Hue Bridge and lights.
2. A Grepolis account.
3. Tampermonkey installed in your browser.
4. Basic knowledge of how to get your Hue Bridge API token.
5. A reverse proxy in order to sent https requests to your bridge api.

---

## Setup Guide

### 1. Install Tampermonkey

If you don't have Tampermonkey installed, download it for your browser:

- [Google Chrome](https://tampermonkey.net/?ext=dhdg&browser=chrome)
- [Mozilla Firefox](https://tampermonkey.net/?ext=dhdg&browser=firefox)
- [Microsoft Edge](https://tampermonkey.net/?ext=dhdg&browser=edge)

### 2. Add the Script

1. Open Tampermonkey in your browser.
2. Click on **"Create a new script"**.
3. Copy and paste the contents of the `index.js` file into the editor.
4. Save the script.

### 3. Configure the Script

Before using the script, configure the following values in the script file:

- `API_URL`: Replace `example.com` with the IP address or hostname of your Philips Hue Bridge.
- `BRIDGE_TOKEN`: Replace `token` with your Hue Bridge API token. You can generate a token by following the [Hue API Guide](https://developers.meethue.com/develop/get-started-2/).
- `LIGHT_IDS`: Replace `[1, 2, 3]` with the IDs of the Hue lights you want to control. You can find the IDs by accessing `http://<bridge_ip>/api/<your_token>/lights`.

Example:

```javascript
const API_URL = "192.168.1.100"; // Your Hue Bridge IP
const BRIDGE_TOKEN = "abc123xyz"; // Your API token
const LIGHT_IDS = [1, 2]; // IDs of your Hue lights
```

### 5. Save and Enable the Script

Save your changes and ensure the script is enabled in Tampermonkey.

### 6. Play Grepolis

Once the script is set up and running, simply play Grepolis. If an attack is incoming, your Philips Hue lights will turn red to alert you.

---

## How It Works

- The script listens for the Grepolis `attack.incoming` event using the game's built-in event observer.
- When an attack is detected, it sends a PUT request to the Hue Bridge API to change the state of the lights to red (maximum brightness, full saturation).

---

## Troubleshooting

1. **The lights are not changing color:**

   - Ensure the `API_URL` and `BRIDGE_TOKEN` values are correct.
   - Verify that the light IDs in `LIGHT_IDS` match your Hue setup.
   - Check if the Hue Bridge is reachable from your network.

2. **Console errors:**

   - Open your browser's developer console (F12 or Ctrl+Shift+I) to debug errors.

3. **Grepolis events not detected:**
   - Ensure the `@match` values in the script include the correct Grepolis domain(s).

---

## Disclaimer

This project is not affiliated with or endorsed by Grepolis or Philips Hue. Use it at your own risk.

---

## License

This project is licensed under the MIT License. Feel free to modify and distribute it as needed.

Please note that even though this project is under MIT License, grepolis doesn't allow running scripts that they haven't approved beforehand.
