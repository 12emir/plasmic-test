
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['mVR9nuGEiyJ8pjLMp3efYs'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  