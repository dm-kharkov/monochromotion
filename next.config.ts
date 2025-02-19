import type { NextConfig } from 'next'

import {
  NextJsWebpackConfig,
  WebpackConfigContext
} from 'next/dist/server/config-shared'

import path from 'path'

// import createNextPluginPreval from 'next-plugin-preval/config'
// import bundleAnalyzer from '@next/bundle-analyzer'

// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true'
// })
//
// const withNextPluginPreval = createNextPluginPreval()

const nextConfig: NextConfig =
  // withBundleAnalyzer(
  //   withNextPluginPreval(
  {
    env: {
      API_URL: process.env.API_URL,
      STAGE: process.env.STAGE || 'dev'
      // CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      // CONTENTFUL_DELIVERY_API_ACCESS_TOKEN: process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN
    },

    output: 'export',

    reactStrictMode: true,
    trailingSlash: true,

    webpack: (config, context: WebpackConfigContext): NextJsWebpackConfig => {
      const audioPath: string = path.resolve(__dirname, 'src/audio/')

      config.module.rules.unshift({
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      })

      config.module.rules.push({
        test: /\.(md|glsl|frag|vert)$/i,
        use: 'raw-loader'
      })

      config.module.rules.push({
        test: /\.(mp3|mpe?g)$/i,
        exclude: audioPath,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              fallback: require.resolve('file-loader'),
              publicPath: `${config.assetPrefix}/_next/`,
              outputPath: `${context.isServer ? './' : ''}`,
              name: '[name]-[hash].[ext]'
            }
          }
        ]
      })

      return config
    }
  }
//   )
// )

export default nextConfig
