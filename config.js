/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['254704003882','254704003882'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3rVGLkpYERHLKIiAiqCrfTGPJRQYClCSRUgTPjvG/RlejZid7b3ra6ZJ885mT9AlmOKLNSA8Q9AClxBhrolawgCYzAp4xgVoA8iyCAYg3q5UxyyYWFVFkPrYEza9rg6e/K91V6Oc7GutQwbd+lkP9Mn8OgDUh5THP4m4OA5QcrSs29BBOceqXr2LXBfYng6c74WPLt+Ref2UN0GmvQEHl1EiAucJTNyQldUwNRCzQbi4mvwTV2O5N2yFT31phz8nWtGbl68zDWOK3t2Mw1OorHN6jjchV+Df7a3AuHdHjffOi91zY7HMr3Wc9aTZ/HqGO8yf0XsFbOCafAGn+IkQ5EZoYxh1nyZd25ZNjapgkOLFruF3srBMtVk2hiGw6/0Sj07UzqvfV0VnK8Bj+2RwFu9NEEjpc6fvROun+3nRb5XLaeYTLMY7SM6vEjV34Fvig+vXP4P7xcDqtySDbTANORohYlZ3+7mwjtk1FQGB1Ichk0iOepqnn8NvnONluJA8WHJT/eRayN5H2zWL62axJ6k6TTZSTNl7VqN737Ch6wsfodSWMKtMLM2TWOIm51RNQat165DzbVYhRrVqrRV97K1wdNJY8paKHiH6WBCrhWpuEA4C9Pbpqcn5yBNeitih/fZYJac6qfXii6oMSMw5h99UKAEU1ZAhvOsOxuO+gBGlYfCArFXdoElZe11NbOy/c7YCzM6E9PL2W3bYJQoo7s7yovF4a6fTHe7ewJ9QIo8RJSiaIEpy4vGQZTCBFEw/vN7H2Tozt5067KJfB/EuKBsl5UkzWH0IerHJQzDvMyY12Sh3i1QAcbc5zFiDGcJ7WgsM1iEJ1wh/QQZBeMYphT9LBAVKAJjVpToZ9PqedTxPlR8S/V9EfTB9VUPHHXsDyWZkzhOVBRhLAz/oN/qLiwk5FuGGOiDDHavgYHimKHwBPogff3Iq6oicSqvCoIylNTub3fx+Im5SxEhBnFKwRjoy+P8Fib6bKnzrcIZhjZLND3RwGeNH155EyNrzjX228Ix0rZ0eL71JpVAahl7KzhIqT1Y5rJrKGvVz5/+IQgYg9G92Xgn9zKycpsn6lbnNj3qbHFz2QxH7WqjuPodtofptd2te8srsc7OBOYrM7tkZHQIjUIWPRhHvcvtcFseyYUv63aqPXXZIlThEP2abC3qPGfZoYtbfz91TbtkvmLoo5RU8rpxxEgNywO6jC5T0U/z66TaW5VyqhxPa56DpZC2LLZWM9q7amQwWBt5RO0Ka28ufu2i9H164VeDdep12xij12HwrtJ/qvkGvDMd9+j/EuN9vPxLi05elFwxL8qonZBQPq+ikEuO6i1cS5fzvhoe9UED19ykmla7EXg8vvcBSSGL8+IKxoBejxD0QZGXnYXNLM5/k0nXEnPqJl5Xdgop0z7bwsdXRBm8EjDmZVkUVWmoCG+vNkVOFpCeOlta0mkhgcdfx8PeE2MHAAA=
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɴɪɢʜᴛ ʙᴏᴛ*'',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
