import React from "react";
import { Card, CardHeader,CardBody, Image, Button, Slider } from "@nextui-org/react";
// import {HeartIcon} from "./HeartIcon";
// import {PauseCircleIcon} from "./PauseCircleIcon";
// import {NextIcon} from "./NextIcon";
// import {PreviousIcon} from "./PreviousIcon";
// import {RepeatOneIcon} from "./RepeatOneIcon";
// import {ShuffleIcon} from "./ShuffleIcon";

export default function CardApp() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardHeader className="mt-2">

      </CardHeader>
    </Card>
  );
}
