// ===============================
// جارك أولى - JavaScript
// ===============================

// رسالة ترحيب
window.onload = function () {
    console.log("مرحباً بك في منصة جارك أولى 🤝");
};

// رسالة عند الضغط على أي زر
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        alert("مرحباً بك في جارك أولى 🌿\nنتمنى لك تجربة مليئة بالخير والتعاون.");
    });
});

// التحقق من تسجيل الدخول
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("الرجاء إدخال اسم المستخدم وكلمة المرور.");
        return false;
    }

    alert("تم تسجيل الدخول بنجاح ✅");
    return true;
}