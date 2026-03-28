type Layout = "width" | "height";
type NormalizeOptions = {
    baseWidth?: number;
    baseHeight?: number;
    screenWidth?: number;
    screenHeight?: number;
};
declare function setGuidelineBase(width: number, height: number): void;
declare function getGuidelineBase(): {
    width: number;
    height: number;
};
declare function resetGuidelineBase(): void;
declare function normalize(size: number, based?: Layout, options?: NormalizeOptions): number;
declare function widthScale(size: number, options?: NormalizeOptions): number;
declare function heightScale(size: number, options?: NormalizeOptions): number;
declare function fontScale(size: number, options?: NormalizeOptions): number;
declare function verticalSpacing(size: number, options?: NormalizeOptions): number;
declare function horizontalSpacing(size: number, options?: NormalizeOptions): number;
export { widthScale as wp, heightScale as hp, fontScale as fp, verticalSpacing as spV, horizontalSpacing as spH, normalize, widthScale, heightScale, fontScale, verticalSpacing, horizontalSpacing, setGuidelineBase, getGuidelineBase, resetGuidelineBase, };
declare const _default: {
    wp: typeof widthScale;
    hp: typeof heightScale;
    fp: typeof fontScale;
    spV: typeof verticalSpacing;
    spH: typeof horizontalSpacing;
    normalize: typeof normalize;
    widthScale: typeof widthScale;
    heightScale: typeof heightScale;
    fontScale: typeof fontScale;
    verticalSpacing: typeof verticalSpacing;
    horizontalSpacing: typeof horizontalSpacing;
    setGuidelineBase: typeof setGuidelineBase;
    getGuidelineBase: typeof getGuidelineBase;
    resetGuidelineBase: typeof resetGuidelineBase;
};
export default _default;
