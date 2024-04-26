import {Client} from "reduct-js";
import assert from "node:assert";

// Create a client instance, then get or create a bucket
const client = new Client("http://127.0.0.1:8383", {apiToken: "my-token"});
const bucket = await client.getOrCreateBucket("bucket");

// Send a record to the "entry-1" entry with the current timestamp in microseconds
const timestamp = BigInt(Date.now()) * 1000n;
let record = await bucket.beginWrite("entry-1", timestamp);
await record.write("Some binary data");

// Query records in the "entry-1" entry of the bucket
record = await bucket.beginRead("entry-1", timestamp);

// Print meta information
console.log(`Timestamp: ${record.time}`);
console.log(`Content Length: ${record.size}`);
console.log(`Content Type: ${record.contentType}`);
console.log(`Labels: ${JSON.stringify(record.labels)}`);

// Read the record content
let content = await record.read();
assert(content.toString() === "Some binary data");

