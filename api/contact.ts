import transporter from "../email/transporter";

export default async function contact(req:any, res:any){
    try{
        const {name, email, message, recaptchaToken} = req.body;

        console.log("sending email...");
        console.log(process.env.SMTP_FROM); //for troubleshooting purposes

        const info = await transporter.sendMail({
            from: `Portfolio Website <${process.env.SMTP_FROM}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `Website Contact: ${name}`,
            text:`
WEBSITE CONTACT

Name: ${name}
Email: ${email}

Message:
${message}

Sent from gabrielbaje.dev
    `,

    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #334155;">
            
            <div style="
                border-top: 4px solid;
                border-image: linear-gradient(90deg, #0d9488, #7c3aed) 1;
                padding: 20px 0;
            ">
                <h2 style="margin: 0; color: #0f172a;">
                    Website Contact
                </h2>
            </div>

            <div style="margin-top: 20px;">
                <p style="margin-bottom: 5px; color: #64748b; font-size: 13px;">
                    NAME
                </p>
                <p style="margin-top: 0; font-size: 16px;">
                    ${name}
                </p>

                <p style="margin-bottom: 5px; color: #64748b; font-size: 13px;">
                    EMAIL
                </p>
                <p style="margin-top: 0; font-size: 16px;">
                    ${email}
                </p>

                <p style="margin-bottom: 5px; color: #64748b; font-size: 13px;">
                    MESSAGE
                </p>
                <div style="
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    padding: 16px;
                    font-size: 15px;
                    line-height: 1.6;
                ">
                    ${message}
                </div>
            </div>

            <p style="
                margin-top: 30px;
                padding-top: 15px;
                border-top: 1px solid #e2e8f0;
                color: #94a3b8;
                font-size: 12px;
            ">
                Sent from gabrielbaje.dev
            </p>

        </div>
    `,
    });
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
}
