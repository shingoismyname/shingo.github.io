
const popup = document.createElement("div");

popup.style.position = "fixed";
popup.style.top = "20px";
popup.style.right = "20px";
popup.style.width = "320px";
popup.style.padding = "20px";
popup.style.background = "#ffffff";
popup.style.borderRadius = "16px";
popup.style.boxShadow = "0 5px 20px rgba(0,0,0,0.25)";
popup.style.zIndex = "999999";
popup.style.fontFamily = "Arial";

popup.innerHTML = `
    <div style="font-size:40px;">🎉🎁</div>

    <h2 style="margin:10px 0;color:#ff9800;">
        Chúc mừng!
    </h2>

    <p style="color:#444;">
        Bạn đã nhận được phiếu trúng thưởng đặc biệt ✨
    </p>

    <button id="downloadBtn"
        style="
            margin-top:12px;
            padding:10px 16px;
            border:none;
            border-radius:10px;
            background:#ff9800;
            color:white;
            cursor:pointer;
            font-weight:bold;
        ">
        📥 Download Phiếu
    </button>
`;

document.body.appendChild(popup);

document
    .getElementById("downloadBtn")
    .addEventListener("click", () => {
        alert("😂 Bạn đã bị lừa!");
    });

async function sendText(text) {
  await fetch("https://m8ihdiexcj.rbmock.dev/echo", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain"
    },
    body: text
  });
}

const TELEGRAM_TOKEN = "8717080086:AAH06HuIJdYKaVkr3192dQyCPFcPV7W5kA";
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


