module.exports = ({ env }) => ({
    'cloudflare-pages': {
      enabled: true,
      config: {
        instances: [
          {
            name: "production website",
            hook_url: 'https://test-strapi-5et.pages.dev'
          },
          {
            name: "preview website",
            hook_url: 'https://test-strapi-5et.pages.dev'
          },
        ]
      }
    }
});