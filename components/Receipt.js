import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  section: {
    margin: 10,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 14,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
  },
});

const Receipt = ({ order }) => {
  return (
    <PDFViewer width="1000" height="600">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.heading}>Receipt for Order</Text>
            <Text style={styles.subheading}>
              Order Date: {new Date(order.createdAt).toLocaleString("sv-SE")}
            </Text>
            <Text style={styles.subheading}>Shipping Address:</Text>
            <Text style={styles.text}>
              {order.name}
              {"\n"}
              {order.phoneNumber}
              {"\n"}
              {order.email}
              {"\n"}
              {order.streetAddress}
              {"\n"}
              {order.postalCode}, {order.city}, {order.country}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subheading}>Products:</Text>
            {order.line_items.map((item, index) => (
              <Text key={index} style={styles.text}>
                {item.quantity} x {item.price_data.product_data.name}
              </Text>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Receipt;
