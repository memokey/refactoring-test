const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;
  if(!event) {
    return candidate;
  }

  if (event.partitionKey) {
    candidate = event.partitionKey;
    if (candidate.length <= MAX_PARTITION_KEY_LENGTH) {
      return candidate;
    }
  } else  {
    candidate = JSON.stringify(event);
  }

  candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");

  return candidate;
};