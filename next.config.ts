/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  // 开启静态导出模式
  output: 'export',
  // 解决静态服务器路由问题
  trailingSlash: true,
  // 关闭图片优化，适配静态导出
  images: {
    unoptimized: true,
  },
};

export default nextConfig;/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // 告诉 Next.js 你的 app 目录在 src/app 下
  experimental: {
    appDir: true,
  },
  // 如果你的文件在 src/app 里，需要指定目录
  dir: './src',
};

export default nextConfig;