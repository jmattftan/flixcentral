import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    width: 200,
    "@media max-width: 400": {
      width: 300,
    },
    "@media orientation: landscape": {
      width: 400,
    },
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
