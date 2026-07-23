// =========================
// مشروع جارك أولى
// script.js
// =========================

// رسالة ترحيب
window.onload = function () {
    console.log("مرحباً بك في موقع جارك أولى");
};

// التحقق من تسجيل الدخول
function login() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (username.value === "" || password.value === "") {
        alert("يرجى إدخال اسم المستخدم وكلمة المرور");
        return false;
    }

    alert("تم تسجيل الدخول بنجاح");
    window.location.href = "home.html";
}

// التحقق من إنشاء حساب
function register() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (
        name.value === "" ||
        email.value === "" ||
        password.value === ""
    ) {
        alert("يرجى ملء جميع الحقول");
        return false;
    }

    alert("تم إنشاء الحساب بنجاح");
    window.location.href = "index.html";
}

// صفحة عرض المهارات
function showSkills() {
    alert("تم تحميل قائمة المهارات");
}

// إضافة طلب مساعدة
function addHelpRequest() {
    alert("تم إرسال طلب المساعدة بنجاح");
}

// إضافة خدمة
function addService() {
    alert("تم نشر الخدمة بنجاح");
}

// صفحة من نحن
function aboutSite() {
    alert("شكراً لاستخدام منصة جارك أولى");
}

// تسجيل الخروج
function logout() {
    if (confirm("هل تريد تسجيل الخروج؟")) {
        window.location.href = "index.html";
    }
        }
