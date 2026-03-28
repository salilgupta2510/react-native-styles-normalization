# @gsalil/react-native-responsive-scale

A lightweight utility for responsive layout normalization on React Native using iPhone 11 baselines.

## Benefits

- **Consistent UI Across Devices**: Normalizes dimensions to ensure your app looks great on various screen sizes and pixel densities.
- **Simplified Responsive Design**: Provides easy-to-use functions for scaling widths, heights, fonts, and spacing without complex calculations.
- **Modern Baseline**: Uses iPhone 11 (414x896) as the default baseline for contemporary design standards.
- **Customizable**: Allows setting custom baselines to match your design system or target devices.
- **Performance Optimized**: Lightweight with minimal overhead, using React Native's built-in APIs.
- **TypeScript Support**: Fully typed for better development experience.

## Installation

```bash
npm install @gsalil/react-native-responsive-scale
```

## API

- `widthScale(size: number, options?: NormalizeOptions): number` - Scale based on width
- `heightScale(size: number, options?: NormalizeOptions): number` - Scale based on height
- `fontScale(size: number, options?: NormalizeOptions): number` - Scale fonts based on width
- `verticalSpacing(size: number, options?: NormalizeOptions): number` - Scale vertical spacing based on height
- `horizontalSpacing(size: number, options?: NormalizeOptions): number` - Scale horizontal spacing based on width
- `normalize(size: number, based?: "width" | "height", options?: NormalizeOptions): number` - Core normalization function
- `setGuidelineBase(width: number, height: number): void` - Set custom baseline dimensions
- `getGuidelineBase(): { width: number; height: number }` - Get current baseline
- `resetGuidelineBase(): void` - Reset to default iPhone 11 baseline

Compatibility aliases:
- `wp` → `widthScale`
- `hp` → `heightScale`
- `fp` → `fontScale`
- `spV` → `verticalSpacing`
- `spH` → `horizontalSpacing`

## Usage

### Basic Usage with Aliases

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { wp, hp, fp, spV, spH } from '@gsalil/react-native-responsive-scale';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Responsive Card</Text>
        <Text style={styles.subtitle}>This card scales perfectly on all devices</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spH(20), // Horizontal spacing
  },
  card: {
    width: wp(320), // Width percentage
    height: hp(200), // Height percentage
    paddingVertical: spV(16), // Vertical spacing
    paddingHorizontal: spH(12), // Horizontal spacing
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: fp(18), // Font scaling
    fontWeight: 'bold',
    marginBottom: spV(8),
  },
  subtitle: {
    fontSize: fp(14),
    color: '#666',
  },
});

export default App;
```

### Default iPhone 11 baseline (414x896)

```ts
import {
  widthScale,
  heightScale,
  fontScale,
  verticalSpacing,
  horizontalSpacing,
} from "@gsalil/react-native-responsive-scale";

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
} from "@gsalil/react-native-responsive-scale";

setGuidelineBase(360, 760); // Android modern baseline, for example

const cardWidth = widthScale(320);
const cardHeight = heightScale(220);
```

### One-off normalization override (no global state changed)

```ts
import { widthScale } from "@gsalil/react-native-responsive-scale";

const customValue = widthScale(120, { baseWidth: 375, baseHeight: 812 });
```

### Restore default baseline

```ts
import { resetGuidelineBase } from "@gsalil/react-native-responsive-scale";
resetGuidelineBase();
```
