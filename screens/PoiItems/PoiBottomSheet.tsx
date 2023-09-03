import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Button, Text } from "react-native-paper";

const PoiBottomSheet = (
  { bottomSheetModalRef, snapPoints, handleSheetChanges, poi, navigation }: any // Don't be lazy go and put the correct types later
) => {
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      {poi ? (
        <View style={styles.contentContainer}>
          <Text>{poi.title}</Text>
          <Button
            // disabled={markers.length === 0 ? true : false}
            mode="contained"
            onPress={() => {
              navigation.navigate("CommStack");
            }}
          >
            Scan Identification Code
          </Button>
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator animating={true} />
          <Text style={{ marginTop: 10 }} variant="titleSmall">
            Awaiting data...
          </Text>
        </View>
      )}
    </BottomSheetModal>
  );
};

export default PoiBottomSheet;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 20,
  },
});