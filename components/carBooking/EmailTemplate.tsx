import { BookingDetails } from "@/types";

  
  const EmailTemplate: React.FC<BookingDetails> = ({ location, pickUpDate, dropOffDate, pickUpTime, dropOffTime, userName, contactNumber, carId }) => {
    return (
      <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-md">
        <h2 className="text-xl font-bold mb-4">Booking Details</h2>
        <div className="mb-4">
          <p className="text-gray-600"><strong>Location:</strong> {location}</p>
          <p className="text-gray-600"><strong>Pick-Up Date:</strong> {pickUpDate}</p>
          <p className="text-gray-600"><strong>Drop-Off Date:</strong> {dropOffDate}</p>
          <p className="text-gray-600"><strong>Pick-Up Time:</strong> {pickUpTime}</p>
          <p className="text-gray-600"><strong>Drop-Off Time:</strong> {dropOffTime}</p>
          <p className="text-gray-600"><strong>User Name:</strong> {userName}</p>
          <p className="text-gray-600"><strong>Contact Number:</strong> {contactNumber}</p>
          <p className="text-gray-600"><strong>Car ID:</strong> {carId}</p>
        </div>
      </div>
    );
  };
  
  export default EmailTemplate;
  