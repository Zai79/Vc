// tokens.js
// status يمكن يكون "online", "idle", "dnd", "invisible"
export default [
  {
    channelId: "1357815715465527467",   // غيّرها لـ ID قناة صوت حقيقية
    serverId: "1289654556598206536",   // غير مهم هنا، لكن لو حابب تحفظه
    token: process.env.token1,         // لازم تضيف token1 في Render Environment
    selfDeaf: false,
    autoReconnect: {
      enabled: true,
      delay: 5, // ثواني
      maxRetries: 5
    },
    presence: {
      status: "idle"
    },
    selfMute: true
  }
];
