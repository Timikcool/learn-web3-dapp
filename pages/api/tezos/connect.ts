import type { NextApiRequest, NextApiResponse } from "next";
import { TezosToolkit } from "@taquito/taquito";

const url = "https://mainnet-tezos.giganode.io";
const toolkit = new TezosToolkit(url);

export default function connect(req: NextApiRequest, res: NextApiResponse) {
  toolkit.tz
    .getBalance("tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY")
    .then((balance) => {
      res.status(200).json({ balance });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}
