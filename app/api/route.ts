// import { Resend } from 'resend';
// import EmailTemplate from '../../components/carBooking/EmailTemplate'; // Assuming EmailTemplate is defined in EmailTemplate.tsx or EmailTemplate.jsx
// import { BookingDetails } from '@/types';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request): Promise<Response> {
//   try {
//     const {
//       location,
//       pickUpDate,
//       dropOffDate,
//       pickUpTime,
//       dropOffTime,
//       userName,
//       contactNumber,
//       carId,
//     } = request.body;

//     // Assuming resend.emails.send is an async function that sends emails
//     const data = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['delivered@resend.dev'],
//       subject: 'Hello world',
//       react: EmailTemplate({ location, pickUpDate, dropOffDate, pickUpTime, dropOffTime, userName, contactNumber, carId }),
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }