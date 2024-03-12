import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { View, Text } from '@/components/Themed';
import { useQuery } from '@tanstack/react-query';
import MovieListItem from '@/components/MovieListItem';
import { fetchWatchListMovies } from '@/api/watchlist';

export default function WatchList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['watchlist'],
    queryFn: fetchWatchListMovies,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 5, padding: 5 }}
        columnWrapperStyle={{ gap: 5 }}
        data={data}
        renderItem={({ item }) => <MovieListItem movie={item} />}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
