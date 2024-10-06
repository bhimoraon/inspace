/** @type {import('next').NextConfig} */
const nextConfig = {
	/// here webpack is used for oslo in version next 14
	webpack: (config) => {
		config.externals.push("@node-rs/argon2", "@node-rs/bcrypt");
		return config;
	},

	experimental: {
		ppr: false,
		// turbo: false,
	},
	//this field is added
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
			
			},
		],
		domains: ["lh3.googleusercontent.com", "anotherdomain.com"],
		//both are correct way to do that , only hostname can also be user
	},
};

export default nextConfig;
