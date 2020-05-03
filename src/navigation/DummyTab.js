import { useEffect } from 'react';

export default function DummyTab({ navigation }) {
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      e.preventDefault();
    });

    return unsubscribe;
  }, [navigation]);

  return null;
}
