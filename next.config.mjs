import createNextIntlPlugin from 'next-intl/plugin';


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Exporta como sitio estático si es necesario
  images: {
    domains: ["images.unsplash.com"], // Permite imágenes externas
    unoptimized: true, // Necesario para export estático si usas <Image>
  },

  webpack(config) {
    // Regla para archivos SVG
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
        use: {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      }
    );

    // Excluimos *.svg de la regla original del cargador de archivos
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);