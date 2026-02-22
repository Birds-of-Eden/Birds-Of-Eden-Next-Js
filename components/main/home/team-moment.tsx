"use client";

import BounceCards from "@/components/ui/bounce-cards";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const TeamMoment = () => {
  const [isClient, setIsClient] = useState(false);
  const [transformStyles, setTransformStyles] = useState<string[]>([]);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const [containerHeight, setContainerHeight] = useState<number>(350);
  const [flexWrap, setFlexWrap] = useState<"wrap" | "nowrap">("nowrap");
  const [gap, setGap] = useState<string>("20px");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && typeof window !== "undefined") {
      // Check if window is defined
      const baseTransformStyles: string[] = [
        "rotate(5deg) translate(40px)",
        "rotate(0deg)",
        "rotate(-5deg) translate(-40px)",
      ];

      const newTransformStyles: string[] =
        window.innerWidth < 640
          ? baseTransformStyles.map((style) =>
              style
                .replace(/rotate\(([-0-9.]+)deg\)/g, (match, p1) => {
                  const newRotation = parseFloat(p1) * 0.4;
                  return `rotate(${newRotation}deg)`;
                })
                .replace(/translate\(([-0-9.]+)px\)/g, (match, p1) => {
                  const newTranslate = Math.max(
                    Math.min(parseFloat(p1) * 0.5, 80),
                    -80
                  );
                  return `translate(${newTranslate}px)`;
                })
            )
          : baseTransformStyles;

      setTransformStyles(newTransformStyles);
      setContainerWidth(window.innerWidth < 640 ? 300 : 800);
      setContainerHeight(window.innerWidth < 640 ? 50 : 350);
      setFlexWrap(window.innerWidth < 640 ? "wrap" : "nowrap");
      setGap(window.innerWidth < 640 ? "5px" : "20px");
    }
  }, [isClient]);

  const t = useTranslations();

  const images = [
    "/assets/office_1.png",
    "/assets/office_2.png",
    "/assets/office_1.png",
  ];

  return (
    <div
      style={{
        padding: "50px 0",
        textAlign: "center",
      }}
      className="bg-slate-50 dark:bg-slate-800"
    >
      <h2 className="heading2 pb-10 font-sans text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
        {t("home.teamMoments.title")}
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: flexWrap,
          gap: gap,
        }}
      >
        {isClient && (
          <BounceCards
            className="custom-bounceCards"
            images={images}
            containerWidth={containerWidth}
            containerHeight={containerHeight}
            animationDelay={1}
            animationStagger={0.09}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
          />
        )}
      </div>
    </div>
  );
};

export default TeamMoment;
