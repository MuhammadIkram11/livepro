// 💖 Proposal Configuration - Personalize this for your special someone! 💖
export const proposalConfig = {
  // 🌸 Her beautiful name (will appear throughout the website)
  herName: "Love of My Life 🌹", 
  
  // 🔐 The secret password to unlock your love story
  password: "LoveYou",         
  
  // 🎵 Your romantic songs (place MP3 files in /public/assets folder)
  music: {
    backgroundSong: "/assets/background-music.mp3",    // Soft, looped background music
    celebrationSong: "/assets/celebration-music.mp3",  // Plays when she says Yes!
  },
  
  // 🌹 Urdu Poetry Collection - Beautiful romantic couplets
  urduPoetry: [
    {
      urdu: "دل کی بات کہنے کو جی چاہتا ہے",
      transliteration: "Dil ki baat kehnay ko jee chahta hai",
      english: "My heart wants to speak its truth"
    },
    {
      urdu: "تجھ سے مل کر دل کو سکون ملتا ہے",
      transliteration: "Tujh se mil kar dil ko sukoon milta hai",
      english: "Meeting you brings peace to my heart"
    },
    {
      urdu: "تیری ہنسی میری دنیا کا سکون ہے",
      transliteration: "Teri hansi meri duniya ka sukoon hai",
      english: "Your smile is the peace of my world"
    },
    {
      urdu: "میری دعاؤں کا حاصل تُو ہے",
      transliteration: "Meri duaon ka hasil tu hai",
      english: "You are the answer to my prayers"
    },
    {
      urdu: "تیری محبت میں کھو گیا ہوں میں",
      transliteration: "Teri mohabbat mein kho gaya hun main",
      english: "I am lost in your love"
    },
    {
      urdu: "تیرا ہر لمحہ میری زندگی ہے",
      transliteration: "Tera har lamha meri zindagi hai",
      english: "Every moment with you is my life"
    }
  ],
  
  // 💕 Personal touches - customize these messages
  personalMessages: {
    // How you met - make this specific to your story
    howWeMet: [
      "From the very first time we sat down together, something magical sparked ✨",
      "I still remember that moment… the way your beautiful eyes caught my attention 👀💖",
      "That very first conversation that flowed so effortlessly ☕",
      "The way your eyes lit up when you spoke about the things you love 🎶",
      "And deep inside, I felt this was the start of something extraordinary 🌹"
    ],
    
    // Your journey together - memories and special moments
    ourJourney: [
      "Every shared laugh has become a melody in my heart 🎶❤️",
      "Those endless conversations that felt like time simply paused ⏳✨",
      "The comfort I find in your presence, as if you always know what my soul needs 🌸",
      "The little moments — a glance, a smile, a word — that turned into treasures of memory 💫",
      "With each day, we've not just grown together, but woven our hearts closer into one 💕"
    ],
    
    // Why you love her - be specific and personal
    whyILoveHer: [
      "Your beautiful eyes hold a world I never want to stop exploring 👀💖",
      "You make me laugh in ways that melt all my worries away 😂",
      "Your caring nature wraps my heart in warmth every single day 💕",
      "The little things you do — often without knowing — brighten my life ✨",
      "You inspire me to dream bigger and become a better version of myself 🌟",
      "Your kindness touches everyone around you, but I feel it the deepest 🥰",
      "You understand me in ways words can't explain 💫",
      "Every moment with you feels magical and unforgettable 💝",
      "Your strength and courage amaze me and make me proud 💪",
      "You're not just my love, you're my safe place, my best friend, and my everything 💕"
    ],
    
    // Your proposal question - make it personal
    proposalQuestion: "Will you walk with me through every tomorrow, hand in hand, forever? 💕",
    
    // Celebration message when she says yes
    celebrationMessage: "You made me the happiest person alive! ❤️",
    
    // Final romantic quote
    finalQuote: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine. 💝",
    
    // Your signature
    yourSignature: "Abdul Gaffar" 
  },
  
  // 🎨 Customize colors for the romantic Urdu theme
  colors: {
    primary: "#ff69b4",      // Hot pink
    secondary: "#9b72f2",    // Lavender
    background1: "#ffe3f1",  // Pastel pink
    background2: "#e6e6ff",  // Pastel purple
    accent: "#ffd700",       // Soft gold
    sky: "#87ceeb",          // Sky blue
    rose: "#ffb6c1"          // Light rose
  }
};

// 🎵 Music Management Utility Functions
export const musicUtils = {
  // Stop all background music completely
  stopAllBackgroundMusic: () => {
    console.log('🎵 Stopping all background music...')
    
    // Stop global background audio
    if (window.backgroundAudio) {
      console.log('🎵 Stopping global background audio')
      window.backgroundAudio.pause()
      window.backgroundAudio.currentTime = 0
      window.backgroundAudio.volume = 0
    }

    // Stop audio with specific ID
    const backgroundAudioElement = document.getElementById('background-audio')
    if (backgroundAudioElement) {
      console.log('🎵 Stopping audio with ID background-audio')
      backgroundAudioElement.pause()
      backgroundAudioElement.currentTime = 0
      backgroundAudioElement.volume = 0
    }

    // Stop ALL audio elements on the page
    const allAudioElements = document.querySelectorAll('audio')
    if (allAudioElements.length > 0) {
      console.log(`🎵 Stopping ${allAudioElements.length} audio elements`)
      allAudioElements.forEach((audio, index) => {
        console.log(`🎵 Stopping audio element ${index + 1}`)
        audio.pause()
        audio.currentTime = 0
        audio.volume = 0
      })
    }

    // Stop any HTML5 audio elements
    const html5Audios = document.querySelectorAll('audio[src]')
    if (html5Audios.length > 0) {
      console.log(`🎵 Stopping ${html5Audios.length} HTML5 audio elements`)
      html5Audios.forEach((audio, index) => {
        console.log(`🎵 Stopping HTML5 audio element ${index + 1}`)
        audio.pause()
        audio.currentTime = 0
        audio.volume = 0
      })
    }
    
    console.log('🎵 All background music stopped successfully!')
  },

  // Play celebration music and ensure background music is stopped
  playCelebrationMusic: (celebrationSongUrl) => {
    console.log('🎉 Starting celebration music...')
    
    // First, stop all background music
    musicUtils.stopAllBackgroundMusic()
    
    // Then play celebration music
    try {
      console.log(`🎉 Loading celebration music: ${celebrationSongUrl}`)
      const celebrationAudio = new Audio(celebrationSongUrl)
      celebrationAudio.volume = 0.6
      celebrationAudio.loop = true // 🎵 ADD LOOP TO CELEBRATION MUSIC!
      
      console.log('🎉 Celebration music set to loop continuously')
      
      celebrationAudio.addEventListener('canplaythrough', () => {
        console.log('🎉 Celebration music ready to play!')
        celebrationAudio.play().catch(err => console.log('🎉 Celebration music autoplay blocked:', err))
      })
      
      celebrationAudio.addEventListener('play', () => {
        console.log('🎉 Celebration music is now playing and will loop!')
      })
      
      celebrationAudio.addEventListener('error', (error) => {
        console.error('🎉 Error playing celebration music:', error)
      })
      
      return celebrationAudio
    } catch (error) {
      console.error('🎉 Could not play celebration music:', error)
      return null
    }
  }
};
