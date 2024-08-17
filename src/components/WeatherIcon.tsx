import React from "react";
import Image from "next/image";

type Props = {};

export default function WeatherIcon(
  props: React.HTMLProps<HTMLDivElement> & { iconName: string }
) {
  return (
    <div title={props.iconName} {...props}>
      <Image
        width={60}
        height={60}
        alt="Weather"
        layout="container"
        src={`https://openweathermap.org/img/wn/${props.iconName}@4x.png`}
      />
    </div>
  );
}
