import { View, Text } from '@/components/Themed';
import { useLocalSearchParams } from 'expo-router';

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>MovieDetails: {id}</Text>
    </View>
  );
};

export default MovieDetails;
