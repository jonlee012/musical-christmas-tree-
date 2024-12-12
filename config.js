module.exports = {
  // Server Configuration
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',

  // Audio Configuration
  audioEnabled: process.env.AUDIO_ENABLED || true,

  // Feature Toggles
  features: {
    snow: true,
    music: true,
    lights: true,
    gestures: true
  },

  // Performance Settings
  performance: {
    maxParticles: 100,
    maxLights: 50,
    animationFPS: 60
  }
};
