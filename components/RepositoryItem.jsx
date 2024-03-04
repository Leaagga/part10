import { StyleSheet, Text, View, Image } from 'react-native'
const styles = StyleSheet.create({
  avator: { margin: 10 },
  name: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  boldText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  normalText: {
    padding: 1,
    textAlign: 'center',
  },
  background: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  rowContainerA: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  language: {
    marginTop: 5,
    backgroundColor: '#0366d6',
    color: 'white',
    borderRadius: 4,
    padding: 2,
  },
  rowContainerB: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
    marginBottom: 15,
    width: '100%',
  },
  columnContainerA: {
    maxWidth: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  description: {
    wordWrap: 'break-word',
    marginTop: 5,
    fontSize: 16,
  },
  pic: { width: 50, height: 50, borderRadius: 5 },
})
const RepositoryItem = ({ item }) => {
  const handleCounts = (num) => {
    const count = num < 1000 ? num : Math.round(num / 100) / 10
    return count
  }
  return (
    <View style={styles.background}>
      <View style={styles.rowContainerA}>
        <View style={styles.avator}>
          <Image
            source={{
              uri: item.ownerAvatarUrl,
            }}
            style={styles.pic}
          />
        </View>
        <View style={styles.columnContainerA}>
          <Text style={styles.name}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}> {item.language} </Text>
        </View>
      </View>
      <View style={styles.rowContainerB}>
        <View>
          <Text style={styles.boldText}>
            {handleCounts(item.stargazersCount)}k
          </Text>
          <Text style={styles.normalText}>Stars</Text>
        </View>
        <View>
          <Text style={styles.boldText}>{handleCounts(item.forksCount)}k</Text>
          <Text style={styles.normalText}>Forks</Text>
        </View>
        <View>
          <Text style={styles.boldText}>{item.reviewCount}</Text>
          <Text style={styles.normalText}>Reviews</Text>
        </View>
        <View>
          <Text style={styles.boldText}>{item.ratingAverage}</Text>
          <Text style={styles.normalText}>Rating</Text>
        </View>
      </View>
    </View>
  )
}
export default RepositoryItem
