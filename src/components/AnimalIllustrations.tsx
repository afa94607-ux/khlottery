import React from 'react';

// Authentic Khmer Lucky Lottery Cover (4K 3840x3840 High Resolution, Full Image Only)
export const GoldIngotIcon: React.FC<{ size?: number; className?: string }> = ({ size = 70, className = '' }) => {
  return (
    <img
      src="/src/assets/images/hidden_cover_4k_1794587783535.jpg"
      alt=""
      width={3840}
      height={3840}
      decoding="async"
      referrerPolicy="no-referrer"
      className={`object-fill rounded shadow-md pointer-events-none select-none ${className}`}
      style={{ width: size, height: size, imageRendering: '-webkit-optimize-contrast' }}
    />
  );
};

// 4K (3840x3840) High-Resolution Result Artwork for each of the 12 Khmer figures — Full Image with No Text Overlay
export const AnimalArtwork: React.FC<{ number: number; className?: string }> = ({
  number,
  className = 'w-full h-full object-fill',
}) => {
  const commonImgProps = {
    className,
    width: 3840,
    height: 3840,
    decoding: 'async' as const,
    referrerPolicy: 'no-referrer' as const,
    style: { imageRendering: '-webkit-optimize-contrast' as const },
    loading: 'eager' as const,
    alt: '',
  };

  switch (number) {
    case 1:
      return <img src="/assets/aistudio/image_56958bf8_4k.jpg" {...commonImgProps} />;
    case 2:
      return <img src="/assets/aistudio/image_db618d8c_4k.jpg" {...commonImgProps} />;
    case 3:
      return <img src="/assets/aistudio/image_f12e60ed_4k.jpg" {...commonImgProps} />;
    case 4:
      return <img src="/assets/aistudio/image_da2dada5_4k.jpg" {...commonImgProps} />;
    case 5:
      return <img src="/assets/aistudio/image_d13f2d73_4k.jpg" {...commonImgProps} />;
    case 6:
      return <img src="/assets/aistudio/image_200a760b_4k.jpg" {...commonImgProps} />;
    case 7:
      return <img src="/assets/aistudio/image_50856913_4k.jpg" {...commonImgProps} />;
    case 8:
      return <img src="/assets/aistudio/image_c0557994_4k.jpg" {...commonImgProps} />;
    case 9:
      return <img src="/assets/aistudio/image_799af351_4k.jpg" {...commonImgProps} />;
    case 10:
      return <img src="/assets/aistudio/image_a48a72a3_4k.jpg" {...commonImgProps} />;
    case 11:
      return <img src="/assets/aistudio/image_512554a0_4k.jpg" {...commonImgProps} />;
    case 12:
      return <img src="/assets/aistudio/image_64be13af_4k.jpg" {...commonImgProps} />;
    default:
      return <img src="/assets/aistudio/image_56958bf8_4k.jpg" {...commonImgProps} />;
  }
};
