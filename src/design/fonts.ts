import { css } from "styled-components";

import PretendardThin from "@/assets/font/pretendard/Pretendard-Thin.otf";
import PretendardExtraLight from "@/assets/font/pretendard/Pretendard-ExtraLight.otf";
import PretendardLight from "@/assets/font/pretendard/Pretendard-Light.otf";
import PretendardRegular from "@/assets/font/pretendard/Pretendard-Regular.otf";
import PretendardMedium from "@/assets/font/pretendard/Pretendard-Medium.otf";
import PretendardSemiBold from "@/assets/font/pretendard/Pretendard-SemiBold.otf";
import PretendardBold from "@/assets/font/pretendard/Pretendard-Bold.otf";
import PretendardExtraBold from "@/assets/font/pretendard/Pretendard-ExtraBold.otf";
import PretendardBlack from "@/assets/font/pretendard/Pretendard-Black.otf";

import kjcGothicBold from "@/assets/font/kjcGothic/kjcGothic-Bold.otf";
import kjcGothicRegular from "@/assets/font/kjcGothic/kjcGothic-Regular.otf";
import kjcGothicLight from "@/assets/font/kjcGothic/kjcGothic-Light.otf";

export const fonts = css`
  @font-face {
    font-family: "Pretendard-Thin";
    font-style: normal;
    src: local("Pretendard-Thin"), url(${PretendardThin}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard-ExtraLight";
    font-style: normal;
    src: local("Pretendard-ExtraLight"),
      url(${PretendardExtraLight}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard-Light";
    font-style: normal;
    src: local("Pretendard-Light"), url(${PretendardLight}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard-Regular";
    font-style: normal;
    src: local("Pretendard-Regular"),
      url(${PretendardRegular}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard-Medium";
    font-style: normal;
    src: local("Pretendard-Medium"), url(${PretendardMedium}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard-SemiBold";
    font-style: normal;
    src: local("Pretendard-SemiBold"),
      url(${PretendardSemiBold}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard-Bold";
    font-style: normal;
    src: local("Pretendard-Bold"), url(${PretendardBold}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard-ExtraBold";
    font-style: normal;
    src: local("Pretendard-ExtraBold"),
      url(${PretendardExtraBold}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard-Black";
    font-style: normal;
    src: local("Pretendard-Black"), url(${PretendardBlack}) format("opentype");
  }

  @font-face {
    font-family: "KjcGothic-Bold";
    font-style: normal;
    src: local("KjcGothic-Bold"), url(${kjcGothicBold}) format("opentype");
  }

  
  @font-face {
    font-family: "KjcGothic-Regular";
    font-style: normal;
    src: local("KjcGothic-Regular"), url(${kjcGothicRegular}) format("opentype");
  }

  @font-face {
    font-family: "KjcGothic-Light";
    font-style: normal;
    src: local("KjcGothic-Medium"), url(${kjcGothicLight}) format("opentype");
  }
`;
