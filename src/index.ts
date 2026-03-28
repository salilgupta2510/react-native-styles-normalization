import { Dimensions, PixelRatio } from "react-native";
type Layout = "width" | "height";

type Scale = number;

type NormalizeOptions = {
  baseWidth?: number;
  baseHeight?: number;
  screenWidth?: number;
  screenHeight?: number;
};

let guidelineBaseWidth: Scale = 414; // iPhone 11 baseline
let guidelineBaseHeight: Scale = 896;

function getCurrentDimensions() {
  const window = Dimensions.get("window");
  return {
    width: window.width,
    height: window.height,
  };
}

function setGuidelineBase(width: number, height: number): void {
  if (width <= 0 || height <= 0) {
    throw new Error("Baseline width and height must be positive numbers.");
  }
  guidelineBaseWidth = width;
  guidelineBaseHeight = height;
}

function getGuidelineBase(): { width: number; height: number } {
  return {
    width: guidelineBaseWidth,
    height: guidelineBaseHeight,
  };
}

function resetGuidelineBase(): void {
  guidelineBaseWidth = 414;
  guidelineBaseHeight = 896;
}

function normalize(size: number, based: Layout = "width", options: NormalizeOptions = {}): number {
  const { baseWidth = guidelineBaseWidth, baseHeight = guidelineBaseHeight, screenWidth, screenHeight } = options;

  const { width: deviceWidth, height: deviceHeight } = {
    width: screenWidth ?? getCurrentDimensions().width,
    height: screenHeight ?? getCurrentDimensions().height,
  };

  if (baseWidth <= 0 || baseHeight <= 0) {
    throw new Error("normalize: baseWidth and baseHeight must be positive numbers.");
  }

  const wscale = deviceWidth / baseWidth;
  const hscale = deviceHeight / baseHeight;

  const newSize: number = based === "height" ? size * hscale : size * wscale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

function widthScale(size: number, options?: NormalizeOptions): number {
  return normalize(size, "width", options);
}

function heightScale(size: number, options?: NormalizeOptions): number {
  return normalize(size, "height", options);
}

function fontScale(size: number, options?: NormalizeOptions): number {
  return normalize(size, "width", options);
}

function verticalSpacing(size: number, options?: NormalizeOptions): number {
  return normalize(size, "height", options);
}

function horizontalSpacing(size: number, options?: NormalizeOptions): number {
  return normalize(size, "width", options);
}

export {
  widthScale as wp,
  heightScale as hp,
  fontScale as fp,
  verticalSpacing as spV,
  horizontalSpacing as spH,
  normalize,
  widthScale,
  heightScale,
  fontScale,
  verticalSpacing,
  horizontalSpacing,
  setGuidelineBase,
  getGuidelineBase,
  resetGuidelineBase,
};

export default {
  wp: widthScale,
  hp: heightScale,
  fp: fontScale,
  spV: verticalSpacing,
  spH: horizontalSpacing,
  normalize,
  widthScale,
  heightScale,
  fontScale,
  verticalSpacing,
  horizontalSpacing,
  setGuidelineBase,
  getGuidelineBase,
  resetGuidelineBase,
};
