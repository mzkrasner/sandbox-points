import { getAuthenticatedDID } from '../../solutions/utils/did/dist/index.js';
import { fromString } from 'uint8arrays';
import { CeramicClient } from "@ceramicnetwork/http-client";
import "dotenv/config";

export const getContext = async () => {
  const CERAMIC_URL = process.env.CERAMIC_URL || "";
  const CERAMIC_PRIVATE_KEY = process.env.CERAMIC_PRIVATE_KEY || "";
  const aggregationModelID = process.env.ALLOCATION_MODEL || "";

  const key = fromString(CERAMIC_PRIVATE_KEY, "base16");

  const ceramic = new CeramicClient(CERAMIC_URL);
  ceramic.did = await getAuthenticatedDID(key);
  return { ceramic, aggregationModelID };
};