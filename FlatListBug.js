This bug occurs when using the FlatList component in React Native with a large dataset.  The performance becomes sluggish and scrolling is jerky.  This is often due to inefficient rendering of list items or improper key management. Consider the following code:

```javascript
<FlatList
  data={largeDataset}
  renderItem={({ item }) => <ListItem item={item} />}
  keyExtractor={(item) => item.id}
/>
```

If `largeDataset` is very large, and `ListItem` is complex, performance will suffer.  Even with `keyExtractor`, improper handling of item updates or re-renders within `ListItem` can still cause problems.