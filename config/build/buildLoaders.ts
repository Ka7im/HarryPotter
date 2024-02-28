import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import ReactRefreshTypescript from 'react-refresh-typescript'

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development'

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      }
    }
  }

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  }

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]', // отвечает за формирование название класса
      },
    }
  }

  const scssLoader = {
    test: /\.(s[ac]ss|css)$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWithModules,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const tsLoader = {
    // ts-loader умеет работать с JSX
    test: /\.tsx?$/, // рег. выражение, название тех файлов, которые нужно обработать
    use: [{
      loader: 'ts-loader', // название лоадера
      options: {
        transpileOnly: true, // только сборка, без проверки типов
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypescript()].filter(Boolean)
        })
      }
    }],
    exclude: /node_modules/, // то что не надо обрабатывать
  }

  const svgrLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true
        }
      }
    ]
  }

  return [ // в массиве rules указываются лоадеры
    babelLoader,
    assetLoader,
    scssLoader,
    tsLoader,
    svgrLoader,
  ]
}