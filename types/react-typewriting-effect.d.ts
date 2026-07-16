declare module "react-typewriting-effect" {
  import * as React from "react";

  export interface TypewriterProps {
    string: string;
    delay?: number;
    stopBlinkinOnComplete?: any;
    className?: string;
    onComplete?: () => void;
    cursor?: string;
    cursorClassName?: string;
  }
  export const Typewriter: React.FC<TypewriterProps>;
}
