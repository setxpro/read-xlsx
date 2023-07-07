import "dotenv/config";
import cors from "cors";
import http from "http";
import express from "express";
import allStores from "./actions/stores";
import preferredSellers from "./actions/actionToReadFileSellers";

const app = express();

// enable the JSON encoding
app.use(express.json());

// enable the cors middleware
app.use(
  cors({
    origin: "*",
  })
);

// console.log(allStores)

preferredSellers.forEach((element: any) => {
  const brand = element.brand;
  const reference = element.reference;
  const transaction_id = element.transaction_id;
  const transaction_action = element.transaction_action;
  const transaction_seller_id = element.transaction_seller_id;
  const transaction_store_id = element.transaction_store_id;
  const transaction_revenue = element.transaction_revenue;
  const transaction_timestamp = element.transaction_timestamp;
  const contact_id = element.contact_id;
  const contact_notification_id = element.contact_notification_id;
  const contact_channel = element.contact_channel;
  const contact_timestamp = element.contact_timestamp;
  const window_hours = element.window_hours;
  const contact_seller_id = element.contact_seller_id;
  const contact_store_id = element.contact_store_id;

  const sql = `
        INSERT INTO BigQuery_Extract (
            brand,
            reference,
transaction_id,
transaction_action,
transaction_seller_id,
transaction_store_id,
transaction_revenue,
transaction_timestamp,
contact_id,
contact_notification_id,
contact_channel,
contact_timestamp,
window_hours,
contact_seller_id,
contact_store_id
        ) VALUES (
            '${brand}', 
            '${reference}', 
            '${transaction_id}', 
            '${transaction_action}', 
            '${transaction_seller_id}', 
            '${transaction_store_id}', 
            '${transaction_revenue}', 
            '${transaction_timestamp}', 
            '${contact_id}', 
            '${contact_notification_id}',
            '${contact_channel}',
            '${contact_timestamp}',
            '${window_hours}',
            '${contact_seller_id}',
            '${contact_store_id}',
            )
    `;

    console.log(sql)
});

// console.log(storePhoneNumbers)

export const server = http.createServer(app);
