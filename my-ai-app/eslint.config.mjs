import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = {
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:tailwindcss/recommended",
    ], // Kết hợp các cấu hình ESLint cho Next.js và Prettier
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error", // Tắt cảnh báo về việc định dạng mã không đúng với Prettier
      "react/no-escape-entities": "off", // Tắt cảnh báo về việc sử dụng ký tự đặc biệt trong JSX
    },
  }),
};

export default eslintConfig;
