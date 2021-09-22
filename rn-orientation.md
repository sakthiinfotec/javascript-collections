##### [Detecting Orientation of the app from Portrait to Landscape and vice versa](https://stackoverflow.com/questions/47683591/react-native-different-styles-applied-on-orientation-change)  

```typescript
import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();

    /**
    * Returns true if the screen is in portrait mode
    */
    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };

    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape'
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape'
      });
    });

  }

  render() {
    if (this.state.orientation === 'portrait') {
      return (
          //Render View to be displayed in portrait mode
       );
    }
    else {
      return (
        //Render View to be displayed in landscape mode
      );
    }

  }
}
```

Building reusable hook of above code:

```typescript
// useOrientation.tsx
import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

/**
 * Returns true if the screen is in portrait mode
 */
const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

/**
 * A React Hook which updates when the orientation changes
 * @returns whether the user is in 'PORTRAIT' or 'LANDSCAPE'
 */
export function useOrientation(): 'PORTRAIT' | 'LANDSCAPE' {
  // State to hold the connection status
  const [orientation, setOrientation] = useState<'PORTRAIT' | 'LANDSCAPE'>(
    isPortrait() ? 'PORTRAIT' : 'LANDSCAPE',
  );

  useEffect(() => {
    const callback = () => setOrientation(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE');

    Dimensions.addEventListener('change', callback);

    return () => {
      Dimensions.removeEventListener('change', callback);
    };
  }, []);

  return orientation;
}
```

Consume it using:

```typescript
import {useOrientation} from './useOrientation';

export const MyScreen = () => {
    const orientation = useOrientation();

    return (
        <View style={{color: orientation === 'PORTRAIT' ? 'red' : 'blue'}} />
    );
}
```
