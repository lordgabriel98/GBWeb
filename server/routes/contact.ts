import Router from "express";

import transporter from "../email/transporter";

const router = Router();

router.post("/", async(req, res)=>{
    try{
        const {name, email, message, recaptchaToken} = req.body;

        console.log("sending email...");

        const info = await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `Website Contact: ${name}`,
            text: `
                Name: ${name}\n\n
                Email: ${email}\n\n
                Message:
                ${message}
            `,
    });
    console.log("SMTP_FROM:", process.env.SMTP_FROM);
    console.log("Email sent: ", info.messageId)
        res.status(200).json({
        message: "Contact form received"
        })
    }catch(error){
        console.error("Email failed: ", error);

        res.status(500).json({
            message: "Failed to send email",
        });
    }

   
})

export default router;