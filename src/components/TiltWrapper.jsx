import React, { forwardRef } from "react";
import Tilt from "react-tilt";

const TiltWrapper = forwardRef((props, ref) => (
    <div ref={ref}>
        <Tilt {...props}>{props.children}</Tilt>
    </div>
));

export default TiltWrapper;
