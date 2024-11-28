// dateUtils.js

// تابع برای دریافت تاریخ امروز به فرمت YYYY-MM-DD
function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // ماه باید 1 اضافه شود
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// صادر کردن تابع برای استفاده در فایل‌های دیگر
export { getCurrentDate };
