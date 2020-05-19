import React from "react";
import { StyleSheet, Image, View, Text, ScrollView } from "react-native";

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.banner} source={require("./img/bg.jpg")} />
      </View>
      <View style={styles.container}>
        <Text style={styles.tittle}>¿Qué hacer en Paris?</Text>
        <ScrollView horizontal>
          <View>
            <Image
              style={styles.city}
              source={require("./img/actividad1.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.city}
              source={require("./img/actividad2.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.city}
              source={require("./img/actividad3.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.city}
              source={require("./img/actividad4.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.city}
              source={require("./img/actividad5.jpg")}
            />
          </View>
        </ScrollView>
        <Text style={styles.tittle}>Los mejores alojamientos</Text>
        <View>
          <View>
            <Image style={styles.best} source={require("./img/mejores1.jpg")} />
          </View>
          <View>
            <Image style={styles.best} source={require("./img/mejores2.jpg")} />
          </View>
          <View>
            <Image style={styles.best} source={require("./img/mejores3.jpg")} />
          </View>
        </View>
        <Text style={styles.tittle}>Hospedajes en LA</Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Image style={styles.best} source={require("./img//hospedaje1.jpg")} />
          </View>
          <View style={styles.listItem}>
            <Image style={styles.best} source={require("./img//hospedaje2.jpg")} />
          </View>
          <View style={styles.listItem}>
            <Image style={styles.best} source={require("./img//hospedaje3.jpg")} />
          </View>
          <View style={styles.listItem}>
            <Image style={styles.best} source={require("./img//hospedaje4.jpg")} />
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  tittle: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 20,
  },
  container: {
    marginHorizontal: 10,
  },
  city: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  best:{
    width: "100%",
    height: 200,
    marginVertical: 5
  },
  list: {
flexDirection: "row",
flexWrap: 'wrap',
justifyContent: 'space-between'
  }, 
  listItem: {
flexBasis: '49%',
  }
});

export default App;
