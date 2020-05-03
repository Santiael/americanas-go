import { useEffect } from 'react';

export default function DummyTab({ navigation }) {
  useEffect(() => {
    navigation.addListener('tabPress', (e) => {
      e.preventDefault();
    });

    navigation.goBack();
  }, [navigation]);

  return null;
}
