import { CSSProperties } from 'react';

interface ResponsivePictureProps {
  mobile: string;
  tablet: string;
  desktop: string;
  alt?: string;
  style?: CSSProperties;
}

const ResponsiveImage = ({
  mobile,
  tablet,
  desktop,
  alt = "Photo of Me",
  style = {},
}:ResponsivePictureProps) => {
  return (
    <picture style={{...style}}>
      <source media="(min-width: 1025px)" srcSet={desktop} />
      <source media="(min-width: 769px)" srcSet={tablet} />
      <img src={mobile} alt={alt} loading="lazy" />
    </picture>
  );
};

export default ResponsiveImage;
