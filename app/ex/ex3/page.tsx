import React from "react";

export default function Ex1Page() {
    return (
    <>
        <div>
            <h1>การใช้คำสั่ง BR,CENTER & {"<p>....</p>"}</h1>
            <p style={{ textAlign: "center" }}>
                "ข้าราการ หมั่นดี ไม่ขี้เกียจ <br /> ชอบละเอื่ยด งานชาติ ไม่ขาดผล <br /> เอาใจใส่ ต่อจรรยา รักษาตน <br /> ไม่เป็นคน ลำพอง ใครครองเมือง"
            </p>
            <p style={{ textAlign: "right" }}>
                "จัดการงาน ดีนัก รู้จักกิจ <br /> รับชอบผิด งานชาติ จนปราดเปรื่อง <br /> จึงควรทำ ราชการ งานบ้านเมือง <br /> ไม่ขัดเคือง คลายร้อน นอนเต็มตา"
            </p>
            <div style={{ textAlign: "center" }}>I'm Centered</div>
            <p style={{ textAlign: "left" }}>
            นาย ธนพัฒน์ ศรีศุภศิริวงศ์ ม.5/4 เลขที่ 4
            </p>
        </div>
    </>
    )
}
