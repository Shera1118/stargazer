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

export default nextConfig;