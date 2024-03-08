import request, { gql } from "graphql-request"

const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clsgabgk31xvp01wju0yzquv8/master';

export const getCarsList=async() => {
    const query =gql`
      query CarLists {
        carLists {
          carAvg
          createdAt
          id
          name
          price
          publishedAt
          updatedAt
          seat
          image {
            url
          }
          carType
          carBrand
        }
      }
    
      
    `
    const result = await request(MASTER_URL, query);
    return result;
}

export const createBooking = async(formValue:any) => {
  const mutateQuery = gql`
  mutation MyMutation {
    createBooking(
      data: {
        carId: {connect: {id: "`+formValue.carId+`"}}, 
        dropOffDate: "`+formValue.dropOffDate+`", 
        dropOffTime: "`+formValue.dropOffTime+`", 
        location: "`+formValue.location+`", 
        pickUpDate: "`+formValue.pickUpDate+`", 
        pickUpTime: "`+formValue.pickUpTime+`", 
        userName: "`+formValue.userName+`", 
        contactNumber: "`+formValue.contactNumber+`",
        email: "`+formValue.email+`",
      }
    ) {
      id
    }
  }
  
  `

  const result = await request(MASTER_URL, mutateQuery);
  return result;
}