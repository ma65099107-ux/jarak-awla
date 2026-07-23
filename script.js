let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("الرجاء إدخال اسم المستخدم وكلمة المرور.");
        return false;
    }

    alert("تم تسجيل الدخول بنجاح ✅");
    return true;
}
