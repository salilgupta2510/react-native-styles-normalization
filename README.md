# react-native-styles-normalization

A lightweight utility for responsive layout normalization on React Native using iPhone 11 baselines.

## API

- `widthScale(size: number, options?: NormalizeOptions): number`
- `heightScale(size: number, options?: NormalizeOptions): number`
- `fontScale(size: number, options?: NormalizeOptions): number`
- `verticalSpacing(size: number, options?: NormalizeOptions): number`
- `horizontalSpacing(size: number, options?: NormalizeOptions): number`
- `normalize(size: number, based?: "width" | "height", options?: NormalizeOptions): number`
- `setGuidelineBase(width: number, height: number): void`
- `getGuidelineBase(): { width: number; height: number }`
- `resetGuidelineBase(): void`

Compatibility aliases:
- `wp` → `widthScale`
- `hp` → `heightScale`
- `fp` → `fontScale`
- `spV` → `verticalSpacing`
- `spH` → `horizontalSpacing`

## Usage

### Default iPhone 11 baseline (414x896)

```ts
import {
  widthScale,
  heightScale,
  fontScale,
  verticalSpacing,
  horizontalSpacing,
} from "react-native-styles-normalization";

const buttonWidth = widthScale(200);
const textSize = fontScale(16);
const paddingVertical = verticalSpacing(12);
const marginHorizontal = horizontalSpacing(10);
```

### Customize baseline for your design system

```ts
import {
  setGuidelineBase,
  widthScale,
  heightScale,
} from "react-native-styles-normalization";

setGuidelineBase(360, 760); // Android modern baseline, for example

const cardWidth = widthScale(320);
const cardHeight = heightScale(220);
```

### One-off normalization override (no global state changed)

```ts
import { widthScale } from "react-native-styles-normalization";

const customValue = widthScale(120, { baseWidth: 375, baseHeight: 812 });
```

### Restore default baseline

```ts
import { resetGuidelineBase } from "react-native-styles-normalization";
resetGuidelineBase();
```
