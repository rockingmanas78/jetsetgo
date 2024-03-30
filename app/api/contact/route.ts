import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        const contactEmailHtml = `
            <div style="max-width: 600px; margin: auto; border: 1px solid #ccc; padding: 20px; font-family: Arial, sans-serif; border-radius: 10%; background-color: #0c1f2f; color: #ffffff">
                <div style="margin-bottom: 20px; text-align: center;">
                    <img src="https://jetsetgocabs.com/_next/image?url=%2Flogo.webp&w=384&q=75" alt="Company Logo" style="max-width: 100px;">
                </div>
                <h2 style="text-align: center; font-size: 24px; margin-bottom: 20px;">Contact Form Submission</h2>
                <div>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>
                </div>
            </div>
        `;
        const contactEmailConfirmationHtml = `
            <div style="max-width: 600px; margin: auto; border: 1px solid #ccc; padding: 20px; font-family: Arial, sans-serif; border-radius: 10%; background-color: #0c1f2f; color: #ffffff">
                <div style="margin-bottom: 20px; text-align: center;">
                    <img src="https://jetsetgocabs.com/_next/image?url=%2Flogo.webp&w=384&q=75" alt="Company Logo" style="max-width: 100px;">
                </div>
                <h2 style="text-align: center; font-size: 24px; margin-bottom: 20px;">Contact Form Submission</h2>
                <div>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>
                </div>
                <div style="margin-top: 20px; text-align: center; padding-top: 20px; border-top: 1px solid #ccc;">
                <p>Thank you for choosing us for your journey!</p>
                <p>Follow us on <a href="https://www.instagram.com/jetsetgocabs/" style="color: #ffffff;">Instagram</a></p>
                <p>Contact us for more information: <a href="support@jetsetgocabs.com" style="color: #ffffff;">support@jetsetgocabs.com</a></p>
            </div>
            </div>
        `;
        console.log(process.env.NEXT_PUBLIC_CONTACT_MAIL_USERNAME);

        // Configuration for nodemailer
        const transporter = nodemailer.createTransport({
            host: "smtp.privateemail.com",
            port: 587,
            secure: false,
            auth: {
                user: "support@jetsetgocabs.com",
                pass: process.env.NEXT_PUBLIC_CONTACT_MAIL_USERNAME,
            },
        });

        const mailOptions = {
            from: `"Jet Set Go Cabs" <${process.env.NEXT_PUBLIC_CONTACT_MAIL_USERNAME}>`,
            to: ["rockingmanas78@gmail.com", "rockingmanasjsr@gmail.com", "sanjivsrivastava.iiwe@rediffmail.com", "jetsetgocabs@gmail.com"],
            subject: `New Contact Form Submission from ${name}`,
            html: contactEmailHtml,
        };

        const userMailOptions = {
            from: `"Jet Set Go Cabs" <${process.env.NEXT_PUBLIC_CONTACT_MAIL_USERNAME}>`,
            to: email, 
            subject: `Contact Form Submitted Successfully!`,
            html: contactEmailConfirmationHtml,
        };
    
        const sendMailPromise = (mailOptions: any) =>
        new Promise<string>((resolve, reject) => {
          transporter.sendMail(mailOptions, function (err) {
            if (!err) {
              resolve('Email sent');
            } else {
              reject(err.message);
            }
          });
        });
        sendMailPromise(mailOptions);
        sendMailPromise(userMailOptions);

        return new NextResponse(JSON.stringify({ message: 'Contact form submitted successfully!' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: 'Failed to submit contact form' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}