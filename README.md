# React Native FlatList Performance Bug

This repository demonstrates a common performance issue encountered when using the `FlatList` component in React Native with large datasets. The bug manifests as slow scrolling and jerky rendering, impacting the user experience.

## Bug Description

The primary issue stems from inefficient rendering of list items within the `FlatList`.  Even with appropriate use of `keyExtractor`, improper handling of updates or complex rendering logic within list items can lead to performance degradation.

## Solution

The solution involves optimizing the rendering process and minimizing unnecessary re-renders. This often involves using techniques like `useMemo`, `React.memo`, or implementing virtualization strategies (e.g., windowing). The solution also highlights the importance of correctly using the `keyExtractor` prop and avoiding unnecessary calculations within the `renderItem` function.