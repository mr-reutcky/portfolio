"use strict";

function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
            let paths = document.querySelectorAll("path");
            let mode=repeat?'infinite':'forwards'
            for (let i = 0; i < paths.length; i++) {
                const path = paths[i];
                const length = path.getTotalLength();
                path.style["stroke-dashoffset"] = `${length}px`;
                path.style["stroke-dasharray"] = `${length}px`;
                path.style["stroke-width"] = `${strokeWidth}px`;
                path.style["stroke"] = `${strokeColor}`;
                path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
                path.style["animation-delay"] = `${i * delay}s`;
            }
        }
setTextAnimation(0.5,8.5,1.5,'linear','#ffffff',false);