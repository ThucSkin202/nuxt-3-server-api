import mongoose from "mongoose";
import type { Nitro } from "nitropack";

export default async (_nitroApp: Nitro) => {
  //run your connect code here
  const config = useRuntimeConfig();
  // connect to mongodb
  mongoose
    .connect(config.MONGO_URI)
    .then(() => console.log(`Connected to DB`))
    .catch((e) => console.log(e));
};
