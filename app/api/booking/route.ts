import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

  
export async function POST(req: NextRequest, res: NextResponse) {
  try {
      const { location, pickUpDate, dropOffDate, pickUpTime, dropOffTime, userName, contactNumber, carId, email } = await req.json();

    const emailHtml = `
        <div style="max-width: 600px; margin: auto; border: 1px solid #ccc; padding: 20px; font-family: Arial, sans-serif; border-radius: 10%; background-color: #0c1f2f"; color: #ffffff>
            <div style="margin-bottom: 20px; text-align: center;">
                <img src="https://jetsetgocabs.com/_next/image?url=%2Flogo.webp&w=384&q=75" alt="Company Logo" style="max-width: 100px;">
            </div>
            <h2 style="text-align: center; font-size: 24px; margin-bottom: 20px;">Booking Details</h2>
            <div>
                <p><strong>User Name:</strong> ${userName}</p>
                <p><strong>Contact Number:</strong> ${contactNumber}</p>
                <p><strong>Customer Email:</strong> ${email}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Pick-Up Date:</strong> ${pickUpDate}</p>
                <p><strong>Drop-Off Date:</strong> ${dropOffDate}</p>
                <p><strong>Pick-Up Time:</strong> ${pickUpTime}</p>
                <p><strong>Drop-Off Time:</strong> ${dropOffTime}</p>
                <p><strong>Car Id:</strong> ${carId}</p>
            </div>
        </div>
    `;

    const userEmailHtml = `
        <div style="max-width: 600px; margin: auto; border: 1px solid #ccc; padding: 20px; font-family: Arial, sans-serif; border-radius: 5%; background-color: #0c1f2f; color: #ffffff;">
            <div style="margin-bottom: 20px; text-align: center;">
                <img src="https://jetsetgocabs.com/_next/image?url=%2Flogo.webp&w=384&q=75" alt="Company Logo" style="max-width: 100px;">
            </div>
            <h2 style="text-align: center; font-size: 24px; margin-bottom: 20px;">Booking Details</h2>
            <div style="color: white;">
                <p><strong>Booking Name:</strong> ${userName}</p>
                <p><strong>Contact Number:</strong> ${contactNumber}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Pick-Up Date:</strong> ${pickUpDate}</p>
                <p><strong>Drop-Off Date:</strong> ${dropOffDate}</p>
                <p><strong>Pick-Up Time:</strong> ${pickUpTime}</p>
                <p><strong>Drop-Off Time:</strong> ${dropOffTime}</p>
            </div>
            <div style="margin-top: 20px; text-align: center; padding-top: 20px; border-top: 1px solid #ccc;">
                <p>Thank you for choosing us for your journey!</p>
                <p>Follow us on <a href="https://www.instagram.com/jetsetgocabs/" style="color: #ffffff;">Instagram</a></p>
                <p>Contact us for more information: <a href="support@jetsetgocabs.com" style="color: #ffffff;">support@jetsetgocabs.com</a></p>
            </div>
        </div>
    `;

    console.log(process.env.NEXT_PUBLIC_MAIL_USERNAME);
    console.log(process.env.NEXT_PUBLIC_MAIL_PASSWORD);
    // Create transporter for sending emails
    const transporter = nodemailer.createTransport({
      host: "smtp.privateemail.com",
      port: 587,
      secure: false,
      auth: {
          user: "bookings@jetsetgocabs.com",
          pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD
      }
    });

    const mailOptions = {
        from: `"Jet Set Go Cabs" <${process.env.NEXT_PUBLIC_MAIL_USERNAME}>`,
        to: ["rockingmanas78@gmail.com", "jetsetgocabs@gmail.com", "sanjivsrivastava.iiwe@rediffmail.com"], // Send email to your own email address for testing
        subject: `New Booking Request from ${userName}`,
        html: emailHtml,
    };

    const userMailOptions = {
        from: `"Jet Set Go Cabs" <${process.env.NEXT_PUBLIC_MAIL_USERNAME}>`,
        to: email, // Send email to your own email address for testing
        subject: `Booking Confirmation from ${process.env.NEXT_PUBLIC_MAIL_USERNAME}`,
        html: userEmailHtml,
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
    await sendMailPromise(mailOptions);
    //await sendMailPromise(userMailOptions);

    return NextResponse.json({ message: 'Booking Successfully Created!' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Email not sent' });
  }
}