import React, { useEffect, useState } from 'react'

const CarsFilterOption = ({ carsList, setBrand, sortCarList }: any) => {
  const [brandList, setBrandList] = useState<any>();

  const BrandSet = new Set();

  useEffect(() => {
    filterCarList();
  }, [carsList])
  
  const filterCarList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });
    console.log(BrandSet);
    setBrandList(Array.from(BrandSet));
  }

  return (
    <div className='mt-10 flex items-center justify-between'>
        <div>
            <h2 className='text-[30px] font'>Cars Catalog</h2>
            <h2 className=''>Explore our cars you might like</h2>
        </div>
        <div className='flex gap-5'>
        <select 
            onChange={(e) => sortCarList(e.target.value)}
            className="select select-bordered w-full max-w-xs">
            <option disabled selected>Price</option>
            <option value={-1}>Min To Max</option>
            <option value={1}>Max To Min</option>
        </select>
        <select
          onChange={(e) => setBrand(e.target.value)}
          className="select select-bordered w-full max-w-xs hidden md:block">
              <option disabled selected>Brand</option>
              {brandList && brandList.map((brand:string, index:number) => (
                <option key={index}>{brand}</option>
              ))}
          </select>
        </div>
    </div>
  )
}

export default CarsFilterOption