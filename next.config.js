/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["images.ctfassets.net", "manuelbaldoni.com"]
	}
};

module.exports = nextConfig;
