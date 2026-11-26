import Image from "next/image";

type PhoneProps = {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
};

export function Phone({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
}: PhoneProps) {
  return (
    <div className={`phone${className ? ` ${className}` : ""}`}>
      <div className="phone__screen">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 767px) 42vw, 240px"
          priority={priority}
        />
      </div>
    </div>
  );
}
