# Auth Form (Login & Register)

Giao diện đăng nhập và đăng ký dạng trượt (Sliding Authentication Form) được xây dựng với Next.js và Tailwind CSS.

## 🚀 Tính năng chính

- **Chuyển đổi mượt mà**: Hiệu ứng trượt (sliding overlay) chuyển đổi linh hoạt giữa form Đăng nhập và Đăng ký.
- **Ẩn / hiện mật khẩu**: Component `PasswordInput` hỗ trợ toggle xem mật khẩu.
- **Đăng nhập mạng xã hội**: Các nút liên kết Google, Facebook, Instagram.
- **UI hiện đại & tối giản**: Sử dụng Tailwind CSS v4 và icon từ Lucide React / React Icons.

## 🛠️ Công nghệ sử dụng

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/) / [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **UI Components**: shadcn/ui primitives

## 📂 Cấu trúc thư mục

```text
src/
├── app/
│   ├── globals.css      # CSS styling & hiệu ứng animation
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Trang chính chứa Form Login & Register
├── components/
│   ├── ui/              # Các UI component tái sử dụng (Input, Button)
│   └── PasswordInput.tsx# Input nhập mật khẩu có nút ẩn/hiện
└── lib/
    └── utils.ts         # Utility functions (cn / clsx / tailwind-merge)
```

## ⚙️ Hướng dẫn cài đặt và chạy

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy môi trường phát triển (Development)

```bash
npm run dev
```

Mở trình duyệt và truy cập: [http://localhost:3000](http://localhost:3000)

### 3. Build & chạy production

```bash
# Build dự án
npm run build

# Chạy bản production
npm run start
```

### 4. Kiểm tra mã nguồn (Linter)

```bash
npm run lint
```
