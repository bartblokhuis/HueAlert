// ==UserScript==
// @name         Hue attack
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match		https://*.grepolis.com/game/*
// @match		https://*.forum.grepolis.com/*
// @grant        none
// ==/UserScript==
(function () {
  // Your API URL
  const API_URL = "example.com";
  const BRIDGE_TOKEN = "token";
  const LIGHT_IDS = [1, 2, 3];

  $.Observer(uw.GameEvents.attack.incoming).subscribe("hue_alert", function () {
    onAttackIncoming();
  });

  function onAttackIncoming() {
    const state = {
      on: true,
      bri: 254,
      hue: 0,
      sat: 254,
    };
    updateState(state);
  }

  async function updateState(state) {
    LIGHT_IDS.forEach(async (id) => {
      try {
        const req = fetch(
          `https://${API_URL}/api/${BRIDGE_TOKEN}/lights/${id}/state`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state),
          },
        );
        await req;
      } catch (error) {
        console.error("Error changing light color:", error);
      }
    });
  }
})();
