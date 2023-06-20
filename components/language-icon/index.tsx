import Image from "next/image";
import * as React from "react";

interface LanguageIconProps {
  name: string;
  alt: string;
}

export const LanguageIcon: React.FC<LanguageIconProps> = ({ name, alt }) => {
  const url = `assets/${name}.svg`;

  return <Image src={url} alt={alt} width={40} height={40} />;
};
