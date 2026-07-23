// ==============================
// جارك أولى - JavaScript
// ==============================


// عرض المهارات والطلبات عند فتح الصفحة
window.onload = function () {


    // عرض المهارات
    let container = document.getElementById("skillsContainer");

    if (container) {

        let skills = JSON.parse(localStorage.getItem("skills")) || [];

        if (skills.length > 0) {

            container.innerHTML = "";

            skills.forEach(function(item){

                container.innerHTML += `
                    <div class="item">
                        👤 <strong>${item.name}</strong><br>
                        📌 ${item.skill}<br>
                        📝 ${item.description}<br>
                        📍 ${item.city}<br>
                        📞 ${item.phone}
                    </div>
                    <br>
                `;

            });

        }

    }



    // عرض طلبات المساعدة
    let requestsContainer = document.getElementById("requestsContainer");

    if (requestsContainer) {

        let requests = JSON.parse(localStorage.getItem("requests")) || [];

        if (requests.length > 0) {

            requestsContainer.innerHTML = "";

            requests.forEach(function(item){

                requestsContainer.innerHTML += `
                    <div class="item">
                        📢 <strong>${item.title}</strong><br>
                        📝 ${item.problem}<br>
                        📌 ${item.type}<br>
                        📍 ${item.city}<br>
                        📞 ${item.contact}
                    </div>
                    <br>
                `;

            });

        }

    }

};



// تسجيل الدخول
function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username==="" || password===""){

        alert("يرجى إدخال اسم المستخدم وكلمة المرور");
        return;

    }

    alert("تم تسجيل الدخول بنجاح 🌿");

    window.location.href="home.html";

}




// إنشاء حساب
function register(){

    let name=document.getElementById("name").value;
    let password=document.getElementById("password").value;
    let confirm=document.getElementById("confirmPassword").value;

    if(name==="" || password==="" || confirm===""){

        alert("يرجى ملء جميع البيانات");
        return;

    }

    if(password!==confirm){

        alert("كلمة المرور غير متطابقة");
        return;

    }

    alert("تم إنشاء الحساب بنجاح ✨");

    window.location.href="index.html";

}



// نشر مهارة
function addService(){

    let name=document.getElementById("name").value;
    let skill=document.getElementById("skill").value;
    let description=document.getElementById("description").value;
    let city=document.getElementById("city").value;
    let phone=document.getElementById("phone").value;


    if(name==="" || skill==="" || description==="" || city==="" || phone===""){

        alert("يرجى ملء جميع الحقول");
        return;

    }


    let skills=JSON.parse(localStorage.getItem("skills")) || [];


    skills.push({

        name:name,
        skill:skill,
        description:description,
        city:city,
        phone:phone

    });


    localStorage.setItem("skills",JSON.stringify(skills));


    alert("تم نشر المساعدة بنجاح 🌿");


    window.location.href="home.html";

}




// نشر طلب مساعدة
function addHelpRequest(){


    let title=document.getElementById("title").value;
    let problem=document.getElementById("problem").value;
    let type=document.getElementById("type").value;
    let city=document.getElementById("cityHelp").value;
    let contact=document.getElementById("contact").value;



    if(title==="" || problem==="" || type==="" || city==="" || contact===""){

        alert("يرجى ملء جميع الحقول");

        return;

    }



    let requests=JSON.parse(localStorage.getItem("requests")) || [];



    requests.push({

        title:title,
        problem:problem,
        type:type,
        city:city,
        contact:contact

    });



    localStorage.setItem("requests",JSON.stringify(requests));



    alert("تم نشر طلب المساعدة بنجاح 🆘");



    window.location.href="home.html";

}





// التواصل
function contactPerson(){

    window.location.href="contact.html";

}




// إرسال رسالة
function sendMessage(){

    let name=document.getElementById("contactName").value;
    let message=document.getElementById("message").value;
    let phone=document.getElementById("contactPhone").value;


    if(name==="" || message==="" || phone===""){

        alert("يرجى ملء جميع البيانات");

        return;

    }


    alert("تم إرسال الرسالة بنجاح 💌");

    window.location.href="home.html";

}




// تسجيل الخروج
function logout(){

    if(confirm("هل تريد تسجيل الخروج؟")){

        window.location.href="index.html";

    }

}
