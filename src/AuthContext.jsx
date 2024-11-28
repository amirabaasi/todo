import React, { createContext, useContext, useState, useEffect } from 'react';

// ایجاد Context برای احراز هویت
const AuthContext = createContext();

// کامپوننت AuthProvider که در آن وضعیت کاربر را مدیریت می‌کنیم
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // بررسی وضعیت ورود کاربر در هنگام بارگذاری اولیه
  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // دریافت اطلاعات کاربر از localStorage
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // اگر کاربری وجود دارد، اطلاعات آن را به وضعیت اضافه می‌کنیم
    }
    setLoading(false); // بارگذاری تمام شد
  }, []);

  // تابع ثبت نام
  const signup = (username, password) => {
    // در اینجا ما فقط از localStorage استفاده می‌کنیم
    const userinfo = { username, password }; // شبیه‌سازی داده‌های کاربر
    localStorage.setItem('user', JSON.stringify(userinfo)); // ذخیره‌سازی اطلاعات کاربر در localStorage
    setUser(userinfo); // ذخیره اطلاعات کاربر در وضعیت
  };

  // تابع ورود
  const login = (username, password) => {
    const storedUser = localStorage.getItem('user'); // بررسی اینکه آیا کاربر قبلاً ثبت‌نام کرده است
    if (storedUser) {
      const userinfo = JSON.parse(storedUser);
      if (userinfo.username === username && userinfo.password === password) {
        setUser(userinfo); // اگر ایمیل و پسورد صحیح باشد، کاربر وارد می‌شود

      } else {
        throw new Error('Invalid credentials');
      }
    } else {
      throw new Error('User not found');

    }
  };

  // تابع خروج
  const logout = () => {
    localStorage.removeItem('user'); // حذف اطلاعات کاربر از localStorage
    setUser(null); // حذف اطلاعات کاربر از وضعیت
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// استفاده از useContext برای دسترسی به AuthContext
export const useAuth = () => useContext(AuthContext);
