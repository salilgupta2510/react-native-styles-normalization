"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wp = widthScale;
exports.widthScale = widthScale;
exports.hp = heightScale;
exports.heightScale = heightScale;
exports.fp = fontScale;
exports.fontScale = fontScale;
exports.spV = verticalSpacing;
exports.verticalSpacing = verticalSpacing;
exports.spH = horizontalSpacing;
exports.horizontalSpacing = horizontalSpacing;
exports.normalize = normalize;
exports.setGuidelineBase = setGuidelineBase;
exports.getGuidelineBase = getGuidelineBase;
exports.resetGuidelineBase = resetGuidelineBase;
const react_native_1 = require("react-native");
let guidelineBaseWidth = 414; // iPhone 11 baseline
let guidelineBaseHeight = 896;
function getCurrentDimensions() {
    const window = react_native_1.Dimensions.get("window");
    return {
        width: window.width,
        height: window.height,
    };
}
function setGuidelineBase(width, height) {
    if (width <= 0 || height <= 0) {
        throw new Error("Baseline width and height must be positive numbers.");
    }
    guidelineBaseWidth = width;
    guidelineBaseHeight = height;
}
function getGuidelineBase() {
    return {
        width: guidelineBaseWidth,
        height: guidelineBaseHeight,
    };
}
function resetGuidelineBase() {
    guidelineBaseWidth = 414;
    guidelineBaseHeight = 896;
}
function normalize(size, based = "width", options = {}) {
    const { baseWidth = guidelineBaseWidth, baseHeight = guidelineBaseHeight, screenWidth, screenHeight } = options;
    const { width: deviceWidth, height: deviceHeight } = {
        width: screenWidth !== null && screenWidth !== void 0 ? screenWidth : getCurrentDimensions().width,
        height: screenHeight !== null && screenHeight !== void 0 ? screenHeight : getCurrentDimensions().height,
    };
    if (baseWidth <= 0 || baseHeight <= 0) {
        throw new Error("normalize: baseWidth and baseHeight must be positive numbers.");
    }
    const wscale = deviceWidth / baseWidth;
    const hscale = deviceHeight / baseHeight;
    const newSize = based === "height" ? size * hscale : size * wscale;
    return Math.round(react_native_1.PixelRatio.roundToNearestPixel(newSize));
}
function widthScale(size, options) {
    return normalize(size, "width", options);
}
function heightScale(size, options) {
    return normalize(size, "height", options);
}
function fontScale(size, options) {
    return normalize(size, "width", options);
}
function verticalSpacing(size, options) {
    return normalize(size, "height", options);
}
function horizontalSpacing(size, options) {
    return normalize(size, "width", options);
}
exports.default = {
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
