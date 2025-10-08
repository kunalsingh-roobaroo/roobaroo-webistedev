export const trackEvent = ({ category, action, label, value }) => {
  console.log("📊 GA4 Event Triggered:");
  console.log("➡️ Category:", category);
  console.log("➡️ Action:", action);
  console.log("➡️ Label:", label);
  console.log("➡️ Value:", value);

  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    console.warn("⚠️ GA4 not initialized yet");
  }
};
