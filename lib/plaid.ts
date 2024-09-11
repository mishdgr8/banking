import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-SECRET": process.env.NEXT_PUBLIC_PLAID_SECRET,
      "PLAID-CLIENT-ID": process.env.NEXT_PUBLIC_PLAID_CLIENT_ID,
    },
  },
});

export const plaidClient = new PlaidApi(configuration);
