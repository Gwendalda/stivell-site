/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Amplify Hosting SSR - do NOT set output: 'export'
  // output: 'export' would make it static-only and cause "Framework Web not supported"
};

module.exports = nextConfig;
