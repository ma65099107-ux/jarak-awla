// =============================
// جارك أولى - JavaScript
// =============================


// تسجيل الدخول
function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if (username === "" || password === "") {

        alert("يرجى إدخال اسم المستخدم وكلمة المرور");

    } else {

        alert("تم تسجيل الدخول بنجاح 🌿");

        window.location.href = "home.html";

    }

}



// إنشاء حساب
function register() {

    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;


    if (name === "" || password === "" || confirmPassword === "") {

        alert("يرجى ملء كل البيانات المطلوبة");

    }

    else if (password !== confirmPassword) {

        alert("كلمة المرور غير متطابقة");

    }

    else {

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

    window.location.href = "contact.html";

}



// إرسال رسالة لصاحب المهارة
function sendMessage() {

    alert("تم إرسال رسالتك بنجاح 💌");

    window.location.href = "skills.html";

}



// تسجيل الخروج
function logout() {

    let answer = confirm("هل تريد تسجيل الخروج؟");


    if (answer) {

        window.location.href = "index.html";

    }

}
