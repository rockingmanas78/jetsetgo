// components/VisionaryQuote.tsx
import React, { FC } from 'react';
import { author, message } from "../../../utils/constants";

interface QuoteProps {
  quote: string;
  author: string;
}

const Quote: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 my-8 bg-gradient-to-r from-[#0c1f2f] via- via-[#193855] via-[#AFC1D0] via-[#003D60] to-[#0c1f2f] text-white px-4 md:px-8">{/**/}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-thin italic leading-relaxed max-w-4xl text-center">
        "{message}"
      </p>
      <p className="mt-6 text-base md:text-lg lg:text-xl font-thin">- {author}</p>
    </div>
  );
};

export default Quote;
