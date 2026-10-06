// Every contact detail on the site comes from here. Swap the placeholders
// once the real social handles are confirmed.
export const business = {
  name: "Do It All Junk Removal",
  owners: "Ryan & Jacob",
  tagline: "You point. We haul.",
  phoneDisplay: "(863) 259-6899",
  phoneDial: "+18632596899",
  email: "doitalljunk@gmail.com",
  serviceArea: "Central Florida",
  socials: [
    { name: "TikTok", handle: "@doitalljunkremoval", url: "https://www.tiktok.com/@doitalljunkremoval" },
    { name: "Instagram", handle: "@doitalljunk", url: "https://www.instagram.com/doitalljunk" },
    { name: "Facebook", handle: "Do It All Junk Removal", url: "https://www.facebook.com/doitalljunk" }
  ]
};

export const smsLink = `sms:${business.phoneDial}?&body=${encodeURIComponent(
  "Hey! I've got some junk to haul. Here's a pic:"
)}`;
export const telLink = `tel:${business.phoneDial}`;
export const mailLink = `mailto:${business.email}?subject=${encodeURIComponent(
  "Junk removal quote"
)}`;
