"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const noise = createNoise3D();
  let w: number, h: number, nt: number, i: number, x: number;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getSpeed = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  }, [speed]);

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = useCallback(
    (ctx: CanvasRenderingContext2D, n: number) => {
      nt += getSpeed();
      for (i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100; // `y` changed to `const`
          ctx.lineTo(x, y + h * 0.5); // Adjust for height (50% of the container)
        }
        ctx.stroke();
        ctx.closePath();
      }
    },
    [getSpeed, waveColors, waveWidth, noise]
  );

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        nt = 0;

        const handleResize = () => {
          w = ctx.canvas.width = window.innerWidth;
          h = ctx.canvas.height = window.innerHeight;
          ctx.filter = `blur(${blur}px)`;
        };

        window.addEventListener("resize", handleResize);
        const render = () => {
          ctx.fillStyle = backgroundFill || "black";
          ctx.globalAlpha = waveOpacity || 0.5;
          ctx.fillRect(0, 0, w, h);
          drawWave(ctx, 5);
          requestAnimationFrame(render);
        };
        render();

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }
  }, [blur, backgroundFill, waveOpacity, drawWave]);

  useEffect(() => {
    const cleanup = init();
    return cleanup;
  }, [init]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
