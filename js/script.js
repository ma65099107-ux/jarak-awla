// =============================
// جارك أولى - JavaScript
// =============================


// رسالة عند تحميل الموقع
window.onload = function () {
    console.log("مرحباً بك في جارك أولى 🌿");
};


// تسجيل الدخول
function login() {

    let username = document.getElementById("username");
    let password = document.getElementById("password");


    if (username.value === "" || password.value === "") {

        alert("يرجى إدخال اسم المستخدم وكلمة المرور");

    } else {

        alert("تم تسجيل الدخول بنجاح 🌿");

        window.location.href = "home.html";
    }

}



// إنشاء حساب
function register() {

    let name = document.getElementById("name");
    let password = document.getElementById("password");


    if (name.value === "" || password.value === "") {

        alert("يرجى ملء البيانات المطلوبة");

    } else {

        alert("تم إنشاء الحساب بنجاح ✨");

        window.location.href = "index.html";
    }

}



// نشر المساعدة (بقدر أساعد)
function addService() {

    alert("تم نشر مساعدتك بنجاح 🌿");

}



// نشر طلب المساعدة
function addHelpRequest() {

    alert("تم نشر طلب المساعدة بنجاح 🆘");

}



// التواصل مع صاحب المهارة
function contactPerson() {

    alert("يمكنك التواصل مع صاحب المهارة 🌟");

}



// تسجيل الخروج
function logout() {

    let confirmLogout = confirm("هل تريد تسجيل الخروج؟");


    if (confirmLogout) {

        window.location.href = "index.html";

    }

}
